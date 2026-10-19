import { site, whatsappLink } from "@/lib/site";
import { Icon } from "@/components/Icons";

const rows = [
  {
    icon: "pin",
    label: "Dirección",
    value: site.address.full,
    href: `https://maps.google.com/?q=${encodeURIComponent(
      site.name + " " + site.address.full
    )}`,
  },
  { icon: "whatsapp", label: "WhatsApp", value: site.phoneDisplay, href: whatsappLink() },
  { icon: "phone", label: "Teléfono", value: site.phoneDisplay, href: `tel:${site.phoneRaw}` },
  { icon: "mail", label: "Correo", value: site.email, href: `mailto:${site.email}` },
  { icon: "facebook", label: "Facebook", value: "Laboratorio Clínico Yuly Osorio", href: site.social.facebook },
];

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-xl ring-1 ring-slate-100">
        <div className="grid lg:grid-cols-2">
          <div className="p-8 sm:p-10 lg:p-12">
            <span className="text-sm font-bold uppercase tracking-wide text-brand-700">
              Contáctanos
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Estamos para cuidarte
            </h2>
            <p className="mt-3 text-slate-600">
              Agenda tu examen, resuelve tus dudas o pide una toma a domicilio. Te
              respondemos con gusto.
            </p>

            <div className="mt-8 space-y-3">
              {rows.map((r) => (
                <a
                  key={r.label}
                  href={r.href}
                  target={r.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4 transition hover:border-brand-200 hover:bg-brand-50/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name={r.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-wide text-slate-400">
                      {r.label}
                    </span>
                    <span className="block truncate font-bold text-ink">{r.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-4 rounded-2xl bg-brand-600 p-5 text-white">
              <Icon name="clock" className="mt-0.5 h-6 w-6 shrink-0 text-brand-100" />
              <div className="text-sm">
                <p className="font-extrabold">Horarios de atención</p>
                <p className="text-brand-50">{site.hours.morning}</p>
                <p className="text-brand-50">{site.hours.afternoon}</p>
                <p className="mt-1 font-semibold text-white">{site.hours.note}</p>
              </div>
            </div>
          </div>

          <div className="min-h-[340px] bg-brand-50 lg:min-h-full">
            <iframe
              title="Ubicación del laboratorio en Alcalá, Valle del Cauca"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                "Alcalá, Valle del Cauca " + site.address.street
              )}&z=15&output=embed`}
              className="h-full min-h-[340px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
