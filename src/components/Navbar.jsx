import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';
import './Navbar.css';
import logoPt from '../assets/logo-pt-black.png';
import logoEn from '../assets/logo-en-black.png';

const Navbar = () => {
    const { t, language, toggleLanguage } = useLanguage();
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <img
                        src={language === 'pt' ? logoPt : logoEn}
                        alt="Iscte - Digital Tech & Health"
                        className="logo-image"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="navbar-links desktop-only">
                    <Link to="/" className={`nav-link ${isActive('/')}`}>{t.nav.home}</Link>
                    <Link to="/projects" className={`nav-link ${isActive('/projects')}`}>{t.nav.projects}</Link>
                    <Link to="/meet-us" className={`nav-link ${isActive('/meet-us')}`}>{t.nav.meetUs}</Link>
                    <Link to="/community" className={`nav-link ${isActive('/community')}`}>{t.community?.title || "Community"}</Link>
                    <button className="lang-toggle" onClick={toggleLanguage}>
                        <Globe size={18} />
                        <span>{language.toUpperCase()}</span>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu">
                    <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>{t.nav.home}</Link>
                    <Link to="/projects" className="mobile-link" onClick={() => setIsOpen(false)}>{t.nav.projects}</Link>
                    <Link to="/meet-us" className="mobile-link" onClick={() => setIsOpen(false)}>{t.nav.meetUs}</Link>
                    <Link to="/community" className="mobile-link" onClick={() => setIsOpen(false)}>{t.community?.title || "Community"}</Link>
                    <button className="mobile-lang-toggle" onClick={() => { toggleLanguage(); setIsOpen(false); }}>
                        <Globe size={18} />
                        <span>{language === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}</span>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
