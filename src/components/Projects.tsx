import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Edifício Residencial Horizonte",
    category: "Residencial",
    description: "Projeto estrutural completo de edifício residencial de 15 pavimentos com 60 unidades.",
    metrics: { area: "8.500m²", prazo: "18 meses", tipo: "Concreto Armado" },
  },
  {
    title: "Centro Empresarial Vista",
    category: "Comercial",
    description: "Desenvolvimento de projeto estrutural e gerenciamento de obra de complexo empresarial.",
    metrics: { area: "12.000m²", prazo: "24 meses", tipo: "Estrutura Metálica" },
  },
  {
    title: "Residência de Alto Padrão",
    category: "Residencial",
    description: "Projeto arquitetônico e estrutural de residência unifamiliar de luxo com área de lazer.",
    metrics: { area: "650m²", prazo: "12 meses", tipo: "Concreto e Aço" },
  },
  {
    title: "Retrofit Industrial",
    category: "Industrial",
    description: "Consultoria técnica e reforma estrutural de galpão industrial com ampliação.",
    metrics: { area: "5.000m²", prazo: "10 meses", tipo: "Estrutura Metálica" },
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium text-accent">Portfólio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Projetos de Excelência</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que demonstram nossa expertise e compromisso com a qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover-lift hover-glow animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Área</p>
                    <p className="font-semibold">{project.metrics.area}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Prazo</p>
                    <p className="font-semibold">{project.metrics.prazo}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Tipo</p>
                    <p className="font-semibold text-sm">{project.metrics.tipo}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
