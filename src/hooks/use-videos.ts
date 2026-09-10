import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type VideoRecord = {
  id: string;
  title: string;
  description: string;
  category: string;
  file_name: string;
  video_path: string | null;
  cover_path: string | null;
  duration_seconds: number | null;
  sort_order: number;
  published: boolean;
};

export const VIDEO_BUCKET = "videos";
export const COVER_BUCKET = "video-covers";

const LOCAL_VIDEOS: VideoRecord[] = [
  { id: "local-01", title: "Beckmans em ação — 01", description: "Engenharia e execução técnica em campo.", category: "Engenharia", file_name: "hsbe-video-01.mp4", video_path: null, cover_path: "/images/projetos/projeto-01.jpg", duration_seconds: 31, sort_order: 0, published: true },
  { id: "local-02", title: "Beckmans em ação — 02", description: "Registros do trabalho realizado pela equipe Beckmans.", category: "Obras", file_name: "hsbe-video-02.mp4", video_path: null, cover_path: "/images/projetos/projeto-02.jpg", duration_seconds: 26, sort_order: 1, published: true },
  { id: "local-03", title: "Beckmans em ação — 03", description: "Procedimentos técnicos executados com segurança.", category: "Segurança", file_name: "hsbe-video-03.mp4", video_path: null, cover_path: "/images/projetos/projeto-03.jpg", duration_seconds: 12, sort_order: 2, published: true },
  { id: "local-04", title: "Beckmans em ação — 04", description: "Inspeções e soluções para ambientes industriais.", category: "Inspeção", file_name: "hsbe-video-04.mp4", video_path: null, cover_path: "/images/projetos/projeto-04.jpg", duration_seconds: 35, sort_order: 3, published: true },
  { id: "local-05", title: "Beckmans em ação — 05", description: "Manutenção planejada para preservar estruturas.", category: "Manutenção", file_name: "hsbe-video-05.mp4", video_path: null, cover_path: "/images/projetos/projeto-05.jpg", duration_seconds: 35, sort_order: 4, published: true },
  { id: "local-06", title: "Beckmans em ação — 06", description: "Precisão e acompanhamento em cada etapa.", category: "Engenharia", file_name: "hsbe-video-06.mp4", video_path: null, cover_path: "/images/projetos/projeto-06.jpg", duration_seconds: 24, sort_order: 5, published: true },
];

export async function signedUrl(bucket: string, path: string | null, expiresIn = 3600) {
  if (!path) return null;
  const { data, error } = await supabase.storage.from(bucket).createSignedUrl(path, expiresIn);
  if (error) return null;
  return data?.signedUrl ?? null;
}

export function useVideos(options?: { onlyPublished?: boolean }) {
  const onlyPublished = options?.onlyPublished ?? true;
  const [videos, setVideos] = useState<VideoRecord[]>([]);
  const [covers, setCovers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    let query = supabase.from("videos").select("*").order("sort_order", { ascending: true });
    if (onlyPublished) query = query.eq("published", true);
    const { data } = await query;
    const databaseRows = (data ?? []) as VideoRecord[];
    const rows = LOCAL_VIDEOS.map((fallback, index) => {
      const saved = databaseRows.find((video) => video.sort_order === index);
      return saved
        ? {
            ...fallback,
            ...saved,
            file_name: fallback.file_name,
            cover_path: saved.cover_path || fallback.cover_path,
            duration_seconds: saved.duration_seconds || fallback.duration_seconds,
          }
        : fallback;
    }).filter((video) => !onlyPublished || video.published);
    setVideos(rows);

    const entries = await Promise.all(
      rows.map(async (v) => [
        v.id,
        v.cover_path?.startsWith("/") ? v.cover_path : await signedUrl(COVER_BUCKET, v.cover_path),
      ] as const)
    );
    setCovers(Object.fromEntries(entries.filter(([, url]) => !!url) as [string, string][]));
    setLoading(false);
  }, [onlyPublished]);

  useEffect(() => {
    void load();
  }, [load]);

  return { videos, covers, loading, reload: load };
}

export function formatDuration(seconds: number | null) {
  if (!seconds) return null;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

// Caminho público do arquivo em /public/videos (sem imports de src/assets e sem blob URLs)
export function localVideoUrl(video: Pick<VideoRecord, "file_name" | "sort_order">) {
  const match = video.file_name?.match(/(\d{1,2})/);
  const n = match ? match[1] : String((video.sort_order ?? 0) + 1);
  return `/videos/hsbe-video-${n.padStart(2, "0")}.mp4`;
}
