import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Hero from '../home/Hero';
import logo from '../../assets/logo_actualizado.webp';

const HeaderWithHero = ({ onLoginClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Cerrar dropdown y menú móvil al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Cerrar dropdown si se hace click fuera
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      
      // Cerrar menú móvil si se hace click fuera
      if (mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-30">
        {/* Header Navigation */}
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between text-white">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="IzyAcademy" className="h-10 w-auto"/>
          </Link>

          {/* Menú Desktop - oculto en móvil */}
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

          {/* Botones de usuario - Desktop */}
          <div className="hidden md:flex items-center gap-4">
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

          {/* Botón Hamburguesa - Móvil */}
          <button 
            className="md:hidden mobile-menu-button flex items-center p-2"
            onClick={toggleMobileMenu}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Menú Móvil - Desplegable */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="md:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-sm text-white shadow-lg z-40 animate-slideDown"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                <Link 
                  to="/" 
                  className="block py-3 border-b border-white/20 hover:bg-white/10 px-2 rounded transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Inicio
                </Link>
                
                <div className="py-3 border-b border-white/20">
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center justify-between w-full hover:bg-white/10 px-2 py-2 rounded transition"
                  >
                    <span>Rutas De Formación</span>
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
                    <div className="mt-2 ml-4 space-y-2">
                      <Link 
                        to="#" 
                        className="block py-2 hover:bg-white/10 px-2 rounded transition"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        Científico De Datos
                      </Link>
                      <Link 
                        to="/ruta-net" 
                        className="block py-2 hover:bg-white/10 px-2 rounded transition"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        Ruta de Formación En .NET
                      </Link>
                      <Link 
                        to="#" 
                        className="block py-2 hover:bg-white/10 px-2 rounded transition"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        Ruta de Formación en Automatización
                      </Link>
                    </div>
                  )}
                </div>

                <Link 
                  to="#" 
                  className="block py-3 border-b border-white/20 hover:bg-white/10 px-2 rounded transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Cursos
                </Link>
                
                <Link 
                  to="#" 
                  className="block py-3 border-b border-white/20 hover:bg-white/10 px-2 rounded transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Quiénes somos
                </Link>
                
                <div className="pt-4 space-y-3">
                  <button 
                    onClick={() => {
                      onLoginClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 py-3 px-4 rounded-lg font-semibold transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Inicio de Sesión
                  </button>
                  
                  <button className="w-full flex items-center justify-center gap-2 hover:bg-white/10 py-3 px-4 rounded-lg transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Buscar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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