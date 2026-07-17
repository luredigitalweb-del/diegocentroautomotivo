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
  googleReviews:
    "https://www.google.com/maps/place/Diego+Centro+Automotivo+-+Revis%C3%A3o+Automotiva/@-9.3886688,-40.4909019,17z/data=!3m1!4b1!4m6!3m5!1s0x773714d8f46be3d:0x2e7f5826c4cbf50b!8m2!3d-9.3886688!4d-40.4909019!16s%2Fg%2F11g1lsqkq4",

  // Ajuste conforme o horário real de funcionamento
  hours: [
    { days: "Segunda a Sexta", time: "07:30 às 17:30" },
    { days: "Sábado", time: "07:30 às 12:00" },
  ],

  mapsEmbedUrl:
    "https://www.google.com/maps?q=Diego+Centro+Automotivo+-+Revis%C3%A3o+Automotiva,+Rua+Tupinamb%C3%A1s,+193,+Petrolina+-+PE&output=embed",
  mapsLink:
    "https://www.google.com/maps/place/Diego+Centro+Automotivo+-+Revis%C3%A3o+Automotiva/@-9.3886688,-40.4909019,17z/data=!3m1!4b1!4m6!3m5!1s0x773714d8f46be3d:0x2e7f5826c4cbf50b!8m2!3d-9.3886688!4d-40.4909019!16s%2Fg%2F11g1lsqkq4",
} as const;

/** Gera o link do WhatsApp com mensagem pré-preenchida. */
export function whatsappUrl(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
