import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, User } from 'lucide-react';
import './MeetUs.css';
import classPhoto from '../assets/class-photo.png';

const MeetUs = () => {
    const { t } = useLanguage();
    const [year, setYear] = useState(1);

    // Dummy Student Data
    const students = [
        { id: 1, name: "Maria Ferreira", year: 1, bio: "Interested in BioInformatics and AI." },
        { id: 2, name: "Carlos Gomes", year: 1, bio: "Aspiring Health Data Analyst." },
        { id: 3, name: "Inês Martins", year: 1, bio: "Focusing on patient-centric design." },
        { id: 4, name: "Ricardo Silva", year: 2, bio: "Developing an app for diabetes management." },
        { id: 5, name: "Sofia Sousa", year: 2, bio: "President of the Student Union." },
        { id: 6, name: "André Costa", year: 2, bio: "Researcher in Medical Imaging." },
        { id: 7, name: "Beatriz Lima", year: 3, bio: "Final project on Hospital IoT systems." },
        { id: 8, name: "Tiago Alves", year: 3, bio: "Interning at a major Hospital IT dept." },
        { id: 9, name: "Catarina Dias", year: 3, bio: "Specializing in Cybersecurity for Health." },
        { id: 10, name: "Diogo Santos", year: 1, bio: "Passionate about robotics in surgery." }
    ];

    const filteredStudents = students.filter(s => s.year === year);

    return (
        <div className="meet-us-page section p-fade-in">
            <div className="container">
                <div className="meet-header text-center">
                    <h1 className="section-title">{t.meetUs.title}</h1>
                    <div className="year-tabs">
                        {[1, 2, 3].map((y) => (
                            <button
                                key={y}
                                className={`year-tab ${year === y ? 'active' : ''}`}
                                onClick={() => setYear(y)}
                            >
                                <GraduationCap size={18} />
                                {y === 1 ? t.meetUs.year1 : y === 2 ? t.meetUs.year2 : t.meetUs.year3}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Class Photo Section */}
                <div className="class-photo-container">
                    <img src={classPhoto} alt={`Class of Year ${year}`} className="class-photo" />
                    <div className="class-photo-caption">
                        <h3>{t.meetUs.year1.replace('1', year)} {t.yearClass || "Class"}</h3>
                    </div>
                </div>

                <h2 className="ambassadors-title">{t.ambassadors || (language === 'pt' ? "Embaixadores de Ano" : "Year Ambassadors")}</h2>

                <div className="students-grid">
                    {filteredStudents.length > 0 ? (
                        filteredStudents.map(student => (
                            <div key={student.id} className="student-card">
                                <div className="student-avatar">
                                    <User size={40} color="var(--color-primary)" />
                                </div>
                                <h3 className="student-name">{student.name}</h3>
                                <span className="student-year">{t.meetUs.year1.replace('1', student.year)} Ambassador</span>
                                <p className="student-bio">{student.bio}</p>
                            </div>
                        ))
                    ) : (
                        <div className="no-students">
                            <p>No students found for this year.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MeetUs;
