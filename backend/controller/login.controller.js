const loginService = require('../services/login.service.js');

// Registrar un nuevo usuario
exports.register = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await loginService.register(userData);

    res.status(201).json({
      success: true,
      message: 'Usuario registrado exitosamente',
      data: newUser
    });
  } catch (error) {
    console.error('Error en register:', error);
    
    const statusCode = error.message.includes('obligatorios') || error.message.includes('registrado') 
      ? 400 
      : 500;

    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};

// Iniciar sesión
exports.login = async (req, res) => {
  try {
    const credentials = req.body;
    const user = await loginService.login(credentials);

    res.status(200).json({
      success: true,
      message: 'Login exitoso',
      data: user
    });
  } catch (error) {
    console.error('Error en login:', error);
    
    const statusCode = error.message.includes('obligatorios') || error.message.includes('inválidas')
      ? 401
      : 500;

    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const users = await loginService.getAllUsers();

    res.status(200).json({
      success: true,
      data: users
    });
  } catch (error) {
    console.error('Error en getAllUsers:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener los usuarios',
      error: error.message
    });
  }
};

// Obtener un usuario por ID
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await loginService.getUserById(id);

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Error en getUserById:', error);
    
    const statusCode = error.message.includes('no encontrado') ? 404 : 500;

    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};

// Actualizar usuario
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const updatedUser = await loginService.updateUser(id, userData);

    res.status(200).json({
      success: true,
      message: 'Usuario actualizado exitosamente',
      data: updatedUser
    });
  } catch (error) {
    console.error('Error en updateUser:', error);
    
    let statusCode = 500;
    if (error.message.includes('no encontrado')) {
      statusCode = 404;
    } else if (error.message.includes('ya está en uso')) {
      statusCode = 400;
    }

    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};

// Eliminar usuario
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await loginService.deleteUser(id);

    res.status(200).json({
      success: true,
      message: 'Usuario eliminado exitosamente'
    });
  } catch (error) {
    console.error('Error en deleteUser:', error);
    
    const statusCode = error.message.includes('no encontrado') ? 404 : 500;

    res.status(statusCode).json({
      success: false,
      message: error.message
    });
  }
};