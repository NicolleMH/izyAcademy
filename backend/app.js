const express = require('express');
const cors = require('cors');
const loginRoutes = require('./routes/login.routes.js');

const app = express();

app.use(cors({ 
  origin:'http://localhost:5173',
  credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', loginRoutes);

module.exports = app;