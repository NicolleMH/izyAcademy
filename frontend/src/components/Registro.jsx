import { useState } from 'react'
import '../styles/Registro.css'

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [terminosAceptados, setTerminosAceptados] = useState(false)
  const [politicasAceptadas, setPoliticasAceptadas] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validar contraseñas
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }

    // Validar checkboxes
    if (!terminosAceptados || !politicasAceptadas) {
      alert('Debes aceptar los términos y condiciones y la política de tratamiento de datos')
      return
    }

    console.log('Datos del formulario:', formData)
    alert('Registro exitoso - Conectar con backend')

    // Limpiar formulario
    setFormData({
      nombre: '',
      apellidos: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    setTerminosAceptados(false)
    setPoliticasAceptadas(false)
  }

  const isButtonDisabled = !terminosAceptados || !politicasAceptadas

  return (
    <section className="registro">
      <div className="container">
        <div className="registro-wrapper">
          {/* Imagen */}
          <div className="registro-image">
            <img src="/src/assets/images/registro-img.jpg" alt="Regístrate en IzyAcademy" />
          </div>

          {/* Formulario */}
          <div className="registro-form">
            <h2 className="form-title">Regístrate</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  id="nombre" 
                  placeholder="Nombre" 
                  value={formData.nombre}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  id="apellidos" 
                  placeholder="Apellidos" 
                  value={formData.apellidos}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Correo electrónico" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="password" 
                  id="password" 
                  placeholder="Contraseña" 
                  value={formData.password}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="password" 
                  id="confirmPassword" 
                  placeholder="Confirmar contraseña" 
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-checkbox">
                <input 
                  type="checkbox" 
                  id="terminos" 
                  checked={terminosAceptados}
                  onChange={(e) => setTerminosAceptados(e.target.checked)}
                  required 
                />
                <label htmlFor="terminos">
                  Acepto <a href="#">términos y condiciones</a>
                </label>
              </div>
              
              <div className="form-checkbox">
                <input 
                  type="checkbox" 
                  id="politicas" 
                  checked={politicasAceptadas}
                  onChange={(e) => setPoliticasAceptadas(e.target.checked)}
                  required 
                />
                <label htmlFor="politicas">
                  Acepto <a href="#">Política de tratamiento de datos</a>
                </label>
              </div>
              
              <button 
                type="submit" 
                className="btn-submit" 
                disabled={isButtonDisabled}
                style={{ opacity: isButtonDisabled ? '0.5' : '1' }}
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registro