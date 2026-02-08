import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Columna 1: Contáctanos */}
          <div className="footer-column">
            <h3 className="footer-title">Contáctanos</h3>
            <ul className="footer-list">
              <li><a href="mailto:comercial@qvision.us">E-mail : comercial@qvision.us</a></li>
              <li><a href="tel:+573002550265">WhatsApp +300 255 02 65</a></li>
              <li><a href="#">Comunícate con nosotros</a></li>
            </ul>
          </div>

          {/* Columna 2: Categorías de Cursos */}
          <div className="footer-column">
            <h3 className="footer-title">Categorías de Cursos</h3>
            <ul className="footer-list">
              <li><a href="#">Desarrollo</a></li>
              <li><a href="#">Metodología de Pruebas</a></li>
              <li><a href="#">Pruebas Funcionales</a></li>
              <li><a href="#">Pruebas No Funcionales</a></li>
              <li><a href="#">DevOps</a></li>
              <li><a href="#">Cloud</a></li>
              <li><a href="#">Automatización</a></li>
            </ul>
          </div>

          {/* Columna 3: Certificaciones */}
          <div className="footer-column">
            <h3 className="footer-title">Certificaciones</h3>
            <ul className="footer-list">
              <li><a href="#">Scrum Master</a></li>
              <li><a href="#">Scrum Product Owner</a></li>
              <li><a href="#">Scrum Developer</a></li>
              <li><a href="#">Agile Coach</a></li>
              <li><a href="#">Design Thinking</a></li>
              <li><a href="#">Kanban</a></li>
              <li><a href="#">OKR</a></li>
              <li><a href="#">DevOps</a></li>
            </ul>
          </div>

          {/* Columna 4: Q-Vision Technologies */}
          <div className="footer-column">
            <h3 className="footer-title">Q-Vision Technologies</h3>
            <ul className="footer-list">
              <li><a href="#">Desarrollo de Software</a></li>
              <li><a href="#">Aseguramiento de Calidad</a></li>
              <li><a href="#">Automatización de Procesos con RPA</a></li>
              <li><a href="#">Talento TI</a></li>
              <li><a href="#">Gestión Inteligente de Datos</a></li>
            </ul>
          </div>

          {/* Columna 5: Soporte */}
          <div className="footer-column">
            <h3 className="footer-title">Soporte</h3>
            <p className="footer-text">Si tienes inconvenientes o dudas, contáctanos al correo</p>
            <a href="mailto:izyacademy@qvision.us" className="footer-email">izyacademy@qvision.us</a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-logo">
            <span className="logo-text">izy</span>
          </div>
          
          <div className="footer-links">
            <a href="#">Términos y Condiciones</a>
            <span className="separator">·</span>
            <a href="#">Política Tratamiento de Datos</a>
          </div>
          
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-copyright">
          <p>Copyright &copy; 2023 IzyAcademy Marca Registrada By Qvision Technologies.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer