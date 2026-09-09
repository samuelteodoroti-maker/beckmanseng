import { memo, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Target, Eye, Shield, ArrowRight } from "lucide-react";
import aboutAuthorityAsset from "@/assets/about_authority.jpg.asset.json";

const pillars = [
  { icon: Target, title: "Missão", text: "Transformar ideias em projetos de engenharia com excelência técnica." },
  { icon: Eye, title: "Visão", text: "Ser referência em inovação e qualidade em engenharia civil e segurança." },
  { icon: Shield, title: "Valores", text: "Ética, segurança, inovação e compromisso com prazo e resultado." },
];

const checks = [
  "ART e responsabilidade técnica em todos os serviços",
  "Atendimento consultivo e personalizado",
  "Engenheiro civil especializado em gestão de obras",
  "Compromisso com prazos, normas e resultados",
];

const Sobre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sobre a Beckmans Engenharia | Engenharia Civil no Rio de Janeiro</title>
        <meta
          name="description"
          content="Fundada em 2024 no Rio de Janeiro sob gestão de Andrew Beckman, a Beckmans Engenharia une rigor técnico, drones e modelagem BIM em obras e inspeções."
        />
        <meta property="og:title" content="Sobre a Beckmans Engenharia" />
        <meta property="og:description" content="Empreendedorismo, engenharia e segurança em um só lugar." />
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl space-y-6 mb-16">
            <div className="section-chip inline-flex">Sobre nós</div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Empreendedorismo, engenharia e <span className="text-accent">segurança</span> em um só lugar.
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed">
                A Beckmans Engenharia foi fundada em 4 de junho de 2024 no Rio de Janeiro, RJ, sob a gestão de
                Andrew Matheus da Silva Beckman, engenheiro civil e gestor de projetos e obras. Atuamos no Grande Rio
                com rigor técnico e compromisso por ambientes mais seguros.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Especializados em transformar desafios complexos em soluções eficientes, combinamos conhecimento
                técnico avançado com tecnologias modernas, como inspeções por drones e modelagem BIM, para garantir
                que cada projeto seja executado com máxima precisão e segurança.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { n: "2024", l: "Fundação" },
                  { n: "+50", l: "Projetos Ativos" },
                  { n: "98%", l: "Satisfação" },
                ].map((s) => (
                  <div key={s.l} className="glass border-white/40 dark:border-white/10 rounded-3xl p-6 text-center min-h-[140px] flex flex-col items-center justify-center">
                    <div className="text-3xl lg:text-4xl font-bold text-accent tabular-nums">{s.n}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mt-3">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {checks.map((c) => (
                  <div key={c} className="flex items-start gap-3 text-foreground/90">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[16/10]">
                <img
                  src={aboutAuthorityAsset.url}
                  alt="Engenheiro da Beckmans em canteiro de obras"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              </div>
              {pillars.map((p) => (
                <div key={p.title} className="glass border-white/40 dark:border-white/10 rounded-3xl p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center shrink-0">
                      <p.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-xl font-bold mb-2 tracking-tight">{p.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{p.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-8 pt-20">
            <h2 className="text-3xl font-bold">Vamos conversar sobre o seu projeto?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild className="group rounded-full text-base px-10 h-16 shadow-glow">
                <a
                  href="https://wa.me/5521982234712?text=Olá Beckmans! Conheci a empresa pelo site e gostaria de conversar."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full text-base px-10 h-16">
                <Link to="/servicos">Ver os serviços</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default memo(Sobre);
