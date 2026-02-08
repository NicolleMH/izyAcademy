import '../styles/AprenderConstruir.css'

const AprenderConstruir = () => {
  return (
    <section className="aprende-section">
      <div className="container">
        <h2 className="section-title">Aprende a construir</h2>
        
        <div className="aprende-grid">
          {/* Card 1: Aplicaciones Web */}
          <div className="aprende-card">
            <div className="aprende-icon">
              <img src="/src/assets/icons/web-app.png" alt="Aplicaciones Web" />
            </div>
            <h3 className="aprende-title">Aplicaciones Web</h3>
          </div>

          {/* Card 2: Web API */}
          <div className="aprende-card">
            <div className="aprende-icon">
              <img src="/src/assets/icons/web-api.png" alt="Web API" />
            </div>
            <h3 className="aprende-title">Web API</h3>
          </div>

          {/* Card 3: Aplicaciones Seguras */}
          <div className="aprende-card">
            <div className="aprende-icon">
              <img src="/src/assets/icons/secure-app.png" alt="Aplicaciones Seguras" />
            </div>
            <h3 className="aprende-title">Aplicaciones Seguras</h3>
          </div>
        </div>

        {/* Banner Desarrollador */}
        <div className="developer-banner">
          <div className="banner-content">
            <p className="banner-text">
              ASP.NET, el framework de desarrollo web que permite crear aplicaciones web potentes, 
              seguras y escalables de manera fácil, rápida y eficiente.
            </p>
            <h3 className="banner-title">COMIENZA TU VIAJE PARA CONVERTIRTE EN DESARROLLADOR</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AprenderConstruir