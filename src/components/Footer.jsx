import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Linkedin, Mail, MapPin, Instagram } from 'lucide-react';
import './Footer.css';

// Simple TikTok icon component since lucide-react might not have it in older versions or use a surrogate
const TikTokIcon = ({ size = 16, color = "currentColor" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const Footer = () => {
    const { t, language } = useLanguage();

    return (
        <footer className="footer section">
            <div className="container footer-container">
                {/* About Column */}
                <div className="footer-col">
                    <h4 className="footer-subtitle">Iscte - Sintra</h4>
                    <p className="footer-text">
                        Escola de Tecnologias Digitais Aplicadas
                    </p>
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Av.+Heliodoro+Salgado+3,+2710-569+Sintra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-contact"
                        style={{ textDecoration: 'none', cursor: 'pointer' }}
                    >
                        <MapPin size={16} />
                        <span>Av. Heliodoro Salgado 3, 2710-569 Sintra</span>
                    </a>
                </div>

                <div className="footer-col">
                    <h4 className="footer-subtitle">{t.social.followUs}</h4>
                    <div className="social-links">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Instagram size={20} />
                        </a>
                        <a href="https://www.linkedin.com/school/iscte/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <TikTokIcon size={20} />
                        </a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4 className="footer-subtitle">{t.nav.contact}</h4>
                    <a href="mailto:info@iscte-iul.pt" className="footer-link">
                        <Mail size={16} /> info@iscte-iul.pt
                    </a>
                </div>

                <div className="footer-col">
                    <h4 className="footer-subtitle">{t.footer.linksTitle}</h4>
                    <a href="https://www.iscte-iul.pt" target="_blank" rel="noopener noreferrer" className="footer-link">Iscte-iul.pt</a>
                    <a href="https://www.iscte-iul.pt/cursos/curso/0392" target="_blank" rel="noopener noreferrer" className="footer-link">{t.footer.coursePage}</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>{t.footer.rights}</p>
            </div>
        </footer>
    );
};

export default Footer;
