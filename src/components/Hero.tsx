import { memo, useCallback } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroSideAsset from "@/assets/hero_side.jpg.asset.json";
import { whatsappUrl } from "@/lib/site";

const HERO_SIDE_IMAGE = heroSideAsset.url;

export const Hero = memo(function Hero() {
  const scrollTo = useCallback((id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), []);

  return (
    <section id="home" className="relative min-h-[90dvh] lg:min-h-dvh flex items-center pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden will-change-transform">
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_SIDE_IMAGE}
          alt="Profissional da Beckmans Engenharia em atividade técnica"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        {/* Overlay azul-marinho profundo para leitura garantida */}
        <div className="absolute inset-0 bg-[hsl(var(--navy-deep))]/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy-deep))]/95 via-[hsl(var(--navy-deep))]/70 to-[hsl(var(--navy))]/60" />
        <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
      </div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 animate-fade-in">

            <p className="eyebrow text-accent">Engenharia civil no Rio de Janeiro</p>
            <h1 className="text-display font-bold text-white leading-[1.08]">
              Segurança técnica para construir, inspecionar e transformar.
            </h1>


            <p className="text-lead text-white/85 max-w-2xl">
              Projetos, construções, consultoria e vistorias com atendimento próximo e decisões orientadas por engenharia.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                variant="accent"
                size="lg"
                asChild
                className="group rounded-full text-base px-6 sm:px-10 h-14 w-full sm:w-auto justify-center transition-all duration-300 active:scale-95"
              >
                <a
                  href={whatsappUrl("Olá Beckmans! Vi o site e quero solicitar um orçamento para o meu projeto.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                onClick={() => scrollTo("services")}
                className="btn-on-dark-outline rounded-full text-base px-6 sm:px-8 h-14 w-full sm:w-auto justify-center font-semibold"
              >
                 Conhecer nossos serviços
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-7 gap-y-3 pt-3 text-base font-semibold text-white/90">
              {["Atendimento no Grande Rio", "Projetos 2D, 3D e BIM", "Vistorias com drone"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" /> {item}
                </span>
              ))}
            </div>

          </div>

          {/* Visual card */}
          <div className="lg:col-span-5 relative animate-scale-in max-w-md mx-auto lg:max-w-none w-full">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-white/5 p-2 shadow-elegant">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                <img
                  src={HERO_SIDE_IMAGE}
                  alt="Projeto de engenharia civil"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy-deep))]/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-[hsl(var(--navy-deep))]/90 p-5 backdrop-blur-md">
                  <div className="text-sm font-bold text-accent">Precisão em cada etapa</div>
                  <div className="mt-1 text-sm text-white/85">Do diagnóstico técnico à execução da obra.</div>
                </div>
              </div>
            </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
