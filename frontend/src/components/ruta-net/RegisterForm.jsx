import { useState } from 'react';
import Button from '../ui/Button';
import Swal from 'sweetalert2';

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
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
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
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
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

  // Verificar si ambos checkbox están marcados para habilitar el botón
  const isButtonEnabled = formData.acceptTerms && formData.acceptPrivacy;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar el formulario
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      
      // Mostrar alerta de error con SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Error en el formulario',
        text: 'Por favor, corrige los errores antes de continuar',
        confirmButtonColor: '#3b82f6'
      });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      console.log('Intentando conectar con el servidor...');
      
      // Llamada directa al backend
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          password: formData.password
        })
      });

      console.log('Respuesta recibida:', response.status);

      const data = await response.json();
      console.log('Datos:', data);

      if (data.success) {
        // Alerta de éxito
        await Swal.fire({
          icon: 'success',
          title: '¡Registro exitoso!',
          text: 'Tu cuenta ha sido creada. Ya puedes iniciar sesión.',
          confirmButtonColor: '#3b82f6',
          confirmButtonText: 'Aceptar'
        });
        
        // Limpiar formulario
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          confirmPassword: '',
          acceptTerms: false,
          acceptPrivacy: false
        });
      } else {
        // Alerta de error del servidor
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar',
          text: data.message || 'No se pudo completar el registro',
          confirmButtonColor: '#3b82f6'
        });
      }
    } catch (error) {
      console.error('Error completo:', error);
      
      // Alerta de error de conexión mejorada
      Swal.fire({
        icon: 'error',
        title: 'Error de conexión',
        html: `
          <p>No se pudo conectar con el servidor.</p>
          <br>
          <p><strong>Verifica que:</strong></p>
          <ul style="text-align: left;">
            <li>El servidor backend esté corriendo</li>
            <li>El servidor esté en el puerto 3000</li>
            <li>No haya errores en la consola del backend</li>
          </ul>
          <br>
          <p><strong>Error:</strong> ${error.message}</p>
        `,
        confirmButtonColor: '#3b82f6',
        width: 600
      });
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
                  <div className="text-2xl font-bold text-white">izyacademy</div>
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
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.first_name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Nombre"
                      disabled={isSubmitting}
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
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.last_name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Apellidos"
                      disabled={isSubmitting}
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
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="correo@ejemplo.com"
                      disabled={isSubmitting}
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
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.password ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Mínimo 6 caracteres"
                      disabled={isSubmitting}
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
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                        errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Repite tu contraseña"
                      disabled={isSubmitting}
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="acceptTerms"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className="mt-1 mr-2"
                        disabled={isSubmitting}
                      />
                      <label htmlFor="acceptTerms" className="text-sm text-gray-700">
                        Acepto términos y condiciones
                      </label>
                    </div>
                    {errors.acceptTerms && <p className="text-red-500 text-sm">{errors.acceptTerms}</p>}

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="acceptPrivacy"
                        name="acceptPrivacy"
                        checked={formData.acceptPrivacy}
                        onChange={handleChange}
                        className="mt-1 mr-2"
                        disabled={isSubmitting}
                      />
                      <label htmlFor="acceptPrivacy" className="text-sm text-gray-700">
                        Acepto Política de tratamiento de datos
                      </label>
                    </div>
                    {errors.acceptPrivacy && <p className="text-red-500 text-sm">{errors.acceptPrivacy}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={!isButtonEnabled || isSubmitting}
                    variant="primary"
                    size="large"
                    className="w-full"
                  >
                    {isSubmitting ? 'Registrando...' : 'Registrarse'}
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