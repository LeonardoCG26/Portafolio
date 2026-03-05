const express = require('express');
const router = express.Router();
const Contacto = require('../models/Contacto');

router.post('/', async (req, res) => {
  const nuevoMensaje = new Contacto(req.body);
  await nuevoMensaje.save();
  res.status(201).json({ mensaje: 'Mensaje guardado' });
});

module.exports = router;