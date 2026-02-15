import { useState, useMemo, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, User, Calendar, ChevronDown } from 'lucide-react';
import './MeetUs.css';
import { students } from '../data/students';

const MeetUs = () => {
    const { t } = useLanguage();
    const [year, setYear] = useState(1);

    // Get unique lective years from data and sort them (newest first)
    const availableLectiveYears = useMemo(() => {
        const years = [...new Set(students.map(s => s.lectiveYear))];
        return years.sort((a, b) => b.localeCompare(a));
    }, []);

    const [lectiveYear, setLectiveYear] = useState(availableLectiveYears[0] || "");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const selectYear = (ly) => {
        setLectiveYear(ly);
        setIsDropdownOpen(false);
    };

    // Dynamically resolve the class photo path based on filters
    const classPhoto = useMemo(() => {
        try {
            // The folder name uses hyphens (e.g., 2024-2025) while the label uses slashes (e.g., 2024/2025)
            const yearFolder = lectiveYear.replace('/', '-');
            return new URL(`../assets/academic-years/${yearFolder}/year-${year}/class-photo.png`, import.meta.url).href;
        } catch (e) {
            return "";
        }
    }, [lectiveYear, year]);

    const filteredStudents = useMemo(() => {
        return students.filter(s => s.year === year && s.lectiveYear === lectiveYear);
    }, [year, lectiveYear]);

    return (
        <div className="meet-us-page section p-fade-in">
            <div className="container">
                <div className="meet-header text-center">
                    <h1 className="section-title">{t.meetUs.title}</h1>

                    <div className="filters-container">
                        <div className="lective-year-filter-wrapper" ref={dropdownRef}>
                            <div className="filter-label">
                                <Calendar size={18} />
                                {t.meetUs.academicYear}:
                            </div>
                            <div className={`smart-dropdown ${isDropdownOpen ? 'open' : ''}`}>
                                <div className="dropdown-trigger" onClick={toggleDropdown}>
                                    <span>{lectiveYear}</span>
                                    <ChevronDown size={18} className="chevron" />
                                </div>
                                {isDropdownOpen && (
                                    <div className="dropdown-options">
                                        {availableLectiveYears.map(ly => (
                                            <div
                                                key={ly}
                                                className={`dropdown-option ${lectiveYear === ly ? 'active' : ''}`}
                                                onClick={() => selectYear(ly)}
                                            >
                                                {ly}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

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
                </div>

                {/* Class Photo Section */}
                <div className="class-photo-container">
                    <img src={classPhoto} alt={`Class of ${lectiveYear} - Year ${year}`} className="class-photo" />
                    <div className="class-photo-caption">
                        <h3>{t.meetUs[`year${year}`]} - {t.yearClass || "Class"} {lectiveYear}</h3>
                    </div>
                </div>

                <h2 className="ambassadors-title">{t.ambassadors || (t.pt ? "Embaixadores de Ano" : "Year Ambassadors")}</h2>

                <div className="students-grid">
                    {filteredStudents.length > 0 ? (
                        filteredStudents.map(student => (
                            <div key={student.id} className="student-card">
                                <div className="student-avatar">
                                    <User size={40} color="var(--color-primary)" />
                                </div>
                                <h3 className="student-name">{student.name}</h3>
                                <span className="student-year">{t.meetUs[`year${student.year}`]} Ambassador</span>
                                <p className="student-bio">{student.bio}</p>
                            </div>
                        ))
                    ) : (
                        <div className="no-students">
                            <p>{t.en ? "No students found for this year." : "Nenhum estudante encontrado para este ano."}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MeetUs;
