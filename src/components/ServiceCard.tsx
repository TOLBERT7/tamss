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
        behavior: 'smooth'
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
      <div 
        className="h-48 bg-cover bg-center transition-transform duration-700"
        style={{ 
          backgroundImage: `url(${service.image})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-500 mr-3">
            <span dangerouslySetInnerHTML={{ __html: service.icon }} />
          </div>
          <h3 className="text-xl font-semibold">{service.title}</h3>
        </div>
        <p className="text-gray-600 mb-4">
          {service.description}
        </p>
        <button 
          onClick={() => scrollToServiceSection(service.id)}
          className="text-green-500 font-medium flex items-center gap-1 hover:gap-2 transition-all"
        >
          En savoir plus <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;