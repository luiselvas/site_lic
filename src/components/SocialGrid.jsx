import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Linkedin, Instagram, ArrowRight } from 'lucide-react';
import './SocialGrid.css';

const TikTokIcon = ({ size = 24, color = "currentColor" }) => (
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

const SocialGrid = () => {
    const { t } = useLanguage();

    return (
        <div className="social-cards-grid">
            {/* Instagram Card */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-card instagram-card">
                <div className="social-icon-wrapper">
                    <Instagram size={48} />
                </div>
                <h3 className="social-card-title">Instagram</h3>
                <p className="social-card-cta">{t.community.instagram} <ArrowRight size={16} /></p>
            </a>

            {/* LinkedIn Card */}
            <a href="https://www.linkedin.com/school/iscte/" target="_blank" rel="noopener noreferrer" className="social-card linkedin-card">
                <div className="social-icon-wrapper">
                    <Linkedin size={48} />
                </div>
                <h3 className="social-card-title">LinkedIn</h3>
                <p className="social-card-cta">{t.community.linkedin} <ArrowRight size={16} /></p>
            </a>

            {/* TikTok Card */}
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-card tiktok-card">
                <div className="social-icon-wrapper">
                    <TikTokIcon size={48} />
                </div>
                <h3 className="social-card-title">TikTok</h3>
                <p className="social-card-cta">{t.community.tiktok} <ArrowRight size={16} /></p>
            </a>
        </div>
    );
};

export default SocialGrid;
