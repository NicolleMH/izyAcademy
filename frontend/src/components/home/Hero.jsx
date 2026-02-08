const Hero = ({ 
  title, 
  subtitle, 
  backgroundImage,
  parallax = false,
  opacity = 0.3,
  overlayOpacity = 0.8,
  children,
  minHeight = 'min-h-[400px]'
}) => {
  return (
    <div className={`relative bg-primary text-white overflow-hidden ${minHeight}`}>
      {/* Fondo con imagen */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: parallax ? 'fixed' : 'scroll',
            opacity: opacity
          }}
        />
      )}
      
      {/* Overlay oscuro */}
      <div 
        className="absolute inset-0 bg-primary" 
        style={{ opacity: overlayOpacity }} 
      />

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        {title && (
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center">
            {title}
          </h1>
        )}
        
        {subtitle && (
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto text-center">
            {subtitle}
          </p>
        )}

        {/* Contenido adicional personalizado */}
        {children}
      </div>
    </div>
  );
};

export default Hero;