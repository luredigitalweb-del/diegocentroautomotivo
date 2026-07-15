# Diego Centro Automotivo — Landing Page

Landing page premium desenvolvida para a **Diego Centro Automotivo** (Petrolina/PE), com foco total em conversão de leads via WhatsApp.

## Tecnologias

- **Next.js 15** (App Router, 100% estático)
- **React 19** + **TypeScript**
- **TailwindCSS** (identidade visual da marca)
- **Framer Motion** (animações suaves em todas as seções)
- **Lucide React** (ícones)
- **Radix UI / padrão shadcn** (accordion, botões, inputs)
- **Sharp** (otimização das imagens)

## Como rodar

```bash
npm install       # instalar dependências
npm run dev       # ambiente de desenvolvimento → http://localhost:3000
npm run build     # build de produção
npm run start     # servir o build de produção
```

## Estrutura

```
app/
  layout.tsx        → SEO completo (meta tags, Open Graph, JSON-LD AutomotiveBusiness + FAQPage)
  page.tsx          → montagem das seções
  robots.ts         → robots.txt
  sitemap.ts        → sitemap.xml
components/
  sections/         → Header, Hero, Marquee, Como funciona, Serviços, Sobre,
                      Certificações, Diferenciais, Galeria, Depoimentos,
                      Instagram (iPhone com vídeo), Mapa, Rodapé
  ui/               → button, accordion (padrão shadcn)
  icons/            → WhatsApp e Instagram (SVG próprios)
  motion/reveal.tsx → componente de animação on-scroll reutilizável
lib/
  site.ts           → DADOS DA EMPRESA (telefone, endereço, horários, Instagram, domínio)
  data.ts           → CONTEÚDO (serviços, certificações, depoimentos, FAQ, galeria)
public/images/      → imagens otimizadas (fachada, logo, og)
```

## O que editar antes de publicar

Tudo que é dado da empresa está centralizado em **`lib/site.ts`** e **`lib/data.ts`**:

1. **Domínio** (`lib/site.ts` → `url`): troque pelo domínio definitivo — usado no canonical, sitemap e Open Graph.
2. **Instagram** (`lib/site.ts` → `instagram`): confirme o @ oficial.
3. **Horários** (`lib/site.ts` → `hours`): confirme com o cliente (também ajustar no `openingHoursSpecification` em `app/layout.tsx`).
4. **Depoimentos** (`lib/data.ts` → `testimonials`): substitua pelos depoimentos reais de clientes.
5. **Galeria** (`lib/data.ts` → `galleryImages`): já usa fotos reais da oficina (fachada, elevadores, recepção, balcão de peças). Para trocar/adicionar, coloque a foto em `public/images/` e ajuste os caminhos.

## Imagens

As imagens da marca foram geradas a partir dos arquivos originais na raiz do projeto
(`image.png` = foto da fachada em alta resolução, `imagem_..._removebg-preview.png` = logo):

- `public/images/fachada.jpg` — hero (1920px)
- `public/images/fachada-detalhe.jpg` — seção Sobre e galeria (recorte 4:5)
- `public/images/og.jpg` — Open Graph 1200×630
- `public/images/logo.png` + `app/icon.png` — logo aparada / favicon

## Conversão via WhatsApp

- Número configurado: **(87) 98802-0018** (`lib/site.ts`)
- Todos os CTAs abrem o WhatsApp com a mensagem: *"Olá! Gostaria de agendar um serviço na Diego Centro Automotivo."*
- Os cards de serviço enviam mensagem personalizada com o nome do serviço
- Botão flutuante do WhatsApp aparece após o primeiro scroll
- Seção Instagram: iPhone com vídeo real (`public/videos/instagram.mp4`) e botão para seguir o perfil
