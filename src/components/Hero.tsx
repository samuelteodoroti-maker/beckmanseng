import { memo, useCallback } from "react";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroSideAsset from "@/assets/hero_side.jpg.asset.json";

// 🔁 PLACEHOLDER — troque a URL abaixo pela imagem oficial da Beckmans
// Fonte: Unsplash (tema: modern construction / civil engineering)
const HERO_BG_IMAGE =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80";
const HERO_SIDE_IMAGE = heroSideAsset.url;

export const Hero = memo(function Hero() {
  const scrollTo = useCallback((id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), []);

  return (
    <section id="home" className="relative min-h-[90dvh] lg:min-h-dvh flex items-center pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden will-change-transform">
      {/* 🔁 PLACEHOLDER — Imagem de fundo full-width (troque HERO_BG_IMAGE acima) */}
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_BG_IMAGE}
          alt="Construção civil moderna"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        {/* Overlay progressivo para garantir legibilidade absoluta em qualquer tema */}
        <div className="absolute inset-0 bg-primary/75 dark:bg-background/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary/40 dark:from-background/20 dark:to-background/30" />
        <div className="absolute inset-0 grid-pattern opacity-[0.15]" />
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 animate-fade-in">
            <div className="flex flex-row items-center gap-3 sm:gap-4 mb-8">
              <div className="section-chip !bg-white/10 !backdrop-blur-md !border-white/20 !text-white shadow-xl">
                <Sparkles className="h-4 w-4 mr-1 sm:mr-2" />
                Beckmans Engenharia
              </div>
            </div>

            <h1 className="text-display font-bold text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.3)] leading-[1.1]">
              Engenharia Civil com <br />
              <span className="relative inline-block mt-2">
                <span className="bg-gradient-to-r from-accent to-emerald-400 bg-clip-text text-transparent drop-shadow-none">
                  Inovação e Qualidade.
                </span>
              </span>
            </h1>

            <p className="text-lead text-white/85 max-w-2xl">
              Transformamos ideias em projetos com excelência. Vistorias, inspeções, construções e consultoria
              — tudo com o rigor técnico que sua obra merece.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                variant="accent"
                size="lg"
                asChild
                className="group rounded-full text-base px-6 sm:px-10 h-14 shadow-glow w-full sm:w-auto justify-center transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <a
                  href="https://wa.me/5521982234712?text=Ol%C3%A1%20Beckmans!%20Vi%20o%20site%20de%20voc%C3%AAs%20e%20quero%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollTo("services")}
                className="rounded-full text-base px-6 sm:px-8 h-14 glass border-primary/20 w-full sm:w-auto justify-center"
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 sm:gap-10 pt-6 sm:pt-10">
              {[
                { icon: ShieldCheck, label: "Fundada em 2024", sub: "Rio de Janeiro, RJ" },
                { icon: Zap, label: "Projetos 2D e 3D", sub: "Tecnologia BIM" },
                { icon: Sparkles, label: "CREA Ativo", sub: "Responsabilidade técnica" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-4 group transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl glass flex items-center justify-center bg-white/10 border-white/30 shadow-lg group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                    <b.icon className="h-7 w-7 text-accent drop-shadow-[0_0_8px_rgba(77,201,160,0.5)]" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">{b.label}</div>
                    <div className="text-sm text-white/70 font-medium">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div className="lg:col-span-5 relative animate-scale-in max-w-md mx-auto lg:max-w-none w-full">
            <div className="relative rounded-3xl overflow-hidden glass p-2 shadow-elegant">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                {/* 🔁 PLACEHOLDER — Imagem lateral do Hero (troque HERO_SIDE_IMAGE acima) */}
                <img
                  src={HERO_SIDE_IMAGE}
                  alt="Projeto de engenharia civil"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                {/* Floating stats */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 glass border-white/40 rounded-2xl px-4 py-3 animate-float">
                  <div className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">Projetos ativos</div>
                  <div className="text-xl sm:text-2xl font-black text-accent">+50</div>
                </div>
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 glass border-white/40 rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider">Satisfação</div>
                  <div className="text-xl sm:text-2xl font-black text-accent">98%</div>
                </div>
              </div>
            </div>
            {/* Decorative chevrons echoing logo */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-accent/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
});
