import { Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Laboratorio Clínico en Alcalá | Dra. Yuly Osorio — Exámenes y a domicilio",
    template: "%s | Laboratorio Clínico Dra. Yuly Osorio",
  },
  description: site.description,
  keywords: [
    "laboratorio clínico Alcalá",
    "exámenes de sangre Alcalá Valle",
    "laboratorio clínico Cartago",
    "exámenes de laboratorio Quimbaya",
    "laboratorio Montenegro Quindío",
    "exámenes a domicilio Armenia",
    "antidoping Pereira",
    "prueba de embarazo",
    "perfil lipídico",
    "pruebas de tiroides",
    "sueroterapia",
    "toma de muestras a domicilio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: site.url,
    siteName: site.name,
    title: "Laboratorio Clínico Dra. Yuly Osorio — Alcalá, Valle del Cauca",
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  themeColor: "#0d9488",
};

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": site.url,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phoneRaw,
    email: site.email,
    image: `${site.url}/img/hero.svg`,
    priceRange: "$$",
    medicalSpecialty: "Clinical Laboratory",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: ["Alcalá", "Cartago", "Quimbaya", "Montenegro", "Armenia", "Pereira"].map(
      (c) => ({ "@type": "City", name: c })
    ),
    sameAs: [site.social.facebook],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "17:15",
        closes: "18:30",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-CO" className={jakarta.variable}>
      <body className="font-sans antialiased">
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
