const mongoose = require('mongoose');

const contactoSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  mensaje: String,
}, { timestamps: true });

module.exports = mongoose.model('Contacto', contactoSchema);