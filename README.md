# Portafolio — Leonardo Cortes Garcia

Portafolio personal full stack con frontend en React y un backend en Node/Express.

## Estructura

```
Portafolio/
├── client/   # Frontend: React 19 + Vite + Tailwind CSS 4 + Framer Motion
└── server/   # Backend: Node + Express 5 + Mongoose (MongoDB)
```

## Requisitos

- Node.js 18 o superior
- Una base de datos MongoDB (Atlas o local) si vas a usar el backend

## Frontend (`client/`)

```bash
cd client
npm install
cp .env.example .env   # ajusta las variables si hace falta
npm run dev            # servidor de desarrollo (http://localhost:5173)
npm run build          # build de produccion en dist/
npm run lint           # ESLint
```

Variables de entorno (`client/.env`):

| Variable            | Descripcion                                   |
| ------------------- | --------------------------------------------- |
| `VITE_CLIMATE_URL`  | URL del proyecto Climate en la seccion Work.  |

> Las variables `VITE_` se incluyen en el bundle publico: no pongas secretos.

## Backend (`server/`)

```bash
cd server
npm install
cp .env.example .env   # rellena TODOS los valores reales
npm run dev            # arranca con recarga (node --watch)
npm start              # arranca en modo produccion
```

Variables de entorno (`server/.env`) — ver `server/.env.example`:

| Variable              | Descripcion                                                        |
| --------------------- | ------------------------------------------------------------------ |
| `PORT`                | Puerto del servidor (default 5000).                                |
| `MONGO_URI`           | Cadena de conexion a MongoDB.                                      |
| `JWT_SECRET`          | Cadena larga y aleatoria para firmar los JWT.                      |
| `ADMIN_USER`          | Usuario del panel admin.                                           |
| `ADMIN_PASSWORD_HASH` | Hash bcrypt del password admin (ver abajo).                       |
| `CORS_ORIGINS`        | Origenes permitidos, separados por coma.                          |
| `SKIP_DB`             | `true` para arrancar sin conectar a la base de datos.             |

### Generar el hash del password admin

El backend nunca guarda el password en texto plano. Genera el hash con:

```bash
node -e "console.log(require('bcryptjs').hashSync('TU_PASSWORD', 10))"
```

Copia el resultado en `ADMIN_PASSWORD_HASH`.

## Endpoints principales

| Metodo | Ruta             | Auth        | Descripcion                     |
| ------ | ---------------- | ----------- | ------------------------------- |
| POST   | `/api/login`     | —           | Devuelve un JWT (rate-limited). |
| POST   | `/api/contacto`  | —           | Guarda un mensaje de contacto.  |
| GET    | `/api/proyectos` | —           | Lista los proyectos.            |
| POST   | `/api/proyectos` | Bearer JWT  | Crea un proyecto.               |

Las rutas protegidas esperan el header `Authorization: Bearer <token>`.

## Seguridad

- Los secretos viven solo en `.env` (ignorado por git). Nunca subas `.env`.
- Si algun secreto se expuso alguna vez, rotalo (contrasena de MongoDB, `JWT_SECRET`).
