const CourseCards = () => {
  const courses = [
    {
      id: 1,
      title: 'Aplicaciones Web',
      description: 'Aprende a construir',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400'
    },
    {
      id: 2,
      title: 'Web API',
      description: 'Desarrollo de APIs',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400'
    },
    {
      id: 3,
      title: 'Aplicaciones Seguras',
      description: 'Seguridad en aplicaciones',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Aprende a construir</h2>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCards;