import { memo } from "react";
import { CheckCircle2, Target, Eye, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aboutAuthorityAsset from "@/assets/about_authority.jpg.asset.json";

// 🔁 PLACEHOLDER — Substitua pela foto oficial do engenheiro / canteiro de obras.
const ABOUT_IMAGE = aboutAuthorityAsset.url;

const pillars = [
  { icon: Target, title: "Missão", text: "Transformar ideias em projetos de engenharia com excelência técnica." },
  { icon: Eye, title: "Visão", text: "Ser referência em inovação e qualidade em engenharia civil e segurança." },
  { icon: Shield, title: "Valores", text: "Ética, segurança, inovação e compromisso com prazo e resultado." },
];

const checks = [
               "Responsabilidade técnica conforme o escopo contratado",
  "Atendimento consultivo e personalizado",
  "Engenheiro civil especializado em gestão de obras",
  "Compromisso com prazos, normas e resultados",
];

export const About = memo(function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-stretch">
          <div className="flex flex-col space-y-8 sm:space-y-12 reveal">
            
            <div className="space-y-6">
              <h2 className="text-h2 font-bold tracking-tight">
                Empreendedorismo, engenharia e{" "}
                <span className="text-accent">segurança</span> em um só lugar.
              </h2>
              <div className="space-y-4">
                <p className="text-lead text-muted-foreground">
                  Sob a gestão de Andrew Matheus da Silva Beckman, a Beckmans Engenharia atende o Grande Rio com
                  soluções para obras, projetos, inspeções e segurança, sempre com acompanhamento técnico próximo.
                </p>
              </div>
            </div>

            {/* 🔁 PLACEHOLDER — Imagem de autoridade (troque ABOUT_IMAGE acima) */}
            <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/3] sm:aspect-[16/10] flex-grow">
              <img
                src={ABOUT_IMAGE}
                alt="Engenheiro Beckmans em canteiro de obras"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 glass rounded-2xl px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium">
                Engenharia com assinatura técnica
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {checks.slice(0, 2).map((c, i) => (
                <div key={i} className="flex items-start gap-3 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">{c}</span>
                </div>
              ))}
            </div>

            <div className="pb-4">
              <Button variant="accent" size="lg" asChild className="group rounded-full text-base px-10 h-14 shadow-glow">
                <Link to="/sobre">
                  Conhecer a Beckmans
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:sticky lg:top-28 content-start">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="glass border-white/40 dark:border-white/10 rounded-3xl p-8 hover-lift reveal transition-all duration-500 flex flex-col justify-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center shrink-0 shadow-glow/20">
                    <p.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold mb-2 tracking-tight">{p.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{p.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
