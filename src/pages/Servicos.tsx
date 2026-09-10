import { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { Search, ShieldCheck, Building2, Lightbulb, ArrowRight, FileCheck2, Ruler, Wrench } from "lucide-react";
import { Seo } from "@/components/Seo";
import { PageBanner } from "@/components/PageBanner";
import { SERVICES, whatsappUrl } from "@/lib/site";

const serviceIcons = [Lightbulb, ShieldCheck, Building2, Ruler, FileCheck2, Search, Wrench];
const services = SERVICES.map((service, index) => ({
  ...service,
  icon: serviceIcons[index],
  tag: ["Estratégia técnica", "Segurança", "Execução", "Projetos", "Diagnóstico", "Precisão aérea", "Operação"][index],
  desc: service.summary,
  details: service.deliverables,
}));
const Servicos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Serviços de Engenharia Civil no RJ | Beckmans" description="Consultoria, projetos, obras, segurança do trabalho, vistorias, laudos e manutenção industrial no Rio de Janeiro." path="/servicos" />

      <Navbar />

       <main id="main-content" className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl space-y-6 mb-16">
            <div className="section-chip inline-flex">Áreas de atuação</div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
               Sete soluções. <span className="text-accent">Uma engenharia completa.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
               Da análise inicial à execução, encontre o suporte técnico adequado para cada etapa.
            </p>
          </div>

          <PageBanner
            image="/images/projetos/projeto-05.jpg"
            alt="Serviço de manutenção industrial executado pela Beckmans Engenharia"
            objectPosition="center 45%"
            eyebrow="Manutenção e execução"
            caption="Acompanhamento técnico do diagnóstico à execução em campo."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s) => (
               <article
                key={s.title}
                className="glass card-ring rounded-3xl p-8 flex flex-col gap-6 hover-lift transition-all duration-500 hover:border-accent/40"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                  <s.icon className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] font-bold text-accent/80 mb-2">{s.tag}</div>
                  <h2 className="text-2xl font-bold mb-3 tracking-tight">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <ul className="space-y-2 mt-auto">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-foreground/90">
                      <span className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                 </ul>
                 <Link to={`/servicos/${s.slug}`} className="inline-flex items-center gap-2 font-bold text-accent hover:underline" aria-label={`Conhecer ${s.title}`}>
                   Ver detalhes <ArrowRight className="h-4 w-4" />
                 </Link>
               </article>
            ))}
          </div>

          <div className="text-center space-y-8 pt-20">
            <h2 className="text-3xl font-bold">Quer saber qual serviço a sua obra precisa?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild className="group rounded-full text-base px-10 h-16">
                <a
                  href={whatsappUrl("Olá Beckmans! Vi a página de serviços e gostaria de um orçamento.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full text-base px-10 h-16">
                <Link to="/portfolio">Ver o portfólio</Link>
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

export default memo(Servicos);
