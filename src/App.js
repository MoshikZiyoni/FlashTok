import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactModal from './components/ContactModal';
import Home from './pages/Home';
import FacebookMonitorPage from './pages/FacebookMonitorPage';
import './index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const openModal = (pkg = null) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onOpenModal={() => openModal()} />

        <Routes>
          <Route path="/" element={<Home onOpenModal={openModal} />} />
          <Route path="/fb-monitor" element={<FacebookMonitorPage onOpenModal={openModal} />} />
        </Routes>

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
    </Router>
  );
}

export default App;
