const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Bienvenidos a IzyAcademy',
      description: 'Nos complace darte la bienvenida a este innovador espacio educativo donde la excelencia académica se encuentra con la comunidad y flexibilidad. Aquí, te encuentras en nuestro propio y robusto campus virtual está diseñado para ofrecerte una experiencia educativa incomparable desde la comodidad de tu hogar.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
      discount: '¡Aprovecha!, estás hasta un 30% de descuento en todos nuestros cursos y rutas de formación'
    },
    {
      id: 2,
      title: 'Generación de comunidad',
      description: 'Nos cumplaza generar vínculos sociales, entrar personas y compartir un intenso interés, intercambiar la sensación de un sentido de pertenencia y colaboración dentro de la comunidad.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600'
    },
    {
      id: 3,
      title: 'Certificaciones e Insignias',
      description: 'Brindamos la única certificación e insignias desde el objetivo de aplicar y aprovechar esta información para el desarrollo de las habilidades.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600'
    },
    {
      id: 4,
      title: 'Transferencia de conocimiento',
      description: 'Nos agasoma compartir información, habilidades y experiencias, con el objetivo de aplicar y aprovechar esta información para el desarrollo de las habilidades.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Novedades</h2>
        
        <div className="grid grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                {item.discount && (
                  <p className="text-sm text-primary font-semibold bg-blue-50 p-3 rounded">
                    {item.discount}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;