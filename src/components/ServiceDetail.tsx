import { useEffect, useRef } from 'react';
import { SectionProps } from '../types';
import { services } from '../data/services';

interface ServiceDetailProps extends SectionProps {
  serviceId: string;
}

const ServiceDetail = ({ id, serviceId }: ServiceDetailProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const service = services.find((s) => s.id === serviceId);

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
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-6">
            
            {/* Image à gauche dans un bloc élevé */}
            <div className="relative group h-80 md:h-96 overflow-hidden rounded-2xl shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-2xl" />
              <div className="absolute inset-0 bg-green-300/05 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-2xl" />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent rounded-b-2xl">
                <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Description à droite sans puces, police Poppins */}
            <div className="font-poppins text-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-500 mr-3 shadow-md">
                  <span dangerouslySetInnerHTML={{ __html: service.icon }} />
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight">
                  {service.title}
                </h3>
              </div>
              <div
                className="prose prose-lg max-w-none [&_ul]:list-none [&_ul]:ml-0"
                dangerouslySetInnerHTML={{ __html: service.detailedDescription }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
