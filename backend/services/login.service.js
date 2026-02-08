const Login = require('../models/loginModel.js');

class LoginService {
  async register(userData) {
    const { first_name, last_name, email, password } = userData;

    // Validar que todos los campos estén presentes
    if (!first_name || !last_name || !email || !password) {
      throw new Error('Todos los campos son obligatorios');
    }

    // Verificar si el email ya existe
    const existingUser = await Login.findOne({ where: { email } });
    if (existingUser) {
      throw new Error('El email ya está registrado');
    }

    // Crear el nuevo usuario
    const newUser = await Login.create({
      first_name,
      last_name,
      email,
      password
    });

    return {
      id: newUser.id,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email
    };
  }

  // Iniciar sesión
  async login(credentials) {
    const { email, password } = credentials;

    // Validar que todos los campos estén presentes
    if (!email || !password) {
      throw new Error('Email y contraseña son obligatorios');
    }

    // Buscar el usuario por email
    const user = await Login.findOne({ where: { email } });
    if (!user) {
      throw new Error('Credenciales inválidas');
    }

    // Verificar la contraseña
    if (password !== user.password) {
      throw new Error('Credenciales inválidas');
    }

    return {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email
    };
  }

  // Obtener todos los usuarios
  async getAllUsers() {
    const users = await Login.findAll({
      attributes: ['id', 'first_name', 'last_name', 'email', 'created_at']
    });

    return users;
  }

  // Obtener un usuario por ID
  async getUserById(userId) {
    const user = await Login.findByPk(userId, {
      attributes: ['id', 'first_name', 'last_name', 'email', 'created_at']
    });

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    return user;
  }

  // Actualizar usuario
  async updateUser(userId, userData) {
    const { first_name, last_name, email } = userData;

    const user = await Login.findByPk(userId);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    // Si se intenta cambiar el email, verificar que no exista
    if (email && email !== user.email) {
      const existingUser = await Login.findOne({ where: { email } });
      if (existingUser) {
        throw new Error('El email ya está en uso');
      }
    }

    await user.update({
      first_name: first_name || user.first_name,
      last_name: last_name || user.last_name,
      email: email || user.email
    });

    return {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email
    };
  }

  // Eliminar usuario
  async deleteUser(userId) {
    const user = await Login.findByPk(userId);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    await user.destroy();
    return true;
  }
}

module.exports = new LoginService();