const express = require('express');
const cors = require('cors');
const loginRoutes = require('./routes/login.routes.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', loginRoutes);

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.json({ message: 'API de IzyAcademy funcionando correctamente' });
});

module.exports = app;