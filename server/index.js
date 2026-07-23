require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const app = express();
const PORT = process.env.PORT || 5000;
const skipDb = process.env.SKIP_DB === 'true';

const contactoRoutes = require('./routes/contacto');
const authRoutes = require('./routes/auth');
const proyectosRoutes = require('./routes/proyectos');

// CORS restringido a los origenes declarados en CORS_ORIGINS (separados por coma).
const allowedOrigins = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      // Permite herramientas sin origen (curl, apps moviles) y los origenes de la lista.
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Origen no permitido por CORS'));
    },
  })
);

// Limite global de peticiones para mitigar abuso/DoS.
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

app.use(express.json({ limit: '10kb' }));

app.use('/api/contacto', contactoRoutes);
app.use('/api/login', authRoutes);
app.use('/api/proyectos', proyectosRoutes);

// Manejador de errores centralizado.
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ mensaje: err.message || 'Error interno del servidor.' });
});

function iniciarServidor() {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}${skipDb ? ' (modo sin base de datos)' : ''}`);
  });
}

if (skipDb) {
  iniciarServidor();
} else {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(iniciarServidor)
    .catch((err) => {
      console.error('No se pudo conectar a MongoDB:', err.message);
      process.exit(1);
    });
}
