import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Calculate active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="TAMSE Logo" 
              className="h-12 mr-2" 
            />
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              TAMSE
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''} ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Accueil
            </a>
            <div className="relative group">
              <button 
                className={`flex items-center nav-link ${activeSection === 'services' ? 'active' : ''} ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              <div 
                className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ${
                  servicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <div className="py-1">
                  <a 
                    href="#service-electricite" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('service-electricite');
                      setServicesDropdownOpen(false);
                    }}
                  >
                    Électricité
                  </a>
                  <a 
                    href="#service-jardinage" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('service-jardinage');
                      setServicesDropdownOpen(false);
                    }}
                  >
                    Jardinage
                  </a>
                  <a 
                    href="#service-briques-eco" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('service-briques-eco');
                      setServicesDropdownOpen(false);
                    }}
                  >
                    Briques éco
                    
                  </a>
                  <a 
                    href="#service-climatisation" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('service-climatisation');
                      setServicesDropdownOpen(false);
                    }}
                  >
                    Froid
                  </a>
                  <a 
                    href="#service-nettoyage" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('service-nettoyage');
                      setServicesDropdownOpen(false);
                    }}
                  >
                    Nettoyage
                  </a>
                   <a 
                    href="#service-plomberie" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('service-plomberie');
                      setServicesDropdownOpen(false);
                    }}
                  >
                    Plomberie
                  </a>
                   <a 
                    href="#service-decoration" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('service-decoration');
                      setServicesDropdownOpen(false);
                    }}
                  >
                    Décoration d'interieur
                  </a>
                  
                  <a 
                    href="#service-gestion-immobiliere" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('service-gestion-immobiliere');
                      setServicesDropdownOpen(false);
                    }}
                  >
                    Gestion immobilière
                  </a>
                </div>
              </div>
            </div>
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''} ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              À propos
            </a>
            <a 
              href="#contact" 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''} ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Nous contacter
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className={`text-${isScrolled ? 'gray-700' : 'white'} focus:outline-none`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 bg-white rounded-lg shadow-lg animate-fade-in">
            <a 
              href="#home" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Accueil
            </a>
            <div>
              <button 
                className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleServicesDropdown}
              >
                Services <ChevronDown size={16} className={`transition-transform ${servicesDropdownOpen ? 'transform rotate-180' : ''}`} />
              </button>
              {servicesDropdownOpen && (
                <div className="pl-8 bg-gray-50">
                   <a 
                    href="#service-briques-eco" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('service-briques-eco');
                    }}
                  >
                    Briques éco
                  </a>
                  <a 
                    href="#service-gestion-immobiliere" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('service-gestion-immobiliere');
                    }}
                  >
                    Gestion immobilière
                  </a>
                  <a 
                    href="#service-electricite" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('service-electricite');
                    }}
                  >
                    Électricité
                  </a>
                   <a 
                    href="#service-climatisation" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('service-climatisation');
                    }}
                  >
                    Froid
                  </a>
                  <a 
                    href="#service-plomberie" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('service-plomberie');
                      setServicesDropdownOpen(false);
                    }}
                  >
                    Plomberie
                  </a>
                   <a 
                    href="#service-decoration" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('service-decoration');
                      setServicesDropdownOpen(false);
                    }}
                  >
                    Décoration d'interieur
                  </a>
                  <a 
                    href="#service-jardinage" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('service-jardinage');
                    }}
                  >
                    Jardinage
                  </a>
                
                 
                  <a 
                    href="#service-nettoyage" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('service-nettoyage');
                    }}
                  >
                    Nettoyage
                  </a>
                  
                </div>
              )}
            </div>
            <a 
              href="#about" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              À propos
            </a>
            <a 
              href="#contact" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Nous contacter
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;