import { whatsappLink } from "@/lib/site";
import { Icon } from "@/components/Icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-4 text-white shadow-xl shadow-black/20 transition hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <Icon name="whatsapp" className="h-7 w-7" strokeWidth={1.5} />
      <span className="hidden pr-1 text-sm font-bold group-hover:inline sm:inline">
        Escríbenos
      </span>
    </a>
  );
}
