import { useState } from 'react';
import axios from 'axios';
import Button from '../ui/Button';
import Swal from 'sweetalert2';

// Configuración de Axios
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Interceptor para manejo de errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      throw new Error('Tiempo de espera agotado');
    }
    if (error.code === 'ERR_NETWORK') {
      throw new Error('Error de red. Verifica que el servidor esté corriendo');
    }
    throw error;
  }
);

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    acceptPrivacy: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.first_name.trim()) {
      newErrors.first_name = 'El nombre es requerido';
    }

    if (!formData.last_name.trim()) {
      newErrors.last_name = 'Los apellidos son requeridos';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Debe confirmar la contraseña';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Debe aceptar los términos y condiciones';
    }

    if (!formData.acceptPrivacy) {
      newErrors.acceptPrivacy = 'Debe aceptar la política de tratamiento de datos';
    }

    return newErrors;
  };

  const isButtonEnabled = formData.acceptTerms && formData.acceptPrivacy;

  const resetForm = () => {
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
      acceptPrivacy: false
    });
  };

  const showError = async (message, details = '') => {
    await Swal.fire({
      icon: 'error',
      title: message,
      text: details,
      confirmButtonColor: '#3b82f6'
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      await showError('Error en el formulario', 'Por favor, corrige los errores antes de continuar');
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const { data } = await api.post('/api/register', {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password
      });

      if (data.success) {
        await Swal.fire({
          icon: 'success',
          title: '¡Registro exitoso!',
          text: 'Tu cuenta ha sido creada. Ya puedes iniciar sesión.',
          confirmButtonColor: '#3b82f6',
          confirmButtonText: 'Aceptar'
        });
        
        resetForm();
      } else {
        await showError('Error al registrar', data.message || 'No se pudo completar el registro');
      }
    } catch (error) {
      let errorMessage = 'No se pudo conectar con el servidor';
      
      if (error.response) {
        // El servidor respondió con un código de error
        errorMessage = error.response.data?.message || `Error del servidor: ${error.response.status}`;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      await showError('Error de conexión', errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Imagen lateral */}
              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-400 opacity-10" />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600"
                  alt="Register"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className="text-2xl font-bold text-white drop-shadow-lg">izyacademy</div>
                </div>
              </div>

              {/* Formulario */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Regístrate</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        errors.first_name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Nombre"
                      disabled={isSubmitting}
                      autoComplete="given-name"
                    />
                    {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>}
                  </div>

                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        errors.last_name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Apellidos"
                      disabled={isSubmitting}
                      autoComplete="family-name"
                    />
                    {errors.last_name && <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="correo@ejemplo.com"
                      disabled={isSubmitting}
                      autoComplete="email"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        errors.password ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Mínimo 6 caracteres"
                      disabled={isSubmitting}
                      autoComplete="new-password"
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirmar contraseña
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Repite tu contraseña"
                      disabled={isSubmitting}
                      autoComplete="new-password"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="acceptTerms"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className="mt-1 mr-2 w-4 h-4 text-primary focus:ring-primary"
                        disabled={isSubmitting}
                      />
                      <label htmlFor="acceptTerms" className="text-sm text-gray-700 cursor-pointer">
                        Acepto términos y condiciones
                      </label>
                    </div>
                    {errors.acceptTerms && <p className="text-red-500 text-sm ml-6">{errors.acceptTerms}</p>}

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="acceptPrivacy"
                        name="acceptPrivacy"
                        checked={formData.acceptPrivacy}
                        onChange={handleChange}
                        className="mt-1 mr-2 w-4 h-4 text-primary focus:ring-primary"
                        disabled={isSubmitting}
                      />
                      <label htmlFor="acceptPrivacy" className="text-sm text-gray-700 cursor-pointer">
                        Acepto Política de tratamiento de datos
                      </label>
                    </div>
                    {errors.acceptPrivacy && <p className="text-red-500 text-sm ml-6">{errors.acceptPrivacy}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={!isButtonEnabled || isSubmitting}
                    variant="primary"
                    size="large"
                    className="w-full mt-6"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Registrando...
                      </span>
                    ) : (
                      'Registrarse'
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;