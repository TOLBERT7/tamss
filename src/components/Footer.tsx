import { Facebook, Instagram, Twitter, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="TAMSE Logo" className="h-10 mr-2" />
              <h3 className="text-xl font-bold">TAMSE</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Triple A Multiservices - Votre partenaire de confiance pour tous vos projets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Liens Rapides
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">À Propos</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Nos Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#service-electricite" className="text-gray-400 hover:text-white transition-colors">Électricité</a>
              </li>
              <li>
                <a href="#service-jardinage" className="text-gray-400 hover:text-white transition-colors">Jardinage</a>
              </li>
              <li>
                <a href="#service-briques-eco" className="text-gray-400 hover:text-white transition-colors">Briques éco</a>
              </li>
              <li>
                <a href="#service-climatisation" className="text-gray-400 hover:text-white transition-colors">Climatisation</a>
              </li>
              <li>
                <a href="#service-nettoyage" className="text-gray-400 hover:text-white transition-colors">Nettoyage</a>
              </li>
              <li>
                <a href="#service-gestion-immobiliere" className="text-gray-400 hover:text-white transition-colors">Gestion immobilière</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none w-full"
              />
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-md transition-colors">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} TAMSE - Triple A Multiservices. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;