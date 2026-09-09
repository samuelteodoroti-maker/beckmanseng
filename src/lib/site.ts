export const SITE = {
  name: "Beckmans Engenharia",
  url: "https://beckmansengenharia.com",
  phoneDisplay: "(21) 98223-4712",
  phoneInternational: "+55-21-98223-4712",
  whatsapp: "5521982234712",
  email: "andrew@beckmanseng.com",
  instagram: "https://www.instagram.com/beckmans.engenharia/",
  linkedin: "https://br.linkedin.com/company/beckmans-engenharia",
  areaServed: "Rio de Janeiro e Grande Rio",
  cnpj: "55.391.051/0001-83",
} as const;

export const whatsappUrl = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const SERVICES = [
  {
    slug: "consultoria-em-engenharia",
    title: "Consultoria em Engenharia",
    summary: "Decisões técnicas mais seguras para obras, reformas e empreendimentos.",
    problem: "Reduz incertezas técnicas, retrabalho e decisões sem base de engenharia.",
    audience: "Proprietários, síndicos, empresas, arquitetos e construtoras.",
    deliverables: ["Análise de viabilidade", "Revisão e compatibilização", "Orientação técnica para decisões"],
  },
  {
    slug: "seguranca-do-trabalho",
    title: "Segurança do Trabalho",
    summary: "Assessoria técnica para ambientes e operações mais seguros.",
    problem: "Ajuda a identificar riscos e adequar processos às normas aplicáveis.",
    audience: "Empresas, indústrias, condomínios e equipes de obra.",
    deliverables: ["Avaliação de riscos", "Documentação técnica", "Orientação e acompanhamento"],
  },
  {
    slug: "reformas-e-construcoes",
    title: "Reformas e Construções",
    summary: "Planejamento e execução técnica do início à entrega.",
    problem: "Centraliza gestão, qualidade, prazo e controle da execução.",
    audience: "Residências, comércios, condomínios e instalações industriais.",
    deliverables: ["Planejamento e orçamento", "Gestão de equipes", "Acompanhamento técnico"],
  },
  {
    slug: "projetos-2d-3d-bim",
    title: "Projetos 2D, 3D e BIM",
    summary: "Projetos claros e compatibilizados para construir com precisão.",
    problem: "Antecipa interferências e melhora a compreensão antes da execução.",
    audience: "Clientes residenciais, comerciais, industriais e parceiros técnicos.",
    deliverables: ["Plantas e detalhamentos", "Modelagem tridimensional", "Compatibilização de disciplinas"],
  },
  {
    slug: "vistorias-e-laudos",
    title: "Vistorias e Laudos",
    summary: "Diagnósticos técnicos para conhecer o estado real da edificação.",
    problem: "Identifica anomalias, riscos e necessidades de manutenção.",
    audience: "Proprietários, compradores, condomínios, empresas e administradoras.",
    deliverables: ["Inspeção técnica", "Registro fotográfico", "Relatório ou parecer conforme o escopo"],
  },
  {
    slug: "inspecoes-com-drone",
    title: "Vistorias e Inspeções com Drone",
    summary: "Levantamentos visuais de áreas altas ou de difícil acesso.",
    problem: "Amplia o alcance da inspeção sem expor equipes a acessos desnecessários.",
    audience: "Condomínios, indústrias, empresas e gestores de patrimônio.",
    deliverables: ["Captação aérea em alta resolução", "Mapeamento visual", "Relatório técnico conforme o escopo"],
  },
  {
    slug: "manutencao-industrial",
    title: "Soluções e Manutenção Industrial",
    summary: "Apoio técnico e execução para preservar estruturas e operações.",
    problem: "Trata necessidades de manutenção com planejamento e segurança.",
    audience: "Indústrias, centros logísticos e instalações comerciais.",
    deliverables: ["Diagnóstico da necessidade", "Planejamento da intervenção", "Execução e acompanhamento"],
  },
] as const;