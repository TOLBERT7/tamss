import { Service } from '../types';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getAnimationDelay = () => {
    return `${index * 0.1}s`;
  };

  const scrollToServiceSection = (serviceId: string) => {
    const section = document.getElementById(`service-${serviceId}`);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className="service-card animate-slide-up"
      style={{ animationDelay: getAnimationDelay() }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cadre extérieur artistique avec double bordure et ombre colorée */}
      <div className="rounded-3xl bg-gradient-to-tr from-green-200 to-blue-200 p-[2px] hover:shadow-lg hover:shadow-green-200/40 transition-shadow duration-500">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105">
          {/* Partie image stylisée */}
          <div className="relative group h-48">
            {/* Cadre interne penché */}
            <div className="absolute inset-0 rounded-[1.75rem] border-4 border-white shadow-inner shadow-green-300/30 transform -rotate-3 scale-105 group-hover:rotate-0 group-hover:scale-100 transition-all duration-700 ease-out"></div>
            {/* Image de fond */}
            <div
              className={`relative h-full bg-cover bg-center transition-transform duration-700 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
              style={{ backgroundImage: `url(${service.image})` }}
            >
              {/* Halo artistique derrière l’image */}
              <div className="absolute inset-0 bg-green-300/10 blur-xl rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Overlay dégradé subtil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
            </div>
          </div>

          {/* Contenu texte */}
          <div className="p-6 bg-gradient-to-br from-white/80 to-green-50 backdrop-blur-md rounded-b-3xl">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4 shadow-md">
                <span dangerouslySetInnerHTML={{ __html: service.icon }} />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-800 tracking-tight">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-700 mb-6 font-poppins text-lg leading-relaxed">
              {service.description}
            </p>
            <button
              onClick={() => scrollToServiceSection(service.id)}
              className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full font-medium text-green-600 border-2 border-green-600 overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10">En savoir plus</span>
              <ArrowRight size={16} className="relative z-10" />
              <span className="absolute inset-0 bg-green-600/10 hover:bg-green-600/20 rounded-full transition-colors duration-300"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
