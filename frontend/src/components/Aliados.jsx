import '../styles/Aliados.css'

const Aliados = () => {
  const aliados = [
    { name: 'CertiProf', logo: '/src/assets/logos/certiprof.png' },
    { name: 'Arcitura', logo: '/src/assets/logos/arcitura.png' },
    { name: 'FormArte', logo: '/src/assets/logos/formarte.png' },
    { name: 'Credly', logo: '/src/assets/logos/credly.png' },
    { name: 'Digital School', logo: '/src/assets/logos/digitalschool.png' },
    { name: 'SCRUMstudy', logo: '/src/assets/logos/scrumstudy.png' },
    { name: 'Intersoftware', logo: '/src/assets/logos/intersoftware.png' },
    { name: 'Brightest', logo: '/src/assets/logos/brightest.png' },
    { name: 'SENA', logo: '/src/assets/logos/sena.png' },
  ]

  return (
    <section className="aliados">
      <div className="container">
        <h2 className="section-title">Aliados</h2>
        <p className="aliados-subtitle">
          Nuestros entrenamientos, procesos formativos y certificaciones cuentan con el 
          respaldo de empresas que confían en nosotros.
        </p>
        
        <div className="aliados-grid">
          {aliados.map((aliado, index) => (
            <div key={index} className="aliado-logo">
              <img src={aliado.logo} alt={aliado.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Aliados