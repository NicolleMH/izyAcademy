import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
  const [menuActive, setMenuActive] = useState(false)
  const [rutasDropdownActive, setRutasDropdownActive] = useState(false)
  const [cursosDropdownActive, setCursosDropdownActive] = useState(false)
  const [loginModalActive, setLoginModalActive] = useState(false)

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }

  const openLoginModal = () => {
    setLoginModalActive(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLoginModal = () => {
    setLoginModalActive(false)
    document.body.style.overflow = 'auto'
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    alert('Función de login - Conectar con backend')
    closeLoginModal()
  }

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="container">
            <div className="nav-wrapper">
              {/* Logo */}
              <div className="logo">
                <Link to="/">
                  <span className="logo-text">izy</span>
                  <span className="logo-academy">academy</span>
                </Link>
              </div>

              {/* Hamburger Menu */}
              <button 
                className={`hamburger ${menuActive ? 'active' : ''}`} 
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>

              {/* Navigation Menu */}
              <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
                <li>
                  <Link to="/" className="nav-link">Inicio</Link>
                </li>
                
                {/* Rutas de Formación Dropdown */}
                <li 
                  className={`dropdown ${rutasDropdownActive ? 'active' : ''}`}
                  onMouseEnter={() => window.innerWidth > 768 && setRutasDropdownActive(true)}
                  onMouseLeave={() => window.innerWidth > 768 && setRutasDropdownActive(false)}
                >
                  <a 
                    href="#" 
                    className="nav-link dropdown-toggle"
                    onClick={(e) => {
                      if (window.innerWidth <= 768) {
                        e.preventDefault()
                        setRutasDropdownActive(!rutasDropdownActive)
                      }
                    }}
                  >
                    Rutas De Formación <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#" className="dropdown-item">Científico De Datos</a></li>
                    <li><Link to="/dotnet" className="dropdown-item">Ruta de Formación En .NET</Link></li>
                    <li><a href="#" className="dropdown-item">Ruta de Formación en Automatización</a></li>
                  </ul>
                </li>
                
                {/* Cursos Dropdown */}
                <li 
                  className={`dropdown ${cursosDropdownActive ? 'active' : ''}`}
                  onMouseEnter={() => window.innerWidth > 768 && setCursosDropdownActive(true)}
                  onMouseLeave={() => window.innerWidth > 768 && setCursosDropdownActive(false)}
                >
                  <a 
                    href="#" 
                    className="nav-link dropdown-toggle"
                    onClick={(e) => {
                      if (window.innerWidth <= 768) {
                        e.preventDefault()
                        setCursosDropdownActive(!cursosDropdownActive)
                      }
                    }}
                  >
                    Cursos <i className="fas fa-chevron-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="#" className="dropdown-item">Desarrollo</a></li>
                    <li><a href="#" className="dropdown-item">Metodología de Pruebas</a></li>
                    <li><a href="#" className="dropdown-item">DevOps</a></li>
                  </ul>
                </li>
                
                <li>
                  <a href="#" className="nav-link">Quiénes somos</a>
                </li>
              </ul>

              {/* Nav Actions */}
              <div className="nav-actions">
                <button className="btn-login" onClick={openLoginModal}>
                  <i className="fas fa-user"></i> Iniciar Sesión
                </button>
                <button className="btn-search">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Country Labels */}
        <div className="country-labels">
          <span className="country-label">México</span>
          <span className="country-label">Chile</span>
          <span className="country-label">Costa Rica</span>
          <span className="country-label">Colombia</span>
          <span className="country-label">Panamá</span>
        </div>
      </header>

      {/* Modal Login */}
      <div 
        className={`modal ${loginModalActive ? 'active' : ''}`}
        onClick={(e) => e.target.classList.contains('modal') && closeLoginModal()}
      >
        <div className="modal-content">
          <button className="modal-close" onClick={closeLoginModal}>
            <i className="fas fa-times"></i>
          </button>
          
          <h2 className="modal-title">Inicie sesión en su cuenta</h2>
          
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <input type="email" placeholder="Correo electrónico" required />
            </div>
            
            <div className="form-group">
              <input type="password" placeholder="Contraseña" required />
            </div>
            
            <button type="submit" className="btn-submit">Acceder</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Header