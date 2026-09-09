import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { signedUrl, VIDEO_BUCKET, type VideoRecord } from "@/hooks/use-videos";

type Props = {
  videos: VideoRecord[];
  index: number | null;
  covers: Record<string, string>;
  onIndexChange: (index: number) => void;
  onClose: () => void;
};

export function VideoModal({ videos, index, covers, onIndexChange, onClose }: Props) {
  const open = index !== null;
  const current = open ? videos[index] : undefined;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  // Carrega o arquivo somente quando o vídeo é aberto (nunca no load da página)
  useEffect(() => {
    let active = true;
    setSrc(null);
    if (!current?.video_path) return;
    void signedUrl(VIDEO_BUCKET, current.video_path).then((url) => {
      if (active) setSrc(url);
    });
    return () => {
      active = false;
    };
  }, [current?.id, current?.video_path]);

  // Pausa ao trocar de vídeo ou fechar o modal
  useEffect(() => {
    const el = videoRef.current;
    return () => {
      if (el) {
        el.pause();
        el.currentTime = 0;
      }
    };
  }, [current?.id, open]);

  if (!open || !current) return null;

  const go = (delta: number) => {
    const next = (index! + delta + videos.length) % videos.length;
    videoRef.current?.pause();
    onIndexChange(next);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (!o) {
          videoRef.current?.pause();
          onClose();
        }
      }}
    >
      <DialogContent className="max-w-[420px] border-border bg-[hsl(var(--navy-deep))] p-4 sm:p-6">
        <DialogTitle className="pr-8 text-white">{current.title}</DialogTitle>
        <DialogDescription className="text-white/75">
          {current.description || "Vídeo institucional da Beckmans Engenharia."}
        </DialogDescription>

        <div className="relative mx-auto aspect-[9/16] w-full max-h-[70vh] overflow-hidden rounded-xl bg-black">
          {src ? (
            <video
              ref={videoRef}
              key={current.id}
              src={src}
              poster={covers[current.id]}
              controls
              playsInline
              preload="none"
              muted={false}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm text-white/70">
              {current.video_path
                ? "Carregando vídeo…"
                : "Arquivo ainda não enviado para este vídeo."}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => go(-1)}
            aria-label="Vídeo anterior"
            className="btn-on-dark-outline rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </Button>
          <span className="text-sm font-bold text-white" aria-live="polite">
            {index! + 1} de {videos.length}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => go(1)}
            aria-label="Próximo vídeo"
            className="btn-on-dark-outline rounded-full"
          >
            Próximo
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
