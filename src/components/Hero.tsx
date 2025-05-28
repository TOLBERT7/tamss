import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const serviceSlides = [
  {
    id: 'btc1',
    title: 'Briques Ecologiques',
    description: 'TAMSE, le specialiste du  Geo Beton et de la maintenance immobiliere',
    image: '/btc2.jpg'
  },
  {
    id: 'btc2',
    title: 'Briques Ecologiques',
    description: 'solutions de construction ecologiques et durables',
    image: '/btc3.jpg'
  },
  {
    id: 'briques-eco',
    title: 'Briques éco',
    description: 'Solutions de construction écologiques et durables',
    image: '/btc4.jpg'
  },
  {
    id: 'btc3',
    title: 'Briques Ecologiques',
   
    description: 'TAMSE, le specialiste du  Geo Beton et de la maintenance immobiliere',
    image: '/btc5.jpg'
  },
  {
    id: 'btc4',
    title: 'Briques Ecologiques',

    description: 'Tout pour la construction sous un meme toit',
    image: '/briq.jpg'
  },
  {
    id: 'btc5',
    title: 'Gestion Immobilière',
    description: 'TAMSE, le specialiste du  Geo Beton et de la maintenance immobiliere',
    image: '/briques.jpg'
  },
  {
    id: 'btc6',
    title: 'Gestion Immobilière',
    description: 'TAMSE, le specialiste du  Geo Beton et de la maintenance immobiliere',
    image: '/btc6.jpg'
  },
  {
    id: 'btc7',
    title: 'Gestion Immobilière',
    description: 'TAMSE, le specialiste du  Geo Beton et de la maintenance immobiliere',
    image: '/btc7.jpg'
  },
  {
    id: 'btc8',
    title: 'Gestion Immobilière',
    description: 'TAMSE, le specialiste du  Geo Beton et de la maintenance immobiliere',
    image: '/btc8.jpg'
  },
   {
    id: 'btc9',
    title: 'Gestion Immobilière',
    description: 'TAMSE, le specialiste du  Geo Beton et de la maintenance immobiliere',
    image: '/btc9.jpg'
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
              Découvrir nos autres services
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