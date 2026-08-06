import { CheckCircle2, Target, Eye, Shield } from "lucide-react";
import aboutAuthorityAsset from "@/assets/about_authority.jpg.asset.json";

// 🔁 PLACEHOLDER — Substitua pela foto oficial do engenheiro / canteiro de obras.
const ABOUT_IMAGE = aboutAuthorityAsset.url;

const pillars = [
  { icon: Target, title: "Missão", text: "Transformar ideias em projetos de engenharia com excelência técnica." },
  { icon: Eye, title: "Visão", text: "Ser referência em inovação e qualidade em engenharia civil e segurança." },
  { icon: Shield, title: "Valores", text: "Ética, segurança, inovação e compromisso com prazo e resultado." },
];

const checks = [
  "Fundada em 2024 no Rio de Janeiro, RJ",
  "Gestão de Andrew Matheus da Silva Beckman",
  "Engenheiro civil e gestor de projetos/obras",
  "Atuação no Grande Rio de Janeiro",
  "ART e responsabilidade técnica em todos os projetos",
  "Atendimento consultivo e personalizado",
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          <div className="space-y-8 sm:space-y-12 reveal">
            <div className="flex items-center gap-3">
              <span className="section-index">05 —</span>
              <div className="section-chip">Sobre a Beckmans</div>
            </div>
            <h2 className="text-h2 font-bold tracking-tight">
              Empreendedorismo, engenharia e{" "}
              <span className="text-accent">segurança</span> em um só lugar.
            </h2>
            <p className="text-lead text-muted-foreground">
              A Beckmans Engenharia foi fundada em 4 de junho de 2024 no Rio de Janeiro, RJ, sob a gestão de
              Andrew Matheus da Silva Beckman, engenheiro civil e gestor de projetos/obras. Atuamos no Grande Rio
              com rigor técnico e compromisso por ambientes mais seguros.
            </p>
            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { n: "2024", l: "Fundação" },
                { n: "+50", l: "Projetos Ativos" },
                { n: "98%", l: "Satisfação" },
              ].map((s, i) => (
                <div key={i} className="glass rounded-3xl px-2 py-6 sm:p-8 text-center border-accent/10 hover:border-accent/30 transition-all duration-500 group hover:shadow-soft active:scale-95 flex flex-col items-center justify-center min-h-[140px] sm:min-h-[180px]">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent tabular-nums transition-transform group-hover:scale-110 duration-500">{s.n}</div>
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-muted-foreground mt-3 leading-tight">{s.l}</div>
                </div>
              ))}
            </div>
            {/* 🔁 PLACEHOLDER — Imagem de autoridade (troque ABOUT_IMAGE acima) */}
            <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/3] sm:aspect-[16/10]">
              <img
                src={ABOUT_IMAGE}
                alt="Engenheiro Beckmans em canteiro de obras"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 glass rounded-2xl px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium">
                Engenharia com assinatura técnica
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {checks.map((c, i) => (
                <div key={i} className="flex items-start gap-3 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:sticky lg:top-28">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="glass rounded-[2.5rem] p-6 sm:p-8 md:p-10 hover-lift reveal border-transparent hover:border-accent/20 transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[1.25rem] bg-gradient-accent flex items-center justify-center shrink-0 shadow-glow/20">
                    <p.icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-1">{p.title}</h3>
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
}
