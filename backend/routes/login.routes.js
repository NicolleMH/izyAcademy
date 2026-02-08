const express = require('express');
const router = express.Router();
const loginController = require('../controller/login.controller.js');

// Rutas
router.post('/register', loginController.register);
router.post('/login', loginController.login);
router.get('/users', loginController.getAllUsers);
router.get('/users/:id', loginController.getUserById);
router.put('/users/:id', loginController.updateUser);
router.delete('/users/:id', loginController.deleteUser);

module.exports = router;