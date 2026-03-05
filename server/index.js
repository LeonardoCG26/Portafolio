require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const skipDb = process.env.SKIP_DB === 'true';

const contactoRoutes = require('./routes/contacto');
const authRoutes = require('./routes/auth');
const proyectosRoutes = require('./routes/proyectos');

app.use(cors());
app.use(express.json());

app.use('/api/contacto', contactoRoutes);
app.use('/api/login', authRoutes);
app.use('/api/proyectos', proyectosRoutes);

if (skipDb) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT} (modo sin base de datos)`);
  });
} else {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Servidor corriendo en puerto ${PORT}`);
      });
    })
    .catch(err => console.log(err));
}
