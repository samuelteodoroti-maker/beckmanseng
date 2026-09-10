import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoCard } from "@/components/VideoCard";
import { VideoModal } from "@/components/VideoModal";
import { useVideos } from "@/hooks/use-videos";

export function VideosStrip() {
  const { videos, covers, loading } = useVideos();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shown = videos.slice(0, 3);
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * Math.min(track.clientWidth * 0.82, 320), behavior: "smooth" });
  };

  if (loading || shown.length === 0) return null;

  return (
    <section id="videos" className="py-24 md:py-32 surface-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between reveal">
          <div className="max-w-2xl">
            <h2 className="text-h2 font-bold text-primary dark:text-white">
              Beckmans <span className="text-accent">em ação.</span>
            </h2>
            <p className="text-lead mt-3 text-muted-foreground">
              Registros em vídeo do trabalho da Beckmans Engenharia.
            </p>
          </div>
          <Button asChild variant="accent" className="rounded-full h-12 px-8">
            <Link to="/videos">
              Ver todos os vídeos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div ref={trackRef} className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {shown.map((video, i) => (
            <div key={video.id} className="w-[72%] shrink-0 snap-start sm:w-[300px]">
              <VideoCard video={video} coverUrl={covers[video.id]} onOpen={() => setOpenIndex(i)} />
            </div>
          ))}
        </div>
        <div className="mt-5 flex gap-2 sm:hidden">
          <Button variant="outline" size="icon" onClick={() => move(-1)} aria-label="Vídeo anterior" className="rounded-full">
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => move(1)} aria-label="Próximo vídeo" className="rounded-full">
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </div>

      <VideoModal
        videos={shown}
        covers={covers}
        index={openIndex}
        onIndexChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  );
}
