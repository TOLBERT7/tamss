import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
        <Services id="services" />
        
        {/* Individual Service Sections */}
        <ServiceDetail id="service-electricite" serviceId="electricite" />
        <ServiceDetail id="service-jardinage" serviceId="jardinage" />
        <ServiceDetail id="service-briques-eco" serviceId="briques-eco" />
        <ServiceDetail id="service-climatisation" serviceId="climatisation" />
        <ServiceDetail id="service-nettoyage" serviceId="nettoyage" />
        <ServiceDetail id="service-gestion-immobiliere" serviceId="gestion-immobiliere" />
        
        <About id="about" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;