import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EcoBrickCarousel from './components/carousel';

function App() {
  useEffect(() => {
    // Update title
    document.title = 'TAMSE';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <EcoBrickCarousel />

        <Services id="services" />
        
        {/* Individual Service Sections */}
        <ServiceDetail id="service-briques-eco" serviceId="briques-eco" />
        <ServiceDetail id="service-gestion-immobiliere" serviceId="gestion-immobiliere" />
        <ServiceDetail id="service-electricite" serviceId="electricite" />
        <ServiceDetail id="service-climatisation" serviceId="climatisation" />
        <ServiceDetail id="service-plomberie" serviceId="plomberie" />
        <ServiceDetail id="service-decoration" serviceId='decoration'></ServiceDetail>
        <ServiceDetail id="service-jardinage" serviceId="jardinage" />
        <ServiceDetail id="service-nettoyage" serviceId="nettoyage" />
        
        <About id="about" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;