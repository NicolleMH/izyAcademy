import '../styles/Novedades.css'

const Novedades = () => {
  return (
    <section className="novedades">
      <div className="container">
        <h2 className="section-title">Novedades</h2>
        
        <div className="novedades-grid">
          {/* Card Principal - Bienvenidos */}
          <div className="novedad-card card-principal">
            <div className="card-image">
              <img src="/src/assets/images/bienvenida.jpg" alt="Bienvenidos a IzyAcademy" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Bienvenidos a IzyAcademy</h3>
              <p className="card-text">
                Nos complace darte la bienvenida a este innovador espacio educativo donde la 
                excelencia académica se encuentra con la comodidad y flexibilidad. Aquí, tu 
                aprendizaje es nuestra prioridad, y nuestro campus virtual está diseñado para 
                ofrecerte una experiencia educativa enriquecedora desde la comodidad de tu hogar.
              </p>
              <div className="card-promo">
                <p>
                  <strong>¡Aprovecha!</strong> este mes hasta un <strong>35% de descuento</strong> en 
                  todos nuestros cursos y rutas de formación 🎓
                </p>
              </div>
            </div>
          </div>

          {/* Cards Grid - 4 cards */}
          <div className="cards-grid">
            {/* Card 1 */}
            <div className="novedad-card">
              <div className="card-image">
                <img src="/src/assets/images/comunidad.jpg" alt="Generación de comunidad" />
              </div>
              <div className="card-badge">Generación de comunidad</div>
              <div className="card-content">
                <p className="card-text">
                  Nos complace generar vínculos sociales entre personas que comparten un mismo 
                  interés, incentivar la construcción de un sentido de pertenencia y colaboración 
                  dentro de la comunidad.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="novedad-card">
              <div className="card-image">
                <img src="/src/assets/images/transferencia.jpg" alt="Transferencia de conocimiento" />
              </div>
              <div className="card-badge">Transferencia de conocimiento</div>
              <div className="card-content">
                <p className="card-text">
                  Nos apasiona compartir información, habilidades y experiencias con el objetivo 
                  de aplicar y aprovechar esta información para el desarrollo de las habilidades.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="novedad-card">
              <div className="card-image">
                <img src="/src/assets/images/certificaciones.jpg" alt="Certificaciones e insignias" />
              </div>
              <div className="card-badge">Certificaciones e insignias</div>
              <div className="card-content">
                <p className="card-text">
                  IzyAcademy te brinda certificaciones e insignias digitales para que compartas 
                  y avales los conocimientos adquiridos junto a nosotros.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="novedad-card">
              <div className="card-image">
                <img src="/src/assets/images/apropiacion.jpg" alt="Apropiación del conocimiento" />
              </div>
              <div className="card-badge">Apropiación del conocimiento</div>
              <div className="card-content">
                <p className="card-text">
                  Desde IzyAcademy nos importa que adquieras, comprendas y asimiles el conocimiento, 
                  habilidades e ideas que creamos para ti y para la comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Novedades