# Laboratorio Clínico Dra. Yuly Osorio — Sitio web

Sitio web profesional para el **Laboratorio Clínico Dra. Yuly Osorio**, en Alcalá
(Valle del Cauca, Colombia), con enfoque en estética profesional, **SEO local** y
geolocalización para Alcalá, Cartago, Quimbaya, Montenegro, Armenia y Pereira.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- JavaScript / JSX · SVG de marca autocontenido
- SEO: metadatos, Open Graph, `sitemap.xml`, `robots.txt` y datos estructurados
  JSON-LD (`MedicalBusiness`) con cobertura por ciudad.

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # build de producción
npm start
```

## Estructura

| Ruta | Contenido |
|---|---|
| `lib/site.js` | Datos del negocio (NAP, horarios, servicios, ciudades, FAQ). **Editar aquí.** |
| `app/layout.jsx` | Metadatos SEO + JSON-LD `MedicalBusiness`. |
| `app/page.jsx` | Composición de la landing. |
| `components/` | Secciones de UI (Hero, Servicios, Cobertura, FAQ, Contacto…). |
| `content/seo.md` | Investigación de palabras clave y notas de SEO local. |
| `public/img/` | Activos SVG de marca. |

## Pendiente de confirmar con el negocio

- Días exactos de atención y convenios/EPS.
- Coordenadas exactas del pin de Google Maps.
- Registro del profesional responsable.

---

Demo / boceto preliminar. La fase de optimización, integraciones y despliegue se
realiza por separado.
