import { site, whatsappLink } from "@/lib/site";
import { Icon } from "@/components/Icons";

function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Foto de la profesional */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 to-brand-800 p-1.5 shadow-2xl shadow-brand-900/25">
        <div className="relative overflow-hidden rounded-[1.7rem]">
          <img
            src="/img/yuly.webp"
            alt="Dra. Yuly Osorio, bacterióloga, en el Laboratorio Clínico Dra. Yuly Osorio en Alcalá, Valle del Cauca"
            width="1000"
            height="1250"
            className="h-auto w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent p-5 pt-16">
            <p className="text-lg font-extrabold text-white">Dra. Yuly Osorio</p>
            <p className="text-sm font-semibold text-brand-200">
              Bacterióloga · Dirección del laboratorio
            </p>
          </div>
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
