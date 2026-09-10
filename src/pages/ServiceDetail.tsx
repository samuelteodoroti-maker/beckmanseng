import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Users, Wrench } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { SERVICES, whatsappUrl } from "@/lib/site";
import { PageBanner } from "@/components/PageBanner";

const SERVICE_IMAGES: Record<string, { image: string; alt: string; position: string; caption: string }> = {
  "consultoria-em-engenharia": { image: "/images/projetos/projeto-06.jpg", alt: "Avaliação técnica de estrutura pela Beckmans Engenharia", position: "center 40%", caption: "Análise técnica em campo para orientar decisões seguras." },
  "seguranca-do-trabalho": { image: "/images/projetos/projeto-03.jpg", alt: "Trabalho em altura com procedimentos de segurança", position: "center 35%", caption: "Segurança em altura com procedimentos e supervisão técnica." },
  "reformas-e-construcoes": { image: "/images/projetos/projeto-09.jpg", alt: "Obra acompanhada pela Beckmans Engenharia", position: "center", caption: "Execução acompanhada do início ao fim da obra." },
  "projetos-2d-3d-bim": { image: "/images/projetos/projeto-10.jpg", alt: "Levantamento em campo para projetos técnicos", position: "center", caption: "Levantamento preciso em campo para projetos fiéis à realidade." },
  "vistorias-e-laudos": { image: "/images/projetos/projeto-04.jpg", alt: "Vistoria de cobertura para elaboração de laudo", position: "center 40%", caption: "Vistoria detalhada que sustenta laudos técnicos." },
  "inspecoes-com-drone": { image: "/images/projetos/projeto-01.jpg", alt: "Inspeção aérea com drone", position: "center", caption: "Registro aéreo de áreas de difícil acesso." },
  "manutencao-industrial": { image: "/images/projetos/projeto-05.jpg", alt: "Manutenção industrial em instalação fabril", position: "center 45%", caption: "Manutenção planejada para manter a operação segura." },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((item) => item.slug === slug);

  useEffect(() => window.scrollTo(0, 0), [slug]);
  if (!service) return <Navigate to="/servicos" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={`${service.title} no Rio de Janeiro | Beckmans`}
        description={`${service.summary} Solicite uma avaliação técnica da Beckmans Engenharia.`}
        path={`/servicos/${service.slug}`}
      />
      <Navbar />
      <main id="main-content">
        <section className="page-hero">
          <div className="site-container max-w-5xl">
            <Link to="/servicos" className="inline-flex items-center gap-2 text-sm font-bold text-accent mb-8 hover:underline">
              <ArrowLeft className="h-4 w-4" /> Todos os serviços
            </Link>
            <p className="eyebrow">Engenharia aplicada ao seu desafio</p>
            <h1 className="page-title">{service.title}</h1>
            <p className="page-lead">{service.summary}</p>
            <Button variant="accent" size="lg" asChild className="mt-8 h-14 rounded-full px-8">
              <a href={whatsappUrl(`Olá Beckmans! Gostaria de solicitar um orçamento para ${service.title}.`)} target="_blank" rel="noopener noreferrer">
                Solicitar orçamento <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
        <section className="pb-4">
          <div className="site-container max-w-5xl">
            {SERVICE_IMAGES[service.slug] && (
              <PageBanner
                image={SERVICE_IMAGES[service.slug].image}
                alt={SERVICE_IMAGES[service.slug].alt}
                objectPosition={SERVICE_IMAGES[service.slug].position}
                eyebrow={service.title}
                caption={SERVICE_IMAGES[service.slug].caption}
              />
            )}
          </div>
        </section>
        <section className="section-space">
          <div className="site-container grid gap-6 lg:grid-cols-3">
            <article className="info-card">
              <Wrench className="h-7 w-7 text-accent" />
              <h2 className="text-2xl font-bold">O problema que resolve</h2>
              <p className="text-muted-foreground leading-relaxed">{service.problem}</p>
            </article>
            <article className="info-card">
              <CheckCircle2 className="h-7 w-7 text-accent" />
              <h2 className="text-2xl font-bold">Principais entregas</h2>
              <ul className="space-y-3 text-muted-foreground">
                {service.deliverables.map((item) => <li key={item} className="flex gap-2"><span className="text-accent">•</span>{item}</li>)}
              </ul>
            </article>
            <article className="info-card">
              <Users className="h-7 w-7 text-accent" />
              <h2 className="text-2xl font-bold">Para quem é</h2>
              <p className="text-muted-foreground leading-relaxed">{service.audience}</p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}