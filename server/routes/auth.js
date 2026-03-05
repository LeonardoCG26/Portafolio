const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/', (req, res) => {
  const { usuario, password } = req.body;
  if (usuario === 'admin' && password === 'admin123') {
    const token = jwt.sign({ usuario }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token });
  }
  res.status(401).json({ mensaje: 'Credenciales inválidas' });
});

module.exports = router;