import React, { useState } from 'react';
import Hero from './components/Hero';
import GraphSection from './components/GraphSection';
import InfoSection from './components/InfoSection';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import ContactModal from './components/ContactModal';
import './index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const openModal = (pkg = null) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <Hero onOpenModal={() => openModal()} />
      <GraphSection />
      <InfoSection />
      <HowItWorks />
      <Testimonials />
      <Pricing onOpenModal={openModal} />
      <FAQ />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPackage}
      />

      <footer style={{
        textAlign: 'center',
        padding: '40px',
        backgroundColor: 'var(--dark-bg)',
        color: 'var(--text-secondary)',
        borderTop: '1px solid #111',
        fontSize: '0.9rem'
      }}>
        <p>© 2025 RankUp (רנק-אפ). כל הזכויות שמורות.</p>
        <p style={{ marginTop: '10px', opacity: 0.6 }}>
          פתרונות קידום אורגני אוטומטיים
        </p>
      </footer>
    </div>
  );
}

export default App;
