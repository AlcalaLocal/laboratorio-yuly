import { Icon } from "@/components/Icons";

const steps = [
  {
    icon: "whatsapp",
    title: "Escríbenos",
    text: "Agenda por WhatsApp o llámanos. Te indicamos la preparación y el ayuno si aplica.",
  },
  {
    icon: "drop",
    title: "Toma tu muestra",
    text: "Ven a nuestra sede en Alcalá o te visitamos en casa con todas las medidas de bioseguridad.",
  },
  {
    icon: "check",
    title: "Recibe resultados",
    text: "Entregamos tus resultados de forma oportuna y resolvemos tus dudas con claridad.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="bg-brand-50/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-brand-700">
            Así de fácil
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Hacerte un examen en 3 pasos
          </h2>
        </div>

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-9 hidden h-0.5 bg-gradient-to-r from-transparent via-brand-200 to-transparent md:block" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="mx-auto flex h-18 w-18 items-center justify-center">
                <span className="relative flex h-18 w-18 items-center justify-center rounded-3xl bg-white text-brand-700 shadow-lg ring-1 ring-brand-100">
                  <Icon name={s.icon} className="h-8 w-8" />
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-sm font-extrabold text-white shadow">
                    {i + 1}
                  </span>
                </span>
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-ink">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-slate-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
