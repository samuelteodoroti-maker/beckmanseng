import { memo, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Helmet } from "react-helmet";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Inspections = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Vistorias e Inspeções Técnicas | Beckmans Engenharia</title>
        <meta 
          name="description" 
          content="Serviços especializados de vistorias, inspeções prediais e perícias técnicas em engenharia civil no Rio de Janeiro. Segurança e conformidade para seu imóvel." 
        />
        <meta property="og:title" content="Vistorias e Inspeções Técnicas | Beckmans Engenharia" />
        <meta property="og:description" content="Segurança e conformidade técnica para seu imóvel com vistorias e inspeções especializadas." />
      </Helmet>

      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6 text-center lg:text-left">
              <div className="flex flex-row items-center gap-3 mb-4 justify-center lg:justify-start">
                <div className="section-chip">Especialidade</div>
              </div>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                Vistorias e Inspeções <br />
                <span className="text-accent">Técnicas</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Garantimos a segurança, conservação e conformidade legal da sua edificação através de diagnósticos precisos e relatórios detalhados.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-3xl space-y-4 border-accent/20">
                <ShieldCheck className="w-12 h-12 text-accent" />
                <h3 className="text-2xl font-bold">Inspeção Predial</h3>
                <p className="text-muted-foreground">
                  Análise sistêmica das condições de conservação, manutenção e segurança da edificação, conforme as normas vigentes.
                </p>
              </div>
              <div className="glass p-8 rounded-3xl space-y-4 border-accent/20">
                <CheckCircle2 className="w-12 h-12 text-accent" />
                <h3 className="text-2xl font-bold">Vistoria de Drone</h3>
                <p className="text-muted-foreground">
                  Inspeções de fachadas e telhados com alta tecnologia, alcançando locais de difícil acesso com total segurança e precisão.
                </p>
              </div>
            </div>

            <div className="space-y-8 bg-primary/5 p-8 rounded-3xl border border-primary/10">
              <h2 className="text-3xl font-bold">Por que realizar inspeções?</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Identificação precoce de patologias",
                  "Redução de custos com manutenção",
                  "Garantia de segurança dos usuários",
                  "Valorização do patrimônio imobiliário",
                  "Conformidade com a legislação",
                  "Apoio técnico para tomada de decisão"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center space-y-8 pt-8">
              <h2 className="text-3xl font-bold">Precisa de um laudo técnico?</h2>
              <Button
                variant="accent"
                size="lg"
                asChild
                className="group rounded-full text-base px-10 h-16 shadow-glow transition-all duration-300 hover:scale-105"
              >
                <a
                  href="https://wa.me/5521982234712?text=Olá Beckmans! Preciso de uma cotação para vistoria/inspeção técnica."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com Especialista
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
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

export default memo(Inspections);
