import {
  BatteryCharging,
  ClipboardCheck,
  Cog,
  Compass,
  Crosshair,
  Cpu,
  Disc,
  Disc3,
  Droplets,
  FileText,
  Fuel,
  Gauge,
  Gem,
  GraduationCap,
  Handshake,
  Key,
  Lightbulb,
  MoveVertical,
  Package,
  Ruler,
  Search,
  ShieldCheck,
  Thermometer,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------- Navegação --------------------------------- */

export const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#localizacao" },
] as const;

/* --------------------------------- Diferenciais -------------------------------- */

export type Differential = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const differentials: Differential[] = [
  {
    title: "Especialistas em veículos premium",
    description:
      "Experiência comprovada com marcas de alto padrão, seguindo os procedimentos técnicos de cada fabricante.",
    icon: Gem,
  },
  {
    title: "Diagnóstico preciso",
    description:
      "Scanners e equipamentos de última geração para identificar a causa real do problema logo na primeira avaliação.",
    icon: Crosshair,
  },
  {
    title: "Equipamentos modernos",
    description:
      "Estrutura completa e tecnologia atualizada para executar cada serviço com precisão de fábrica.",
    icon: Cpu,
  },
  {
    title: "Peças de qualidade",
    description:
      "Trabalhamos apenas com peças das melhores marcas do mercado, garantindo durabilidade e segurança.",
    icon: ShieldCheck,
  },
  {
    title: "Equipe certificada",
    description:
      "Profissionais em constante atualização, com formações e especializações nas principais instituições do setor.",
    icon: GraduationCap,
  },
  {
    title: "Atendimento transparente",
    description:
      "Você entende o que será feito, por que será feito e quanto vai custar — antes de qualquer execução.",
    icon: Handshake,
  },
];

/* -------------------------------- Certificações -------------------------------- */

export type Certification = {
  name: string;
  kind: "Formação" | "Especialização" | "Parceria técnica";
};

export const certifications: Certification[] = [
  { name: "Escola do Mecânico", kind: "Formação" },
  { name: "SENAI", kind: "Formação" },
  { name: "SEST SENAT", kind: "Formação" },
  { name: "DAGIR", kind: "Parceria técnica" },
  { name: "Nilcar", kind: "Parceria técnica" },
  { name: "Jeep", kind: "Especialização" },
  { name: "Fiat", kind: "Especialização" },
  { name: "Peugeot", kind: "Especialização" },
  { name: "Citroën", kind: "Especialização" },
  { name: "Suspensão", kind: "Especialização" },
  { name: "Alinhamento", kind: "Especialização" },
];

/* ----------------------------------- Serviços ---------------------------------- */

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const mainServices: Service[] = [
  {
    title: "Troca de Fluido da Transmissão",
    description:
      "Procedimento com equipamento específico e fluido recomendado pelo fabricante, prolongando a vida útil do câmbio.",
    icon: Droplets,
  },
  {
    title: "Revisão",
    description:
      "Revisão completa e preventiva com checklist detalhado, mantendo o seu veículo sempre em dia e valorizado.",
    icon: ClipboardCheck,
  },
  {
    title: "Alinhamento",
    description:
      "Alinhamento computadorizado de alta precisão para direção estável, segura e sem desgaste irregular dos pneus.",
    icon: Ruler,
  },
  {
    title: "Balanceamento",
    description:
      "Eliminação de vibrações e desgaste prematuro com balanceamento de rodas em equipamentos modernos.",
    icon: Disc3,
  },
  {
    title: "Freios",
    description:
      "Manutenção completa do sistema de freios: pastilhas, discos, fluido e sensores, com peças de primeira linha.",
    icon: Disc,
  },
  {
    title: "Suspensão",
    description:
      "Diagnóstico e reparo de amortecedores, molas, buchas e batentes para conforto e segurança em qualquer piso.",
    icon: MoveVertical,
  },
];

