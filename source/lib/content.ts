import type { LucideIcon } from "lucide-react";
import {
  Headset,
  Compass,
  Code2,
  Workflow,
  Network,
  Wrench,
  ShieldCheck,
  Timer,
  Users,
  Gauge,
  MessageSquare,
  Search,
  ClipboardList,
  Hammer,
  LifeBuoy,
} from "lucide-react";

export const nav = [
  { label: "Empresa", href: "#empresa" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "Projetos", href: "#projetos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    icon: Headset,
    title: "Suporte de TI",
    description:
      "Atendimento remoto e presencial para resolver falhas antes que travem a operação da sua equipe.",
    points: ["Suporte remoto e in loco", "Monitoramento contínuo", "SLA de atendimento"],
    featured: true,
  },
  {
    icon: Compass,
    title: "Consultoria tecnológica",
    description:
      "Diagnóstico da infraestrutura atual e um plano de tecnologia alinhado ao orçamento e ao crescimento da empresa.",
    points: ["Diagnóstico técnico", "Plano de investimento em TI", "Redução de custos"],
  },
  {
    icon: Code2,
    title: "Desenvolvimento de sites",
    description:
      "Sites institucionais e lojas rápidos, responsivos e otimizados para converter visitantes em clientes.",
    points: ["Design sob medida", "Performance e SEO", "Painel de fácil gestão"],
  },
  {
    icon: Workflow,
    title: "Aplicações web",
    description:
      "Sistemas internos e plataformas web para organizar processos que hoje dependem de planilhas.",
    points: ["Sistemas sob medida", "Integrações via API", "Escalável e seguro"],
  },
  {
    icon: Network,
    title: "Automações",
    description:
      "Eliminamos tarefas manuais repetitivas conectando as ferramentas que sua empresa já usa.",
    points: ["Rotinas automatizadas", "Integração entre sistemas", "Menos retrabalho"],
  },
  {
    icon: Wrench,
    title: "Infraestrutura e redes",
    description:
      "Cabeamento, redes Wi-Fi, servidores e backups planejados para estabilidade e segurança.",
    points: ["Redes cabeadas e Wi-Fi", "Servidores e backup", "Segurança perimetral"],
  },
  {
    icon: ShieldCheck,
    title: "Manutenção de computadores",
    description:
      "Manutenção preventiva e corretiva de máquinas e periféricos para reduzir paradas inesperadas.",
    points: ["Manutenção preventiva", "Formatação e otimização", "Gestão de parque de máquinas"],
  },
];

export const differentials = [
  {
    icon: Timer,
    title: "Resposta rápida",
    description: "Times técnicos prontos para atender antes que um problema pequeno vire uma crise.",
  },
  {
    icon: Users,
    title: "Time dedicado",
    description: "Um mesmo ponto de contato técnico acompanha sua empresa, sem repetir o histórico a cada chamado.",
  },
  {
    icon: Gauge,
    title: "Tecnologia sob medida",
    description: "Nada de pacotes genéricos: cada solução é dimensionada para o tamanho real da sua operação.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança em primeiro lugar",
    description: "Boas práticas de segurança aplicadas em cada sistema, rede e automação que entregamos.",
  },
];

export const process = [
  {
    icon: MessageSquare,
    title: "Contato inicial",
    description: "Você descreve o problema ou objetivo e entendemos o contexto da sua empresa.",
  },
  {
    icon: Search,
    title: "Diagnóstico",
    description: "Analisamos a infraestrutura, sistemas e processos envolvidos antes de propor qualquer solução.",
  },
  {
    icon: ClipboardList,
    title: "Proposta técnica",
    description: "Apresentamos escopo, prazo e investimento de forma clara, sem letras miúdas.",
  },
  {
    icon: Hammer,
    title: "Execução",
    description: "Implementamos a solução com comunicação constante sobre o andamento do trabalho.",
  },
  {
    icon: LifeBuoy,
    title: "Suporte contínuo",
    description: "Acompanhamos o resultado e seguimos disponíveis para ajustes e evolução.",
  },
];

export const faqs = [
  {
    question: "A VIIDTEC atende empresas de qualquer porte?",
    answer:
      "Sim. Atendemos desde pequenas empresas que precisam de suporte pontual até negócios em crescimento que precisam de uma estrutura de TI mais robusta. O escopo do serviço é dimensionado para a realidade de cada cliente.",
  },
  {
    question: "O suporte de TI é feito remotamente ou presencialmente?",
    answer:
      "Os dois modelos estão disponíveis. Grande parte das demandas é resolvida remotamente com agilidade, e o atendimento presencial é acionado quando o problema exige intervenção física, como redes e hardware.",
  },
  {
    question: "Quanto tempo leva para desenvolver um site ou sistema?",
    answer:
      "Depende do escopo. Sites institucionais costumam ser entregues em poucas semanas, enquanto aplicações web sob medida têm prazo definido após o diagnóstico inicial, que já indica etapas e cronograma.",
  },
  {
    question: "Vocês assumem a manutenção de uma infraestrutura já existente?",
    answer:
      "Sim. Fazemos um diagnóstico da estrutura atual, apontamos riscos e oportunidades de melhoria e assumimos a manutenção contínua sem exigir que tudo seja substituído de uma vez.",
  },
  {
    question: "Como funciona o investimento nos serviços?",
    answer:
      "Trabalhamos com contratos de suporte recorrente e também com projetos fechados, como desenvolvimento de sites, sistemas e automações. O valor é sempre apresentado antes do início do trabalho, sem surpresas.",
  },
];

