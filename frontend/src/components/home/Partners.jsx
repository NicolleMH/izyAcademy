import { useState, useEffect } from 'react';

const Partners = () => {
  const [hoveredLogo, setHoveredLogo] = useState(null);

  // Lista de logos de aliados (usando placeholders por ahora)
  const partners = [
    { id: 1, name: 'CertiProf', logo: 'https://via.placeholder.com/150x60?text=CertiProf' },
    { id: 2, name: 'Arcitura', logo: 'https://via.placeholder.com/150x60?text=Arcitura' },
    { id: 3, name: 'FORMARTE', logo: 'https://via.placeholder.com/150x60?text=FORMARTE' },
    { id: 4, name: 'Credly', logo: 'https://via.placeholder.com/150x60?text=Credly' },
    { id: 5, name: 'Digital School', logo: 'https://via.placeholder.com/150x60?text=Digital+School' },
    { id: 6, name: 'SCRUMstudy', logo: 'https://via.placeholder.com/150x60?text=SCRUMstudy' },
    { id: 7, name: 'Intersoftware', logo: 'https://via.placeholder.com/150x60?text=Intersoftware' },
    { id: 8, name: 'Brightest', logo: 'https://via.placeholder.com/150x60?text=Brightest' },
    { id: 9, name: 'SENA', logo: 'https://via.placeholder.com/150x60?text=SENA' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Aliados</h2>
        
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Nuestros entrenamientos, procesos formativos y certificaciones cuentan con el respaldo de empresas que confían en nosotros.
        </p>
        
        {/* Grid responsivo para logos */}
        <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="transition-transform duration-300 hover:scale-110"
              onMouseEnter={() => setHoveredLogo(partner.id)}
              onMouseLeave={() => setHoveredLogo(null)}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full h-auto grayscale hover:grayscale-0 transition-all"
                style={{
                  opacity: hoveredLogo === null || hoveredLogo === partner.id ? 1 : 0.5
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;