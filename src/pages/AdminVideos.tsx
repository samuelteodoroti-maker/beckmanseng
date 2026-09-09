import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Seo } from "@/components/Seo";
import { COVER_BUCKET, VIDEO_BUCKET, useVideos, type VideoRecord } from "@/hooks/use-videos";
import { toast } from "sonner";

const GUIDE = [
  "MP4 com codec H.264",
  "Resolução 1080 × 1920 (vertical 9:16)",
  "30 quadros por segundo",
  "Áudio AAC",
  "Taxa de dados entre 4 e 6 Mbps",
  "Opção “faststart” ativada",
  "Tamanho recomendado: abaixo de 25 MB por vídeo",
];

const AdminVideos = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const { videos, loading, reload } = useVideos({ onlyPublished: false });
  const [drafts, setDrafts] = useState<Record<string, Partial<VideoRecord>>>({});

  useEffect(() => {
    const check = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        navigate("/auth", { replace: true });
        return;
      }
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", sessionData.session.user.id)
        .eq("role", "admin")
        .maybeSingle();
      setIsAdmin(!!data);
    };
    void check();
  }, [navigate]);

  const setField = useCallback((id: string, field: keyof VideoRecord, value: unknown) => {
    setDrafts((d) => ({ ...d, [id]: { ...d[id], [field]: value } }));
  }, []);

  const save = async (video: VideoRecord) => {
    const patch = drafts[video.id];
    if (!patch) return;
    const { error } = await supabase.from("videos").update(patch).eq("id", video.id);
    if (error) return toast.error("Não foi possível salvar: " + error.message);
    setDrafts((d) => {
      const next = { ...d };
      delete next[video.id];
      return next;
    });
    toast.success("Alterações salvas.");
    void reload();
  };

  const upload = async (video: VideoRecord, file: File, kind: "video" | "cover") => {
    const bucket = kind === "video" ? VIDEO_BUCKET : COVER_BUCKET;
    const ext = file.name.split(".").pop() ?? (kind === "video" ? "mp4" : "jpg");
    const path = `${video.id}/${kind}.${ext}`;
    const { error } = await supabase.storage.from(bucket).upload(path, file, { upsert: true });
    if (error) return toast.error("Falha no envio: " + error.message);
    const patch = kind === "video" ? { video_path: path } : { cover_path: path };
    const { error: dbError } = await supabase.from("videos").update(patch).eq("id", video.id);
    if (dbError) return toast.error("Falha ao registrar arquivo: " + dbError.message);
    toast.success(kind === "video" ? "Vídeo enviado." : "Capa enviada.");
    void reload();
  };

  if (isAdmin === null) {
    return <main className="min-h-screen grid place-items-center text-muted-foreground">Verificando acesso…</main>;
  }

  if (!isAdmin) {
    return (
      <main className="min-h-screen grid place-items-center px-4 text-center">
        <div className="max-w-md space-y-4">
          <h1 className="text-2xl font-bold text-primary dark:text-white">Acesso restrito</h1>
          <p className="text-muted-foreground">
            Sua conta ainda não tem permissão de administrador para gerenciar os vídeos.
          </p>
          <Button variant="outline" onClick={() => supabase.auth.signOut().then(() => navigate("/auth"))}>
            Sair
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen surface-light py-16">
      <Seo title="Gerenciar vídeos | Beckmans Engenharia" description="Área administrativa de vídeos." noindex />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-bold text-primary dark:text-white">Gerenciar vídeos</h1>
          <Button variant="outline" onClick={() => supabase.auth.signOut().then(() => navigate("/auth"))}>
            Sair
          </Button>
        </div>

        <div className="rounded-2xl border border-accent/40 bg-accent/10 p-6">
          <h2 className="text-lg font-bold text-primary dark:text-white">Antes de enviar os arquivos</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Comprima cada vídeo no seu computador (a compressão não acontece aqui no site) usando:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {GUIDE.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>

        {loading ? (
          <p className="text-muted-foreground">Carregando…</p>
        ) : (
          <div className="space-y-6">
            {videos.map((video) => {
              const draft = { ...video, ...drafts[video.id] } as VideoRecord;
              return (
                <div key={video.id} className="rounded-2xl border border-border bg-card p-6 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-sm font-bold uppercase tracking-widest text-accent">
                      {video.file_name}
                    </span>
                    <div className="flex items-center gap-3">
                      <Label htmlFor={`pub-${video.id}`} className="text-sm">Publicado</Label>
                      <Switch
                        id={`pub-${video.id}`}
                        checked={draft.published}
                        onCheckedChange={(v) => setField(video.id, "published", v)}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor={`title-${video.id}`}>Título</Label>
                      <Input
                        id={`title-${video.id}`}
                        value={draft.title}
                        onChange={(e) => setField(video.id, "title", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`cat-${video.id}`}>Categoria</Label>
                      <Input
                        id={`cat-${video.id}`}
                        value={draft.category}
                        onChange={(e) => setField(video.id, "category", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor={`desc-${video.id}`}>Descrição</Label>
                      <Textarea
                        id={`desc-${video.id}`}
                        value={draft.description}
                        onChange={(e) => setField(video.id, "description", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`order-${video.id}`}>Ordem</Label>
                      <Input
                        id={`order-${video.id}`}
                        type="number"
                        value={draft.sort_order}
                        onChange={(e) => setField(video.id, "sort_order", Number(e.target.value))}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor={`file-${video.id}`}>
                        Arquivo do vídeo (MP4 vertical) {video.video_path ? "· enviado" : "· pendente"}
                      </Label>
                      <Input
                        id={`file-${video.id}`}
                        type="file"
                        accept="video/mp4"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f) void upload(video, f, "video");
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`cover-${video.id}`}>
                        Imagem de capa {video.cover_path ? "· enviada" : "· pendente"}
                      </Label>
                      <Input
                        id={`cover-${video.id}`}
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f) void upload(video, f, "cover");
                        }}
                      />
                    </div>
                  </div>

                  <Button variant="accent" onClick={() => save(video)} disabled={!drafts[video.id]}>
                    Salvar alterações
                  </Button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default AdminVideos;
