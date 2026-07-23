const express = require('express');
const router = express.Router();
const Proyecto = require('../models/Proyecto');
const verificarToken = require('../middleware/verificarToken');

router.get('/', async (req, res) => {
  try {
    const proyectos = await Proyecto.find();
    res.json(proyectos);
  } catch (err) {
    console.error('Error al obtener proyectos:', err);
    res.status(500).json({ mensaje: 'No se pudieron obtener los proyectos.' });
  }
});

router.post('/', verificarToken, async (req, res) => {
  try {
    const { titulo, descripcion, tecnologias, link } = req.body || {};

    if (typeof titulo !== 'string' || titulo.trim().length < 2 || titulo.length > 120) {
      return res.status(400).json({ mensaje: 'El titulo debe tener entre 2 y 120 caracteres.' });
    }
    if (typeof descripcion !== 'string' || descripcion.length > 2000) {
      return res.status(400).json({ mensaje: 'La descripcion es invalida (max 2000 caracteres).' });
    }
    if (tecnologias !== undefined && !Array.isArray(tecnologias)) {
      return res.status(400).json({ mensaje: 'tecnologias debe ser una lista.' });
    }
    if (link !== undefined && (typeof link !== 'string' || link.length > 300)) {
      return res.status(400).json({ mensaje: 'El link es invalido.' });
    }

    // Campos explicitos para evitar mass assignment.
    const nuevoProyecto = new Proyecto({
      titulo: titulo.trim(),
      descripcion: (descripcion || '').trim(),
      tecnologias: Array.isArray(tecnologias) ? tecnologias.map(String) : [],
      link: link ? link.trim() : undefined,
    });
    await nuevoProyecto.save();

    res.status(201).json({ mensaje: 'Proyecto guardado' });
  } catch (err) {
    console.error('Error al guardar proyecto:', err);
    res.status(500).json({ mensaje: 'No se pudo guardar el proyecto.' });
  }
});

module.exports = router;
