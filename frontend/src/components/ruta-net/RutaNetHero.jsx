import Hero from '../home/Hero';

const RutaNetHero = () => {
  const learningPaths = [
    {
      id: 1,
      title: 'Aplicaciones Web',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400'
    },
    {
      id: 2,
      title: 'Web API',
      icon: '🔌',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400'
    },
    {
      id: 3,
      title: 'Aplicaciones Seguras',
      icon: '🔒',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400'
    }
  ];

  return (
    <Hero
      title="Continúa tu formación con IzyAcademy"
      subtitle="Te ofrecemos una experiencia de aprendizaje basada en la formación por proyectos, apoyada en el uso de recursos interactivos para que tu aprendizaje sea efectivo."
      backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600"
      parallax={true}
      opacity={0.6}
      overlayOpacity={0.6}
      minHeight="min-h-[700px]"
    >
      {/* Sección "Aprende a construir" */}
      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-8">
          Aprende a construir
        </h2>
        
        {/* Grid de tarjetas de aprendizaje */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {learningPaths.map((path) => (
            <div 
              key={path.id}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center">
                <span className="text-4xl">{path.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-primary">
                {path.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Sección CTA - Call to Action */}
        <div className="relative max-w-4xl mx-auto">
          <div 
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90" />
            
            {/* Contenido */}
            <div className="relative z-10 px-8 py-16 text-center">
              <p className="text-sm md:text-base text-blue-200 mb-4 tracking-wide">
                Diseño, eficiencia de desarrollo del servidor, conexión del cliente con el servidor, seguridad,
                <br className="hidden md:block" />
                arquitectura del software, escalabilidad web, gestión de proyecto (Scrum)
              </p>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                COMIENZA TU VIAJE PARA CONVERTIRTE EN
                <br />
                <span className="text-blue-300">DESARROLLADOR</span>
              </h3>
              
              {/* Elementos decorativos de tecnología */}
              <div className="flex justify-center items-center gap-4 text-white/60 text-xs">
                <span>&lt;/&gt;</span>
                <span>&#123; &#125;</span>
                <span>[ ]</span>
                <span>( )</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Hero>
  );
};

export default RutaNetHero;