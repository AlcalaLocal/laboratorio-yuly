import { site, whatsappLink } from "@/lib/site";
import { Icon } from "@/components/Icons";

function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Tarjeta ilustrada */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 to-brand-800 p-1 shadow-2xl shadow-brand-900/25">
        <div className="rounded-[1.8rem] bg-gradient-to-br from-brand-50 to-white p-6 sm:p-8">
          <svg viewBox="0 0 400 360" className="h-auto w-full" role="img" aria-label="Ilustración de laboratorio clínico">
            <defs>
              <linearGradient id="tube" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#5eead4" />
                <stop offset="1" stopColor="#0d9488" />
              </linearGradient>
              <linearGradient id="tube2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#7dd3fc" />
                <stop offset="1" stopColor="#0ea5e9" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="180" r="150" fill="#ccfbf1" opacity="0.55" />
            <circle cx="310" cy="80" r="40" fill="#99f6e4" opacity="0.6" />

            {/* Tubos de ensayo */}
            <g transform="translate(120 60)">
              <rect x="0" y="0" width="34" height="200" rx="17" fill="#ffffff" stroke="#0f766e" strokeWidth="3" />
              <rect x="4" y="90" width="26" height="106" rx="13" fill="url(#tube)" />
              <rect x="50" y="30" width="34" height="200" rx="17" fill="#ffffff" stroke="#0f766e" strokeWidth="3" />
              <rect x="54" y="150" width="26" height="76" rx="13" fill="url(#tube2)" />
              <rect x="100" y="70" width="34" height="200" rx="17" fill="#ffffff" stroke="#0f766e" strokeWidth="3" />
              <rect x="104" y="120" width="26" height="146" rx="13" fill="url(#tube)" />
            </g>

            {/* Gota */}
            <path d="M300 170c0 22-18 40-40 40s-40-18-40-40c0-30 40-70 40-70s40 40 40 70Z" fill="url(#tube2)" opacity="0.95" />
            <circle cx="248" cy="178" r="7" fill="#ffffff" opacity="0.7" />

            {/* Molécula */}
            <g stroke="#0f766e" strokeWidth="3" opacity="0.85">
              <line x1="70" y1="300" x2="120" y2="320" />
              <line x1="120" y1="320" x2="160" y2="296" />
            </g>
            <circle cx="70" cy="300" r="11" fill="#0d9488" />
            <circle cx="120" cy="320" r="11" fill="#38bdf8" />
            <circle cx="160" cy="296" r="11" fill="#2dd4bf" />
          </svg>
        </div>
      </div>

      {/* Chips flotantes */}
      <div className="absolute -left-3 top-10 flex animate-float items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-slate-100 sm:-left-6">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
          <Icon name="clock" className="h-5 w-5" />
        </span>
        <span className="text-sm font-bold text-ink">
          Urgencias <span className="text-brand-700">24 h</span>
        </span>
      </div>

      <div className="absolute -right-2 bottom-8 flex animate-float-slow items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-slate-100 sm:-right-6">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
          <Icon name="home" className="h-5 w-5" />
        </span>
        <span className="text-sm font-bold text-ink">Toma a domicilio</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="bg-mesh">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:pb-24 lg:pt-16">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-800">
            <Icon name="pin" className="h-4 w-4" />
            Alcalá · Valle del Cauca
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Laboratorio clínico{" "}
            <span className="bg-gradient-to-r from-brand-600 to-sky bg-clip-text text-transparent">
              confiable y cercano
            </span>{" "}
            en Alcalá y la región
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            Exámenes de sangre, perfil lipídico, tiroides, antidoping y
            sueroterapia. Con <strong className="text-ink">toma de muestras a
            domicilio</strong> en Alcalá, Cartago, Quimbaya, Montenegro, Armenia
            y Pereira.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-4 text-base font-bold text-white shadow-xl shadow-brand-600/25 transition hover:bg-brand-700"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Agendar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-bold text-ink ring-1 ring-slate-200 transition hover:ring-brand-300"
            >
              Ver exámenes
              <Icon name="arrow" className="h-5 w-5 text-brand-600" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
            {["Resultados oportunos", "Atención cálida", "Personal profesional"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <Icon name="check" className="h-5 w-5 text-brand-600" />
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ animationDelay: "0.12s" }}>
          <HeroArt />
        </div>
      </div>
    </section>
  );
}
