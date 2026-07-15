"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { navLinks } from "@/lib/data";
import { site, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Barra que vira uma pílula flutuante após o scroll */}
      <div
        className={cn(
          "mx-auto w-full transition-all duration-500 ease-out",
          scrolled ? "max-w-6xl px-3 pt-3 sm:px-4" : "max-w-7xl px-0 pt-0"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500 ease-out",
            scrolled
              ? "h-16 rounded-full border border-white/60 bg-white/85 pl-4 pr-2 shadow-[0_12px_40px_-8px_rgb(17_17_17_/_0.22)] backdrop-blur-xl sm:pl-6 sm:pr-2.5"
              : "h-20 rounded-none border border-transparent bg-transparent px-5 lg:px-8"
          )}
        >
          {/* Logo */}
          <Link
            href="#inicio"
            className="flex items-center gap-3"
            aria-label={`${site.name} — voltar ao início`}
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/logo.png"
              alt=""
              width={46}
              height={46}
              className={cn(
                "object-contain drop-shadow-sm transition-all duration-500",
                scrolled ? "h-9 w-9" : "h-11 w-11"
              )}
              priority
            />
            <span className="flex flex-col leading-none">
              <span
                className={cn(
                  "font-display font-extrabold tracking-tight transition-all duration-500",
                  scrolled ? "text-lg text-brand-black" : "text-xl text-white"
                )}
              >
                DIEGO
              </span>
              <span
                className={cn(
                  "mt-1 text-[9px] font-bold uppercase tracking-[0.28em] transition-colors duration-500",
                  scrolled ? "text-brand-red" : "text-brand-yellow"
                )}
              >
                Centro Automotivo
              </span>
            </span>
          </Link>

          {/* Navegação desktop */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100",
                  scrolled
                    ? "text-neutral-700 after:bg-brand-red hover:text-brand-red"
                    : "text-white/90 after:bg-brand-yellow hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild size="sm" className={cn(scrolled && "h-11")}>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                Agendar agora
              </a>
            </Button>
          </div>

          {/* Menu mobile */}
          <button
            type="button"
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
              scrolled
                ? "text-brand-black hover:bg-brand-gray"
                : "text-white hover:bg-white/10"
            )}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Fechar menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-30 cursor-default bg-brand-black/50 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-3 top-[88px] z-40 max-h-[calc(100dvh-104px)] overflow-y-auto rounded-3xl border border-neutral-100 bg-white shadow-lift lg:hidden"
            >
              <nav className="flex flex-col gap-1 px-5 py-6" aria-label="Menu mobile">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3 }}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3.5 font-display text-lg font-semibold text-brand-black transition-colors hover:bg-brand-gray hover:text-brand-red"
                  >
                    {link.label}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.3 }}
                  className="mt-4 border-t border-neutral-100 pt-5"
                >
                  <Button asChild size="lg" className="w-full">
                    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon />
                      Agendar pelo WhatsApp
                    </a>
                  </Button>
                  <p className="mt-4 text-center text-sm text-neutral-500">
                    {site.phoneDisplay} · {site.address.city}/{site.address.state}
                  </p>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
