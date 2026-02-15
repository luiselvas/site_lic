import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import MeetUs from './pages/MeetUs';
import Community from './pages/Community';
import './index.css';

import ScrollToTop from './components/ScrollToTop';

function App() {
  // Use basename only on GitHub Pages
  const basename = import.meta.env.PROD && !window.location.host.includes('vercel') ? '/site_lic' : '';

  return (
    <LanguageProvider>
      <Router basename={basename}>
        <ScrollToTop />
        <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/meet-us" element={<MeetUs />} />
              <Route path="/community" element={<Community />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
