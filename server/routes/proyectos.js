const express = require('express');
const router = express.Router();
const Proyecto = require('../models/Proyecto');
const verificarToken = require('../middleware/verificarToken');

router.get('/', async (req, res) => {
  const proyectos = await Proyecto.find();
  res.json(proyectos);
});

router.post('/', verificarToken, async (req, res) => {
  const nuevoProyecto = new Proyecto(req.body);
  await nuevoProyecto.save();
  res.status(201).json({ mensaje: 'Proyecto guardado' });
});

module.exports = router;