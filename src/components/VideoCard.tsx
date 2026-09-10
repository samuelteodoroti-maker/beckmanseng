import { Play, Film } from "lucide-react";
import { formatDuration, type VideoRecord } from "@/hooks/use-videos";
import { Button } from "@/components/ui/button";

type Props = {
  video: VideoRecord;
  coverUrl?: string | null;
  onOpen: () => void;
};

export function VideoCard({ video, coverUrl, onOpen }: Props) {
  const duration = formatDuration(video.duration_seconds);

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={onOpen}
      aria-label={`Assistir ${video.title}`}
      className="group relative block h-auto w-full overflow-hidden rounded-2xl border border-border bg-card p-0 text-left shadow-soft transition-all duration-300 hover:border-accent hover:bg-card focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-[hsl(var(--navy-deep))]">
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={`Capa do ${video.title}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-white/40">
            <Film className="h-10 w-10" aria-hidden="true" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy-deep))]/90 via-transparent to-transparent" />

        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-elegant transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-1 h-7 w-7" aria-hidden="true" />
          </span>
        </span>

        {duration && (
          <span className="absolute right-3 top-3 rounded-full bg-[hsl(var(--navy-deep))]/85 px-3 py-1 text-xs font-bold text-white">
            {duration}
          </span>
        )}

        <span className="absolute inset-x-4 bottom-4">
          {video.category && (
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-accent">
              {video.category}
            </span>
          )}
          <span className="block text-base font-bold text-white">{video.title}</span>
          {video.description && (
            <span className="mt-1 line-clamp-2 block text-sm text-white/80">{video.description}</span>
          )}
        </span>
      </div>
    </Button>
  );
}
