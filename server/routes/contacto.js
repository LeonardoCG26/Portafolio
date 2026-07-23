const express = require('express');
const router = express.Router();
const Contacto = require('../models/Contacto');

const esCorreoValido = (correo) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

router.post('/', async (req, res) => {
  try {
    const { nombre, correo, mensaje } = req.body || {};

    // Validacion: solo aceptamos los campos esperados, con tipos y longitudes correctas.
    if (typeof nombre !== 'string' || nombre.trim().length < 2 || nombre.length > 100) {
      return res.status(400).json({ mensaje: 'El nombre debe tener entre 2 y 100 caracteres.' });
    }
    if (typeof correo !== 'string' || !esCorreoValido(correo) || correo.length > 150) {
      return res.status(400).json({ mensaje: 'El correo no es valido.' });
    }
    if (typeof mensaje !== 'string' || mensaje.trim().length < 5 || mensaje.length > 2000) {
      return res.status(400).json({ mensaje: 'El mensaje debe tener entre 5 y 2000 caracteres.' });
    }

    // Construimos el documento con campos explicitos (evita mass assignment).
    const nuevoMensaje = new Contacto({
      nombre: nombre.trim(),
      correo: correo.trim().toLowerCase(),
      mensaje: mensaje.trim(),
    });
    await nuevoMensaje.save();

    res.status(201).json({ mensaje: 'Mensaje guardado' });
  } catch (err) {
    console.error('Error al guardar contacto:', err);
    res.status(500).json({ mensaje: 'No se pudo guardar el mensaje.' });
  }
});

module.exports = router;
