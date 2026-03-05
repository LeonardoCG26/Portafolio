const mongoose = require('mongoose');

const proyectoSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  tecnologias: [String],
  link: String,
}, { timestamps: true });

module.exports = mongoose.model('Proyecto', proyectoSchema);