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
    const rows = (data ?? []) as VideoRecord[];
    setVideos(rows);

    const entries = await Promise.all(
      rows.map(async (v) => [v.id, await signedUrl(COVER_BUCKET, v.cover_path)] as const)
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
