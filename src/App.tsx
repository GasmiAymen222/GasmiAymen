import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Research from './components/Research';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import CVSection from './components/CVSection';
import AcademicProfiles from './components/AcademicProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('aymen_academic_theme');
    if (saved) {
      return saved === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('aymen_academic_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('aymen_academic_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Sticky Academic Navbar */}
      <Navbar
        onOpenCV={() => setIsCVModalOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main>
        {/* 1. Combined Profile & About Me Section */}
        <Hero onOpenCV={() => setIsCVModalOpen(true)} />

        {/* 2. Research & Objectives */}
        <Research />

        {/* 3. Publications (each card with brief summary) */}
        <Publications />

        {/* 4. Research & Technical Projects */}
        <Projects />

        {/* 5. Education */}
        <Education />

        {/* 6. Work & Research Experience */}
        <Experience />

        {/* 7. Curriculum Vitae */}
        <CVSection onOpenCV={() => setIsCVModalOpen(true)} />

        {/* 8. Academic Profiles */}
        <AcademicProfiles />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* Academic Footer */}
      <Footer onOpenCV={() => setIsCVModalOpen(true)} />

      {/* Academic CV Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}
