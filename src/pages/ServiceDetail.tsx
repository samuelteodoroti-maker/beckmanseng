import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Users, Wrench } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { SERVICES, whatsappUrl } from "@/lib/site";

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
      <main>
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