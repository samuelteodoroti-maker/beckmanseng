import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Precisão Técnica",
    description: "Utilizamos as mais modernas ferramentas e metodologias para garantir projetos impecáveis.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description: "Comunicação clara e acompanhamento em tempo real de todas as etapas do projeto.",
  },
  {
    icon: Heart,
    title: "Compromisso",
    description: "Dedicação total para entregar resultados que superam as expectativas dos nossos clientes.",
  },
];

const differentials = [
  "Equipe multidisciplinar altamente qualificada",
  "Tecnologia BIM em todos os projetos",
  "Gestão ágil e eficiente de processos",
  "Atendimento personalizado e consultivo",
  "Conformidade com todas as normas técnicas",
  "Prazos rigorosamente cumpridos",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-accent">Sobre Nós</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Excelência que Transforma Projetos em Realidade
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A <span className="font-semibold text-foreground">Beckmans Engenharia</span> nasceu da paixão por 
              criar soluções que fazem a diferença. Com mais de 15 anos de experiência no mercado, nos consolidamos 
              como referência em projetos de engenharia civil.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa missão é transformar ideias em estruturas sólidas, sempre com foco em inovação, 
              qualidade e sustentabilidade. Cada projeto é tratado com a atenção e o cuidado que merece.
            </p>

            <div className="space-y-3">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover-lift hover-glow animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
