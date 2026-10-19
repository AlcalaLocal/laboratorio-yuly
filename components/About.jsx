import { site, whatsappLink } from "@/lib/site";
import { Icon } from "@/components/Icons";

const values = [
  {
    icon: "shield",
    title: "Confianza y rigor",
    text: "Procesos cuidadosos y resultados que tu médico puede interpretar con seguridad.",
  },
  {
    icon: "users",
    title: "Trato humano",
    text: "Te explicamos todo con paciencia. Aquí eres una persona, no un número.",
  },
  {
    icon: "clock",
    title: "Siempre disponibles",
    text: "Urgencias 24 horas y horarios flexibles para que la salud no espere.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 to-brand-800 p-8 shadow-2xl shadow-brand-900/20 sm:p-10">
            <Icon name="drop" className="h-10 w-10 text-brand-200" />
            <blockquote className="mt-5 text-2xl font-extrabold leading-snug text-white sm:text-3xl">
              “{site.slogan}.”
            </blockquote>
            <p className="mt-6 text-brand-100">
              En el Laboratorio Clínico Dra. Yuly Osorio tu bienestar es nuestra
              prioridad.
            </p>
            <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-6">
              <img
                src="/img/yuly-headshot.webp"
                alt="Dra. Yuly Osorio, bacterióloga"
                width="48"
                height="48"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white/30"
              />
              <span>
                <span className="block font-bold text-white">Dra. Yuly Osorio</span>
                <span className="block text-sm text-brand-200">
                  Dirección del laboratorio
                </span>
              </span>
            </div>
          </div>
        </div>

        <div>
          <span className="text-sm font-bold uppercase tracking-wide text-brand-700">
            Sobre el laboratorio
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Cuidamos tu salud con cercanía y profesionalismo
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Somos un laboratorio clínico de Alcalá comprometido con la salud de
            nuestra comunidad y de los municipios vecinos. Combinamos exámenes
            confiables con un trato humano y resultados oportunos, para que tú y tu
            familia tomen decisiones informadas sobre su bienestar.
          </p>

          <div className="mt-8 space-y-4">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-extrabold text-ink">{v.title}</h3>
                  <p className="text-slate-600">{v.text}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            Hablar con nosotros
          </a>
        </div>
      </div>
    </section>
  );
}
