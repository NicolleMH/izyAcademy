import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Hero from '../home/Hero';
import logo from '../../assets/logo_actualizado.webp';

const HeaderWithHero = ({ onLoginClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-20">
        {/* Header Navigation */}
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between text-white">
          <Link to="/" className="flex items-center">
                <img src={logo} alt="IzyAcademy" className="h-10 w-auto"/>
                 </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-gray-200 transition">
              Inicio
            </Link>
            
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleDropdown}
                className="hover:text-gray-200 transition flex items-center gap-1"
              >
                Rutas De Formación
                <svg 
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg py-2 min-w-[200px] z-50">
                  <Link 
                    to="#" 
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Científico De Datos
                  </Link>
                  <Link 
                    to="/ruta-net" 
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Ruta de Formación En .NET
                  </Link>
                  <Link 
                    to="#" 
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Ruta de Formación en Automatización
                  </Link>
                </div>
              )}
            </div>

            <Link to="#" className="hover:text-gray-200 transition">
              Cursos
            </Link>
            
            <Link to="#" className="hover:text-gray-200 transition">
              Quiénes somos
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onLoginClick}
              className="flex items-center gap-2 hover:text-gray-200 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Inicio de Sesión
            </button>
            
            <button className="hover:text-gray-200 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Hero Section usando el componente reutilizable */}
      <Hero
        title="Continúa tu formación con IzyAcademy"
        subtitle="Te ofrecemos una experiencia de aprendizaje basada en la formación por proyectos, apoyada en el uso de recursos interactivos para que tu aprendizaje sea efectivo."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600"
        parallax={true}
        opacity={0.3}
        overlayOpacity={0.8}
      />
    </div>
  );
};

export default HeaderWithHero;