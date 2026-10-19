import { Icon } from "@/components/Icons";

const items = [
  { icon: "clock", title: "Urgencias 24 h", sub: "Siempre disponibles" },
  { icon: "truck", title: "A domicilio", sub: "Vamos hasta ti" },
  { icon: "microscope", title: "Amplio catálogo", sub: "Rutina y especializados" },
  { icon: "users", title: "Atención cercana", sub: "Trato humano y claro" },
];

export default function TrustBar() {
  return (
    <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-4 sm:px-6">
      <div className="grid grid-cols-2 gap-3 rounded-3xl bg-white p-4 shadow-xl ring-1 ring-slate-100 sm:gap-4 sm:p-6 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="flex items-center gap-3 rounded-2xl p-2 sm:p-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
              <Icon name={it.icon} className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-extrabold text-ink sm:text-base">
                {it.title}
              </span>
              <span className="block text-xs text-slate-500 sm:text-sm">{it.sub}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
