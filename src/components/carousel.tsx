import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const items = [
  {
    title: "Impact Économique",
    text: "Réduction du coût du logement et création d’emplois grâce à l’utilisation de matériaux locaux comme le BTC.",
    details: [
      "Diminution des frais de transport des matériaux.",
      "Valorisation des ressources locales.",
      "Support à l’économie communautaire."
    ]
  },
  {
    title: "Impact Environnemental",
    text: "Diminution des émissions de CO₂ et réduction de la pollution grâce à des matériaux naturels et durables.",
    details: [
      "Matériaux biodégradables et recyclables.",
      "Pas de cuisson à haute température, limitant la consommation d’énergie.",
      "Réduction de l’empreinte carbone comparée aux briques traditionnelles."
    ]
  },
  {
    title: "Impact Social",
    text: "Accès à des logements décents, formation des populations aux techniques de construction durables.",
    details: [
      "Amélioration de la qualité de vie en zone rurale.",
      "Création de formations et ateliers pour artisans locaux.",
      "Renforcement de la cohésion sociale autour de projets écoresponsables."
    ]
  },
  {
    title: "Notre Solution",
    text: "La BTC est un matériau naturel, local, économique et écologique offrant une isolation thermique exceptionnelle.",
    details: [
      "Résistance à l’humidité et longévité accrue.",
      "Isolation thermique et acoustique optimale.",
      "Facilité de mise en œuvre et coût maîtrisé."
    ]
  }
];

export default function EcoBrickCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section className="relative w-full max-w-4xl mx-auto py-16 px-6 bg-green-50 rounded-3xl shadow-2xl mt-12 min-h-[650px]">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-8 text-black"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        POURQUOI CHOISIR LES BRIQUES ÉCOLOGIQUES
      </motion.h2>

      <div className="relative mb-8">        
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="text-center px-4 md:px-8"
          >
            <h3 className="text-3xl md:text-4xl font-semibold text-black">
              {items[index].title}
            </h3>
            <p className="mt-6 text-black text-xl md:text-2xl">
              {items[index].text}
            </p>
            <ul className="mt-6 text-left text-black list-disc list-inside space-y-2 mx-auto max-w-xl text-lg md:text-xl">
              {items[index].details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons repositioned */}
      <div className="flex justify-center space-x-6">
        <button
          onClick={prev}
          className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={next}
          className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
}
