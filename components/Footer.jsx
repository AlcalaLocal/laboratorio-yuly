import { site, whatsappLink } from "@/lib/site";
import { Logo, Icon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-11 w-11" />
              <span className="leading-tight">
                <span className="block font-extrabold text-white">
                  Laboratorio Clínico
                </span>
                <span className="block text-sm font-semibold text-brand-300">
                  Dra. Yuly Osorio
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              Exámenes de laboratorio y toma de muestras a domicilio en Alcalá,
              Cartago, Quimbaya, Montenegro, Armenia y Pereira.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-400"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["#servicios", "Servicios"],
                ["#cobertura", "Cobertura"],
                ["#proceso", "Cómo funciona"],
                ["#nosotros", "Nosotros"],
                ["#faq", "Preguntas"],
                ["#contacto", "Contacto"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-slate-400 transition hover:text-brand-300">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                {site.address.full}
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                <a href={`mailto:${site.email}`} className="hover:text-brand-300 break-all">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                <span>
                  {site.hours.morning} · {site.hours.afternoon}
                  <br />
                  {site.hours.note}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <p>Alcalá, Valle del Cauca · Colombia</p>
        </div>
      </div>
    </footer>
  );
}
