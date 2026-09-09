import { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import droneHighAsset from "@/assets/drone_vistoria.jpeg.asset.json";
import drillAsset from "@/assets/project_drill.jpg.asset.json";
import torqueAsset from "@/assets/project_torque.jpg.asset.json";
import cleaningAsset from "@/assets/project_cleaning.jpg.asset.json";
import structureAsset from "@/assets/project_structure.jpg.asset.json";
import aboutAuthorityAsset from "@/assets/about_authority.jpg.asset.json";
import { Seo } from "@/components/Seo";
import { whatsappUrl } from "@/lib/site";

const projects = [
  { img: droneHighAsset.url, title: "Vistoria com Drone", tag: "Vistoria", meta: "Inspeção técnica de alta precisão em fachadas e coberturas." },
  { img: drillAsset.url, title: "Manutenção Industrial", tag: "Obra", meta: "Execução com ferramentas de ponta e equipe especializada." },
  { img: torqueAsset.url, title: "Segurança em Altura", tag: "Segurança", meta: "Consultoria em SST e adequação à NR-35." },
  { img: cleaningAsset.url, title: "Limpeza Técnica", tag: "Manutenção", meta: "Serviços especializados em trabalho em altura." },
  { img: structureAsset.url, title: "Inspeção de Estrutura", tag: "Inspeção", meta: "Análise de integridade estrutural com relatório técnico." },
  { img: aboutAuthorityAsset.url, title: "Controle de Voo", tag: "Tecnologia", meta: "Mapeamento e monitoramento aéreo de canteiros." },
];

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Portfólio de Engenharia no RJ | Beckmans" description="Conheça registros de obras, vistorias, inspeções e serviços técnicos realizados pela Beckmans Engenharia." path="/portfolio" />

      <Navbar />

       <main id="main-content" className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl space-y-6 mb-16">
            <div className="section-chip inline-flex">Portfólio</div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
              Projetos que <span className="text-accent">falam por si.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
               Registros de campo que apresentam áreas de atuação e soluções executadas pela equipe Beckmans.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="group relative overflow-hidden rounded-3xl h-[340px]">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-primary-foreground">
                  <div className="glass-dark backdrop-blur-md inline-flex self-start rounded-full px-4 py-1.5 text-xs font-bold text-accent border-accent/20 mb-4">
                    {p.tag}
                  </div>
                  <h2 className="text-2xl font-bold mb-2 leading-tight tracking-tight">{p.title}</h2>
                  <p className="text-sm text-primary-foreground/75">{p.meta}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center space-y-8 pt-20">
            <h2 className="text-3xl font-bold">Quer um projeto assim para a sua obra?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild className="group rounded-full text-base px-10 h-16 shadow-glow">
                <a
                  href={whatsappUrl("Olá Beckmans! Vi o portfólio e gostaria de solicitar um orçamento para meu projeto.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Orçamento
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

export default memo(Portfolio);
