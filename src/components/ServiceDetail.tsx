import { useEffect, useRef } from 'react';
import { SectionProps } from '../types';
import { services } from '../data/services';

interface ServiceDetailProps extends SectionProps {
  serviceId: string;
}

const ServiceDetail = ({ id, serviceId }: ServiceDetailProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const service = services.find(s => s.id === serviceId);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  if (!service) return null;

  return (
    <section id={id} className="section py-16" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-lg h-80 md:h-96">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20" />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-3xl font-bold text-white">{service.title}</h3>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-500 mr-3">
                <span dangerouslySetInnerHTML={{ __html: service.icon }} />
              </div>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
            </div>
            
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: service.detailedDescription }} />
            
            <button className="mt-6 btn-primary">
              Demander un devis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;