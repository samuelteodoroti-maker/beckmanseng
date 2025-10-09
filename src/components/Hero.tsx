import { ArrowRight, Award, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-engineering.jpg";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Projetos de engenharia Beckmans"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Excelência em Engenharia</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Transformamos sua{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">visão</span> em{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">realidade</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Soluções completas em engenharia civil com mais de uma década de experiência. 
            Da concepção à conclusão, entregamos projetos que superam expectativas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" onClick={scrollToContact} className="group">
              Iniciar Projeto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
                <Building2 className="h-5 w-5 text-primary" />
                <span className="text-3xl font-bold text-primary">500+</span>
              </div>
              <p className="text-sm text-muted-foreground">Projetos Entregues</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-3xl font-bold text-primary">300+</span>
              </div>
              <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-3xl font-bold text-primary">15+</span>
              </div>
              <p className="text-sm text-muted-foreground">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
