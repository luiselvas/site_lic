import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Search, ExternalLink, Code, Database, Brain } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('all');

    // Dummy Projects Data
    const projects = [
        {
            id: 1,
            title: "HealthConnect AI",
            student: "Ana Silva",
            category: "AI",
            description: "Sistema de triagem inteligente para urgências hospitalares usando NLP.",
            tags: ["Python", "TensorFlow", "React"]
        },
        {
            id: 2,
            title: "MediTrack App",
            student: "João Santos",
            category: "App",
            description: "Aplicação móvel para gestão de medicação e adesão terapêutica em idosos.",
            tags: ["React Native", "Firebase", "UX/UI"]
        },
        {
            id: 3,
            title: "Clinical Data Viz",
            student: "Mariana Costa",
            category: "Data",
            description: "Dashboard interativo para visualização de dados epidemiológicos em tempo real.",
            tags: ["D3.js", "SQL", "Data Science"]
        },
        {
            id: 4,
            title: "TeleRehab VR",
            student: "Pedro Oliveira",
            category: "App",
            description: "Plataforma de reabilitação física remota utilizando realidade virtual.",
            tags: ["Unity", "C#", "Health"]
        },
        {
            id: 5,
            title: "OncoPrediction",
            student: "Beatriz Nogueira",
            category: "AI",
            description: "Modelo preditivo para deteção precoce de cancro da mama através de imagem.",
            tags: ["Computer Vision", "PyTorch"]
        },
        {
            id: 6,
            title: "Hospital IoT",
            student: "Tiago Ferreira",
            category: "Data",
            description: "Rede de sensores para monitorização ambiental de blocos operatórios.",
            tags: ["IoT", "Arduino", "Cloud"]
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    const getIcon = (cat) => {
        switch (cat) {
            case 'AI': return <Brain size={20} />;
            case 'App': return <ExternalLink size={20} />; // Using generic external link as placeholder for app/mobile
            case 'Data': return <Database size={20} />;
            default: return <Code size={20} />;
        }
    };

    return (
        <div className="projects-page p-fade-in section">
            <div className="container">
                <div className="projects-header text-center">
                    <h1 className="section-title">{t.projects.title}</h1>

                    <div className="filter-container">
                        <button
                            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                            onClick={() => setFilter('all')}
                        >
                            {t.projects.filterAll}
                        </button>
                        <button
                            className={`filter-btn ${filter === 'AI' ? 'active' : ''}`}
                            onClick={() => setFilter('AI')}
                        >
                            {t.projects.filterAI}
                        </button>
                        <button
                            className={`filter-btn ${filter === 'App' ? 'active' : ''}`}
                            onClick={() => setFilter('App')}
                        >
                            {t.projects.filterApp}
                        </button>
                        <button
                            className={`filter-btn ${filter === 'Data' ? 'active' : ''}`}
                            onClick={() => setFilter('Data')}
                        >
                            {t.projects.filterData}
                        </button>
                    </div>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-placeholder">
                                {getIcon(project.category)}
                            </div>
                            <div className="project-content">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-student">by {project.student}</p>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
