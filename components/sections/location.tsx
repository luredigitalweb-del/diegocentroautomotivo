"use client";

import { Clock, MapPin, Navigation, Phone } from "lucide-react";

import { site, whatsappUrl } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { InstagramIcon } from "@/components/icons/instagram";
import { WhatsAppIcon } from "@/components/icons/whatsapp";

export function Location() {
  return (
    <section id="localizacao" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1.35fr] lg:px-8">
        {/* Informações */}
        <Reveal from="left">
          <div className="flex h-full flex-col rounded-3xl bg-brand-gray p-8 md:p-10">
            <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
              <span aria-hidden className="h-px w-8 bg-brand-red" />
              Onde estamos
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.15] tracking-tight text-brand-black md:text-4xl">
              Venha nos visitar
            </h2>

            <ul className="mt-8 flex-1 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-card">
                  <MapPin aria-hidden className="h-5 w-5 text-brand-red" />
                </span>
                <span>
                  <span className="block font-semibold text-brand-black">Endereço</span>
                  <span className="mt-1 block text-sm leading-relaxed text-neutral-600">
                    {site.address.street}
                    <br />
                    {site.address.neighborhood}, {site.address.city}/{site.address.state}
                  </span>
                </span>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-card">
                  <Clock aria-hidden className="h-5 w-5 text-brand-red" />
                </span>
                <span>
                  <span className="block font-semibold text-brand-black">
                    Horário de atendimento
                  </span>
                  {site.hours.map((h) => (
                    <span key={h.days} className="mt-1 block text-sm text-neutral-600">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-card">
                  <Phone aria-hidden className="h-5 w-5 text-brand-red" />
                </span>
                <span>
                  <span className="block font-semibold text-brand-black">
                    Telefone / WhatsApp
                  </span>
                  <a
                    href={`tel:${site.phoneE164}`}
                    className="mt-1 block text-sm text-neutral-600 transition-colors hover:text-brand-red"
                  >
                    {site.phoneDisplay}
                  </a>
                </span>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-card">
                  <InstagramIcon className="text-brand-red" />
                </span>
                <span>
                  <span className="block font-semibold text-brand-black">Instagram</span>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-neutral-600 transition-colors hover:text-brand-red"
                  >
                    @diegocentroautomotivo
                  </a>
                </span>
              </li>
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="dark">
                <a href={site.mapsLink} target="_blank" rel="noopener noreferrer">
                  <Navigation className="h-4 w-4" />
                  Como chegar
                </a>
              </Button>
              <Button asChild>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-4 w-4" />
                  Agendar visita
                </a>
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Mapa */}
        <Reveal from="right" delay={0.1}>
          <div className="h-full min-h-[420px] overflow-hidden rounded-3xl shadow-soft">
            <iframe
              src={site.mapsEmbedUrl}
              title={`Mapa — ${site.name}, ${site.address.full}`}
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
