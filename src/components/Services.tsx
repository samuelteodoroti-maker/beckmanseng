import { Building2, ClipboardCheck, FileText, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import serviceEstrutural from "@/assets/service-estrutural.jpg";
import serviceGerenciamento from "@/assets/service-gerenciamento.jpg";
import serviceConsultoria from "@/assets/service-consultoria.jpg";

const services = [
  {
    icon: Building2,
    title: "Projetos Estruturais",
    description: "Desenvolvimento completo de projetos estruturais com tecnologia BIM e análise avançada.",
    image: serviceEstrutural,
    features: ["Cálculo Estrutural", "Projetos em BIM", "Laudos Técnicos"],
  },
  {
    icon: ClipboardCheck,
    title: "Gerenciamento de Obras",
    description: "Acompanhamento técnico e gestão completa para garantir qualidade e prazo.",
    image: serviceGerenciamento,
    features: ["Cronograma Físico-Financeiro", "Controle de Qualidade", "Gestão de Equipes"],
  },
  {
    icon: Lightbulb,
    title: "Consultoria Técnica",
    description: "Análise especializada e soluções personalizadas para seus desafios em engenharia.",
    image: serviceConsultoria,
    features: ["Análise de Viabilidade", "Perícias Técnicas", "Otimização de Projetos"],
  },
];

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
            <FileText className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nossos Serviços</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Soluções Completas em Engenharia
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Do planejamento à execução, oferecemos serviços especializados para cada etapa do seu projeto
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift hover-glow group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center shadow-elegant">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" onClick={scrollToContact}>
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
