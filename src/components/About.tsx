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
                 MOT DU DIRECTEUR
              </p>
              
              <h3 className="text-2xl font-semibold mb-4">Message du Directeur</h3>
              <blockquote className="italic text-gray-600 border-l-4 border-green-500 pl-4 mb-6">
   

Apres 10 années Passées à Swissair et 15 autres à British Airways, à Londres, je me suis reconverti à
la construction et l’Immobilier.
Pourquoi ?
D’abord parce que c’est ne d’une frustration personnelle, caractérisée par un manque de personnel
qualifie dans le domaine, une négligence notoire des principes de base de la construction et de sa
finition sans compter les projets laisses à l’abandon au grand dam du client qui, soit n’est pas sur
place ou est trop occupe pour suivre son investissement.
Tamse a été donc crée pour parer à cette injustice faite aux clients qui ont travaille dur pour essayer
de réaliser quelque chose pour leurs vieux jours ou laisser un bien à leur descendance j ‘ai une
pensée particulière pour nos braves compatriotes de la Disapora.Je suis un des vôtres, qui a subit la
même frustration et donc vous comprend très bien.
Fort de mes qualités et ma rigueur acquise en Europe en travaillant pour des compagnies qui ont des
standards reconnus internationalement, je me positionne comme votre partenaire de choix qui
entend appliquer ces mêmes principes dans le nouveau domaine que j’ai maintenant choisi.
C’est pourquoi nous avons tenu à obtenir la certification ISO9001 en 2022 pour l’exécution et le suivi
de nos prestations de services pour toute activités liées au Bâtiment
Tamse est donc né en 2020 et a décidé de mettre le client et ses projets au centre de tout ce qu’on
fait.
Vous pouvez compter sur un partenaire sur qui vous comprendra.
De la conception des plans 2D,3D taillée à votre mesure, jusqu’ aux finitions, nous vous
accompagnons avec notre équipe professionnelle afin de rester dans votre temps et Budget.
En fait, il n’y a plus besoin de chercher, un plombier, ou électricien, un décorateur intérieur ou
jardinier…puisque nous vous proposons tout sous un même toit. Simple et complet.
En 2025, Tamse a décidé de suivre l’évolution de nos réalités climatiques changeantes dans le
monde, et particulièrement en Afrique et s’est donc formée et équipée de machines spécialisée pour
la fabrication de Briques à terre compressée. (BTC).
Nous retournons à notre mère-nature la Terre pour vous faire des réalisations modernes, 20 à 30%
moins chères que les constructions polluantes traditionnelles et parfaitement adaptées au
réchauffement global de notre planète.
Oui ! on peut faire maintenant de belles bâtisses modernes,
durables,economiques,isothermiques…avec de la terre, comme l’avaient compris nos ancêtres dont
les réalisations sont encore là pour témoigner de leur résistance aux siècles et ,intempéries mais
seulement avec des équipes et équipements spécialisés dont nous avons le secret.
Pourquoi ne pas consulter notre site web : www.Tamse.pro pour plus de détails.
A très Bientôt.


              </blockquote>
              
              <p className="text-gray-700">
            André AKA ADOU
Directeur-Tamse Construction &amp; Immobilier
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;