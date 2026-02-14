import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, CheckCircle, Zap, Quote } from 'lucide-react';
import SocialGrid from '../components/SocialGrid';
import './Home.css';

const Home = () => {
    const { t } = useLanguage();

    return (
        <div className="home p-fade-in">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">{t.hero.title}</h1>
                        <p className="hero-subtitle">{t.hero.subtitle}</p>
                        <div className="hero-actions">
                            <a href="https://www.iscte-iul.pt/cursos/candidaturas" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                {t.hero.cta} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                            </a>
                            <a href="#urgency" className="btn btn-outline">
                                {t.hero.secondaryCta}
                            </a>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-image-container">
                            <img src="/src/assets/hero-bg.png" alt="Digital Health Students" className="hero-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Director's Message Section */}
            <section className="section director-section">
                <div className="container director-container">

                    <div className="director-header">
                        <div className="director-image-wrapper">
                            <div className="director-image-card">
                                <img src="/director.jpeg" alt={t.director.name} className="director-image" />
                            </div>
                        </div>
                        <div className="director-info-card">
                            <h3 className="director-name">{t.director.name}</h3>
                            <p className="director-role">{t.director.role}</p>
                        </div>
                    </div>

                    <div className="director-content">
                        <div className="director-title-wrapper">
                            <Quote size={32} className="director-quote-icon" />
                            <h2 className="section-title director-title">{t.director.title}</h2>
                        </div>
                        <div className="director-text">
                            {t.director.text.map((paragraph, index) => (
                                <p key={index} className="director-paragraph">{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Urgency Section */}
            <section id="urgency" className="section urgency-section">
                <div className="container">
                    <h2 className="section-title">{t.urgency.title}</h2>
                    <p className="section-text">{t.urgency.text}</p>
                </div>
            </section>

            {/* USP Section */}
            <section className="section usp-section">
                <div className="container">
                    <h2 className="section-title">{t.usp.title}</h2>
                    <div className="usp-grid">
                        {t.usp.points.map((point, index) => (
                            <div key={index} className="usp-card">
                                <div className="usp-icon">
                                    <CheckCircle size={32} color="var(--color-secondary)" />
                                </div>
                                <h3 className="usp-title">{point.title}</h3>
                                <p className="usp-desc">{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="section community-section">
                <div className="container text-center">
                    <h2 className="section-title">{t.social.joinCommunity}</h2>
                    <p className="section-text" style={{ marginBottom: '3rem' }}>{t.social.communityText}</p>
                    <SocialGrid />
                </div>
            </section>
        </div>
    );
};

export default Home;
