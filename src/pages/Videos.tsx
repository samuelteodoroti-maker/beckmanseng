import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Seo } from "@/components/Seo";
import { VideoCard } from "@/components/VideoCard";
import { VideoModal } from "@/components/VideoModal";
import { useVideos } from "@/hooks/use-videos";
import { useReveal } from "@/hooks/use-reveal";

const Videos = () => {
  useReveal();
  const { videos, covers, loading } = useVideos();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Vídeos | Beckmans Engenharia"
        description="Vídeos da Beckmans Engenharia: obras, vistorias, inspeções e serviços de engenharia civil no Rio de Janeiro."
      />
      <Navbar />
      <main id="main-content" className="flex-grow pt-28 sm:pt-32">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <h1 className="text-h2 font-bold text-primary dark:text-white">
                Vídeos da <span className="text-accent">Beckmans Engenharia.</span>
              </h1>
              <p className="text-lead mt-4 text-muted-foreground">
                Toque em um vídeo para assistir. Você pode avançar e voltar entre eles.
              </p>
            </div>

            {loading ? (
              <p className="text-muted-foreground">Carregando vídeos…</p>
            ) : videos.length === 0 ? (
              <p className="text-muted-foreground">Nenhum vídeo publicado ainda.</p>
            ) : (
              <>
                {/* Celular: card principal com indicação do próximo */}
                <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:hidden">
                  {videos.map((video, i) => (
                    <div key={video.id} className="w-[82%] shrink-0 snap-center">
                      <VideoCard video={video} coverUrl={covers[video.id]} onOpen={() => setOpenIndex(i)} />
                    </div>
                  ))}
                </div>

                {/* Tablet: 2 por linha · Desktop: 3 por linha */}
                <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                  {videos.map((video, i) => (
                    <VideoCard
                      key={video.id}
                      video={video}
                      coverUrl={covers[video.id]}
                      onOpen={() => setOpenIndex(i)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <VideoModal
        videos={videos}
        covers={covers}
        index={openIndex}
        onIndexChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Videos;
