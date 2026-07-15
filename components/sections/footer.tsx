import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";

import { mainServices, navLinks } from "@/lib/data";
import { site, whatsappUrl } from "@/lib/site";
import { InstagramIcon } from "@/components/icons/instagram";
import { WhatsAppIcon } from "@/components/icons/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black pb-8 pt-16 text-white">
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div>
            <Link href="#inicio" className="flex items-center gap-3" aria-label={`${site.name} — voltar ao início`}>
              <Image
                src="/images/logo.png"
                alt=""
                width={52}
                height={52}
                className="h-12 w-12 object-contain"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-extrabold tracking-tight">DIEGO</span>
                <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-brand-yellow">
                  Centro Automotivo
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Há mais de 10 anos cuidando do seu veículo com qualidade,
              tecnologia e confiança em {site.address.city}/{site.address.state}.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Diego Centro Automotivo"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:scale-105 hover:border-brand-red hover:bg-brand-red hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Diego Centro Automotivo"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:scale-105 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <nav aria-label="Links rápidos">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-brand-yellow">
              Links rápidos
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Serviços */}
          <nav aria-label="Serviços">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-brand-yellow">
              Serviços
            </h3>
            <ul className="mt-5 space-y-3">
              {mainServices.map((service) => (
                <li key={service.title}>
                  <a
                    href="#servicos"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-brand-yellow">
              Contato
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.neighborhood}, {site.address.city}/{site.address.state}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                <a href={`tel:${site.phoneE164}`} className="transition-colors hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                <span>
                  {site.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/40 sm:flex-row sm:text-left">
          <p>
            © {year} {site.name}. Todos os direitos reservados.
          </p>
          <p>
            {site.address.city}/{site.address.state} — Atendimento premium e multimarcas
          </p>
        </div>
      </div>
    </footer>
  );
}
