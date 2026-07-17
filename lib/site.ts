/**
 * Configuração central do site.
 * Edite aqui: telefone, endereço, horários, redes sociais e domínio.
 */
export const site = {
  name: "Diego Centro Automotivo",
  legalName: "Diego Centro Automotivo",
  description:
    "Há mais de 10 anos em Petrolina/PE cuidando do seu veículo com qualidade, tecnologia e confiança. Especialistas em veículos premium e multimarcas: revisão, alinhamento, balanceamento, freios, suspensão e muito mais.",
  // Troque pelo domínio definitivo quando o site for publicado
  url: "https://diegocentroautomotivo.com.br",

  phoneDisplay: "(87) 98802-0018",
  phoneE164: "+5587988020018",
  whatsappNumber: "5587988020018",
  whatsappMessage:
    "Olá, vim pelo site! Gostaria de agendar um serviço na Diego Centro Automotivo.",

  address: {
    street: "Rua Tupinambás, 193",
    neighborhood: "Maria Auxiliadora",
    city: "Petrolina",
    state: "PE",
    full: "Rua Tupinambás, 193 – Maria Auxiliadora, Petrolina/PE",
  },

  // Atualize com o @ oficial da empresa
  instagram: "https://www.instagram.com/diegocentroautomotivo",

  // Perfil no Google (Google Meu Negócio) — avaliações reais
  googleReviews: "https://share.google/gieuQT5tDfth2OOG2",

  // Ajuste conforme o horário real de funcionamento
  hours: [
    { days: "Segunda a Sexta", time: "07:30 às 17:30" },
    { days: "Sábado", time: "07:30 às 12:00" },
  ],

  mapsEmbedUrl:
    "https://www.google.com/maps?q=Rua+Tupinamb%C3%A1s,+193+-+Maria+Auxiliadora,+Petrolina+-+PE&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Rua+Tupinamb%C3%A1s,+193+-+Maria+Auxiliadora,+Petrolina+-+PE",
} as const;

/** Gera o link do WhatsApp com mensagem pré-preenchida. */
export function whatsappUrl(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
