import { cities, whatsappLink } from "@/lib/site";
import { Icon } from "@/components/Icons";

export default function Coverage() {
  return (
    <section id="cobertura" className="relative overflow-hidden bg-ink py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sky/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-200">
            <Icon name="truck" className="h-4 w-4" />
            Toma de muestras a domicilio
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Llegamos hasta tu casa en toda la región
          </h2>
          <p className="mt-4 max-w-lg text-lg text-slate-300">
            Ubicados en Alcalá, llevamos la toma de muestras a tu hogar u oficina
            en los municipios vecinos del Valle, Quindío y Risaralda. Ideal para
            adultos mayores, personas con movilidad reducida o quien prefiere la
            comodidad de casa.
          </p>

          <a
            href={whatsappLink("Hola, quisiera agendar una toma de muestras a domicilio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-4 text-base font-bold text-white shadow-xl shadow-black/30 transition hover:bg-brand-400"
          >
            <Icon name="calendar" className="h-5 w-5" />
            Agendar a domicilio
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
          {cities.map((c) => (
            <div
              key={c.name}
              className={`rounded-2xl p-5 ring-1 transition ${
                c.home
                  ? "bg-brand-500 text-white ring-brand-400"
                  : "bg-white/5 text-white ring-white/10 hover:bg-white/10"
              }`}
            >
              <Icon
                name="pin"
                className={`h-6 w-6 ${c.home ? "text-white" : "text-brand-300"}`}
              />
              <p className="mt-3 text-lg font-extrabold">{c.name}</p>
              <p className={`text-sm ${c.home ? "text-brand-50" : "text-slate-400"}`}>
                {c.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
