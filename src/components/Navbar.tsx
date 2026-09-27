import { useState, useEffect } from 'react';
import { FileText, Download, Menu, X, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenCV: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ onOpenCV, isDarkMode, onToggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Publications', href: '#publications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },

    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = [
        'about',
        'research',
        'publications',
        'projects',
        'education',
        'experience',
        'contact',
      ];
      const scrollPosition = window.scrollY + 160;

      for (const section of sectionIds) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 120) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-xs py-3'
        : 'bg-transparent py-4 sm:py-5'
        }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Academic Identity / Brand */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-slate-900 dark:text-slate-100 focus:outline-none"
        >
          <div className="w-8 h-8 rounded-md bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-700 dark:text-blue-400 font-serif font-bold text-sm">
            AG
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 tracking-tight leading-tight group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
              PhD Researcher · IIUM
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-[13px] font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-2.5 py-1.5 rounded-md transition-colors ${isActive
                  ? 'text-blue-700 dark:text-blue-400 font-semibold bg-blue-50/80 dark:bg-blue-950/40'
                  : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                  }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md text-slate-600 dark:text-slate-300"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-5 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="flex-1 py-2 text-center text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 rounded-md border border-blue-200 dark:border-blue-800"
            >
              View CV
            </button>
            <a
              href="/cv.pdf"
              download="Aymen_Gasmi_CV.pdf"
              className="flex-1 py-2 text-center text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Download PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
