# Portafolio — Leonardo Cortes Garcia

Portafolio personal: una single-page app estática construida con React y Vite.

## Stack

- **React 19** + **Vite 6**
- **Tailwind CSS 4** (vía PostCSS)
- **Framer Motion** para animaciones
- **React Router** para la navegación

El sitio es 100% estático: no consume ningún backend. El formulario de
contacto es un enlace `mailto:` directo.

## Estructura

```
Portafolio/
└── client/
    ├── public/            # CVs en PDF y assets estáticos
    ├── src/
    │   ├── components/     # Navbar, InteractiveHero, ProjectCard
    │   ├── pages/          # About, ProjectsPage
    │   ├── content/        # siteContent.js (textos e i18n EN/ES)
    │   └── assets/         # imágenes
    └── vercel.json         # rewrites de rutas para el deploy
```

## Desarrollo

```bash
cd client
npm install
cp .env.example .env   # opcional, solo si cambias VITE_CLIMATE_URL
npm run dev            # http://localhost:5173
npm run build          # build de producción en dist/
npm run preview        # previsualiza el build
npm run lint           # ESLint
```

## Variables de entorno

Las variables `VITE_` se incluyen en el bundle público: no pongas secretos.

| Variable           | Descripción                                  |
| ------------------ | -------------------------------------------- |
| `VITE_CLIMATE_URL` | URL del proyecto Climate en la sección Work. |

## Deploy

Desplegado en Vercel apuntando a la carpeta `client/`. Las reglas de
`client/vercel.json` redirigen `/climate` al subdominio del proyecto y
sirven la SPA para el resto de rutas.
