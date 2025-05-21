import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const serviceSlides = [
  {
    id: 'electricite',
    title: 'Électricité',
    description: 'Installations et réparations électriques professionnelles',
    image: 'https://images.pexels.com/photos/8005368/pexels-photo-8005368.jpeg'
  },
  {
    id: 'jardinage',
    title: 'Jardinage',
    description: 'Entretien et création d\'espaces verts',
    image: '/jardinage.jpg'
  },
  {
    id: 'briques-eco',
    title: 'Briques éco',
    description: 'Solutions de construction écologiques et durables',
    image: '/briques.jpg'
  },
  {
    id: 'climatisation',
    title: 'Climatisation',
    description: 'Installation et entretien de systèmes de climatisation',
    image: 'https://images.pexels.com/photos/3637739/pexels-photo-3637739.jpeg'
  },
  {
    id: 'nettoyage',
    title: 'Nettoyage',
    description: 'Services de nettoyage professionnel pour particuliers et entreprises',
    image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg'
  },
  {
    id: 'gestion-immobiliere',
    title: 'Gestion Immobilière',
    description: 'Gestion complète de vos biens immobiliers',
    image: '/immobilier.jpg'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === serviceSlides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {serviceSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">
            TAMSE - Triple A Multiservices
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {serviceSlides[currentSlide].description}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToServices}
              className="btn-primary flex items-center justify-center gap-2 group"
            >
              Découvrir nos services
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
          {serviceSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-green-500 w-10' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;