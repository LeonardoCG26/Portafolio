const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const rateLimit = require('express-rate-limit');
const router = express.Router();

// Limita los intentos de login para frenar ataques de fuerza bruta.
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { mensaje: 'Demasiados intentos, intenta de nuevo mas tarde.' },
});

router.post('/', loginLimiter, async (req, res) => {
  try {
    const { usuario, password } = req.body || {};

    const adminUser = process.env.ADMIN_USER;
    const adminHash = process.env.ADMIN_PASSWORD_HASH;

    if (!adminUser || !adminHash || !process.env.JWT_SECRET) {
      return res.status(500).json({ mensaje: 'Autenticacion no configurada en el servidor.' });
    }

    if (typeof usuario !== 'string' || typeof password !== 'string') {
      return res.status(400).json({ mensaje: 'Credenciales invalidas.' });
    }

    const usuarioOk = usuario === adminUser;
    const passwordOk = await bcrypt.compare(password, adminHash);

    if (usuarioOk && passwordOk) {
      const token = jwt.sign({ usuario }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.json({ token });
    }

    return res.status(401).json({ mensaje: 'Credenciales invalidas.' });
  } catch (err) {
    console.error('Error en login:', err);
    return res.status(500).json({ mensaje: 'Error interno del servidor.' });
  }
});

module.exports = router;
