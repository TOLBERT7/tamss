import { SectionProps } from '../types';
import { useEffect, useRef } from 'react';

const About = ({ id }: SectionProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === textRef.current) {
              entry.target.classList.add('animate-slide-left', 'opacity-100');
            } else if (entry.target === imageRef.current) {
              entry.target.classList.add('animate-slide-right', 'opacity-100');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
  
    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
  
    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);
  

  return (
    <section id={id} className="section bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">À Propos de Nous</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Director Image */}
          <div 
            className="opacity-0" 
            ref={imageRef}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-green-500" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-green-500" />
              <div className="relative z-10 shadow-xl overflow-hidden rounded-lg">
                <img 
                  src="/aka.jpg" 
                  alt="Director" 
                  className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          {/* About Text */}
          <div className="opacity-0" ref={textRef}>
            <div className="p-6 bg-gray-50 rounded-lg shadow-custom relative">
              <div className="absolute top-0 left-0 w-16 h-1 bg-green-500"></div>
              <h3 className="text-2xl font-semibold mb-4">Notre Mission</h3>
              <p className="text-gray-700 mb-6">
                Chez TAMSE, nous sommes dédiés à fournir des services de haute qualité dans tous les domaines que nous couvrons.
                Notre équipe d'experts qualifiés s'engage à offrir des solutions personnalisées, innovantes et écologiquement responsables.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4">Message du Directeur</h3>
              <blockquote className="italic text-gray-600 border-l-4 border-green-500 pl-4 mb-6">
                "Depuis notre création, nous avons toujours mis l'accent sur la qualité, le professionnalisme et la satisfaction client.
                Notre objectif est de devenir le partenaire de confiance pour tous vos projets, qu'ils soient petits ou grands.
                Chez TAMSE, nous ne nous contentons pas de fournir des services, nous construisons des relations durables."
              </blockquote>
              
              <p className="text-gray-700">
                Avec des années d'expérience dans le secteur, nous avons développé une expertise unique qui nous permet de répondre efficacement
                à tous vos besoins. Notre approche personnalisée garantit que chaque client reçoit une attention particulière et des solutions
                adaptées à ses exigences spécifiques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;