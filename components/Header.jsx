"use client";

import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { Logo, Icon } from "@/components/Icons";

const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#proceso", label: "Cómo funciona" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_1px_0_rgba(15,23,42,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2.5">
          <Logo className="h-10 w-10 shrink-0" />
          <span className="leading-tight">
            <span className="block text-[15px] font-extrabold tracking-tight text-ink">
              Laboratorio Clínico
            </span>
            <span className="block text-[13px] font-semibold text-brand-700">
              Dra. Yuly Osorio
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-brand-700"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phoneRaw}`}
            className="text-sm font-bold text-ink hover:text-brand-700"
          >
            {site.phoneDisplay}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            Agendar
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-ink lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <nav className="grid gap-1">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-brand-600 px-4 py-3 text-base font-bold text-white"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Agendar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