export const otherServices: { name: string; icon: LucideIcon }[] = [
  { name: "Motor", icon: Cog },
  { name: "Arrefecimento", icon: Thermometer },
  { name: "Diagnóstico", icon: Gauge },
  { name: "Injeção", icon: Fuel },
  { name: "Baterias", icon: BatteryCharging },
  { name: "Cambagem", icon: Ruler },
  { name: "Caster", icon: Compass },
  { name: "Faróis", icon: Lightbulb },
  { name: "Venda de Peças", icon: Package },
];

/* -------------------------------- Como funciona -------------------------------- */

export type Step = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const steps: Step[] = [
  {
    title: "Diagnóstico",
    description: "Avaliação técnica completa para identificar a causa real do problema.",
    icon: Search,
  },
  {
    title: "Orçamento",
    description: "Orçamento detalhado e transparente, sem surpresas no final.",
    icon: FileText,
  },
  {
    title: "Aprovação",
    description: "Nada é executado sem a sua autorização. Você decide com clareza.",
    icon: Handshake,
  },
  {
    title: "Execução",
    description: "Serviço realizado por equipe certificada, com peças de qualidade.",
    icon: Wrench,
  },
  {
    title: "Entrega",
    description: "Veículo testado, conferido e entregue pronto para rodar com segurança.",
    icon: Key,
  },
];

/* ----------------------------------- Galeria ----------------------------------- */

export type GalleryImage = {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "big";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/fachada-detalhe.jpg",
    alt: "Fachada da Diego Centro Automotivo em Petrolina/PE",
    span: "big",
  },
  {
    src: "/images/elevadores.jpg",
    alt: "Área de serviço com elevadores e boxes equipados",
  },
  {
    src: "/images/recepcao.jpg",
    alt: "Recepção climatizada com sala de espera e café",
  },
  {
    src: "/images/balcao-pecas.jpg",
    alt: "Balcão de peças com estoque das melhores marcas",
  },
  {
    src: "/images/bmw-cliente.jpg",
    alt: "Veículo premium atendido na oficina",
  },
];

/* ---------------------------------- Depoimentos -------------------------------- */

export type Testimonial = {
  name: string;
  vehicle: string;
  /** Linha secundária no estilo Google ("X avaliações · Y fotos"). */
  meta: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Carlos Menezes",
    vehicle: "BMW 320i",
    meta: "12 avaliações · 3 fotos",
    text: "Confio meu carro à equipe do Diego há anos. Atendimento impecável, diagnóstico certeiro e o serviço fica pronto no prazo combinado. Oficina de alto nível em Petrolina.",
  },
  {
    name: "Ana Paula Rodrigues",
    vehicle: "Jeep Compass",
    meta: "Local Guide · 28 avaliações",
    text: "Fui muito bem atendida do início ao fim. Explicaram tudo o que seria feito, enviaram o orçamento pelo WhatsApp e o carro ficou perfeito. Recomendo de olhos fechados.",
  },
  {
    name: "João Victor Santana",
    vehicle: "Fiat Toro",
    meta: "7 avaliações",
    text: "Fiz a troca do fluido da transmissão e a revisão completa. Preço justo, equipe extremamente profissional e uma estrutura que impressiona. Virei cliente fiel.",
  },
  {
    name: "Marcela Almeida",
    vehicle: "Peugeot 208",
    meta: "5 avaliações · 2 fotos",
    text: "O diferencial é a transparência: nada é feito sem sua aprovação. O carro voltou novinho e ainda me orientaram sobre os próximos cuidados. Atendimento nota dez.",
  },
  {
    name: "Rafael Cavalcanti",
    vehicle: "Mercedes-Benz C180",
    meta: "Local Guide · 15 avaliações",
    text: "Procurei uma oficina de confiança para um carro importado e encontrei na Diego. Equipamentos modernos, equipe certificada e cuidado com cada detalhe do veículo.",
  },
  {
    name: "Patrícia Gois",
    vehicle: "Citroën C4 Cactus",
    meta: "9 avaliações · 1 foto",
    text: "Melhor centro automotivo da região. Ambiente limpo e organizado, atendimento receptivo e serviço de altíssima qualidade. Super recomendo!",
  },
];

