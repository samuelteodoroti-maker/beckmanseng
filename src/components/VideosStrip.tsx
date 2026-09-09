import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoCard } from "@/components/VideoCard";
import { VideoModal } from "@/components/VideoModal";
import { useVideos } from "@/hooks/use-videos";

export function VideosStrip() {
  const { videos, covers, loading } = useVideos();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shown = videos.slice(0, 3);

  if (loading || shown.length === 0) return null;

  return (
    <section id="videos" className="py-24 md:py-32 surface-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between reveal">
          <div className="max-w-2xl">
            <h2 className="text-h2 font-bold text-primary dark:text-white">
              Nossos <span className="text-accent">vídeos.</span>
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

        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
          {shown.map((video, i) => (
            <div key={video.id} className="w-[72%] shrink-0 snap-start sm:w-[300px]">
              <VideoCard video={video} coverUrl={covers[video.id]} onOpen={() => setOpenIndex(i)} />
            </div>
          ))}
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
