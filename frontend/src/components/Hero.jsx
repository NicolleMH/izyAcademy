import '../styles/Hero.css'

const Hero = ({ parallax = false }) => {
  return (
    <section className={parallax ? 'hero-parallax' : 'hero'}>
      <div className={parallax ? 'parallax-overlay' : 'hero-overlay'}></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Continúa tu formación con IzyAcademy</h1>
          <p className="hero-subtitle">
            Te ofrecemos una experiencia de aprendizaje basada en la formación por proyectos,
            apoyada en el uso de recursos interactivos para que tu aprendizaje sea efectivo.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero