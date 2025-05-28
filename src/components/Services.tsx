import { SectionProps } from '../types';
import { ArrowRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { services } from '../data/services';

const Services = ({ id }: SectionProps) => {
  return (
    <section id={id} className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nos Services</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          TAMSE vous propose une gamme complète de services pour répondre à tous vos besoins.
          Nos experts qualifiés garantissent un travail de qualité pour chaque intervention.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-24">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-4">
            Besoin d'un service spécifique ? Contactez-nous pour en discuter.
          </p>
          <a 
            href="#contact" 
            className="btn-primary inline-flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                window.scrollTo({
                  top: contactSection.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Nous contacter <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;