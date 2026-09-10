export type Project = {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  objectPosition: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    image: "/images/projetos/projeto-01.jpg",
    title: "Inspeção e vistoria com drone",
    category: "Vistoria",
    description: "Registro aéreo para análise técnica de áreas de difícil acesso.",
    objectPosition: "center",
  },
  {
    id: 2,
    image: "/images/projetos/projeto-02.jpg",
    title: "Manutenção de estruturas metálicas",
    category: "Manutenção",
    description: "Intervenção técnica para preservar estruturas e operações.",
    objectPosition: "center",
  },
  {
    id: 3,
    image: "/images/projetos/projeto-03.jpg",
    title: "Trabalho e segurança em altura",
    category: "Segurança",
    description: "Execução planejada com atenção aos procedimentos de segurança.",
    objectPosition: "center",
  },
  {
    id: 4,
    image: "/images/projetos/projeto-04.jpg",
    title: "Inspeção de coberturas",
    category: "Inspeção",
    description: "Levantamento visual para identificar anomalias e necessidades de manutenção.",
    objectPosition: "center",
  },
  {
    id: 5,
    image: "/images/projetos/projeto-05.jpg",
    title: "Manutenção industrial",
    category: "Indústria",
    description: "Acompanhamento técnico de serviços em instalações industriais.",
    objectPosition: "center",
  },
  {
    id: 6,
    image: "/images/projetos/projeto-06.jpg",
    title: "Avaliação de estruturas",
    category: "Engenharia",
    description: "Verificação em campo para orientar decisões técnicas seguras.",
    objectPosition: "center",
  },
  {
    id: 7,
    image: "/images/projetos/projeto-07.jpg",
    title: "Serviço técnico em altura",
    category: "Execução",
    description: "Equipe especializada atuando em pontos elevados e de difícil acesso.",
    objectPosition: "center",
  },
  {
    id: 8,
    image: "/images/projetos/projeto-08.jpg",
    title: "Diagnóstico de cobertura",
    category: "Vistoria",
    description: "Registro detalhado das condições da cobertura para diagnóstico técnico.",
    objectPosition: "center",
  },
  {
    id: 9,
    image: "/images/projetos/projeto-09.jpg",
    title: "Acompanhamento de manutenção",
    category: "Manutenção",
    description: "Controle visual e técnico durante a execução dos serviços.",
    objectPosition: "center",
  },
  {
    id: 10,
    image: "/images/projetos/projeto-10.jpg",
    title: "Inspeção técnica em campo",
    category: "Inspeção",
    description: "Documentação fotográfica para análise e planejamento da intervenção.",
    objectPosition: "center",
  },
];