import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-tech.jpg";

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Layered backgrounds */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-8 animate-fade-in">
            <div className="section-chip">
              <Sparkles className="h-4 w-4" />
              Engenharia Civil & Segurança do Trabalho
            </div>

            <h1 className="text-display font-bold">
              Inovação é o caminho.{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Qualidade é a certeza.
                </span>
              </span>
            </h1>

            <p className="text-lead text-muted-foreground max-w-2xl">
              Transformamos ideias em projetos com excelência. Vistorias, inspeções, construções e consultoria
              — tudo com o rigor técnico que sua obra merece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="accent"
                size="lg"
                onClick={() => scrollTo("contact")}
                className="group rounded-full text-base px-8 h-14 shadow-glow"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollTo("services")}
                className="rounded-full text-base px-8 h-14 glass border-primary/20"
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-6">
              {[
                { icon: ShieldCheck, label: "Desde 2009", sub: "Experiência comprovada" },
                { icon: Zap, label: "Projetos 2D e 3D", sub: "Tecnologia BIM" },
                { icon: Sparkles, label: "CREA Ativo", sub: "Responsabilidade técnica" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                    <b.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{b.label}</div>
                    <div className="text-xs text-muted-foreground">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div className="lg:col-span-5 relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden glass p-2 shadow-elegant">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src={heroImg}
                  alt="Modelagem 3D de projeto estrutural"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                {/* Floating stats */}
                <div className="absolute top-4 left-4 glass rounded-2xl px-4 py-3 animate-float">
                  <div className="text-xs text-muted-foreground">Projetos ativos</div>
                  <div className="text-2xl font-bold text-accent">+120</div>
                </div>
                <div className="absolute bottom-4 right-4 glass rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="text-xs text-muted-foreground">Satisfação</div>
                  <div className="text-2xl font-bold text-accent">98%</div>
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
}
