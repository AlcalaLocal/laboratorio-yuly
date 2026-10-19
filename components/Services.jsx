import { services, whatsappLink } from "@/lib/site";
import { Icon } from "@/components/Icons";

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-brand-700">
          Nuestros exámenes
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Un laboratorio completo para toda la familia
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Desde el hemograma de rutina hasta pruebas especializadas y antidoping.
          Si no ves tu examen, escríbenos: también procesamos pruebas de mediana y
          alta complejidad.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <article
            key={s.id}
            className="group relative flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/20">
              <Icon name={s.icon} className="h-7 w-7" />
            </span>
            <h3 className="mt-5 text-xl font-extrabold text-ink">{s.title}</h3>
            <p className="mt-1.5 text-sm text-slate-500">{s.blurb}</p>
            <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
              {s.items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-sm text-slate-600">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  {it}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-brand-700 to-brand-600 px-6 py-7 text-center sm:flex-row sm:text-left">
        <p className="text-lg font-bold text-white">
          ¿No encuentras el examen que buscas?{" "}
          <span className="font-medium text-brand-100">Te ayudamos a cotizarlo.</span>
        </p>
        <a
          href={whatsappLink("Hola, quisiera consultar por un examen específico.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-700 transition hover:bg-brand-50"
        >
          <Icon name="whatsapp" className="h-5 w-5" />
          Consultar examen
        </a>
      </div>
    </section>
  );
}
