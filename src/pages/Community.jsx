import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SocialGrid from '../components/SocialGrid';
import './Community.css';

const Community = () => {
    const { t } = useLanguage();

    return (
        <div className="community-page section p-fade-in">
            <div className="container">
                <div className="community-header text-center">
                    <h1 className="section-title">{t.community.title}</h1>
                    <p className="section-text">{t.community.subtitle}</p>
                </div>

                <SocialGrid />
            </div>
        </div>
    );
};

export default Community;
