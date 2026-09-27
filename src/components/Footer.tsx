import { ArrowUp, BookOpen, Fingerprint, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenCV: () => void;
}

export default function Footer({ onOpenCV }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Identity & Institution */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400 font-serif font-bold flex items-center justify-center border border-blue-200 dark:border-blue-800">
                AG
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-sm block">
                  {personalInfo.name}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {personalInfo.academicTitle}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              {personalInfo.department}, {personalInfo.institution}. Researching optimization-driven and explainable NLP.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalInfo.links.googleScholar}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Google Scholar"
              >
                <BookOpen className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.links.orcid}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                title="ORCID"
              >
                <Fingerprint className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Academic Navigation */}
          <div className="md:col-span-4 grid grid-cols-2 gap-2 text-xs">
            <div className="space-y-1.5">
              <span className="font-semibold text-slate-900 dark:text-white text-[11px] uppercase tracking-wider block">
                Research
              </span>
              <div><a href="#about" className="hover:text-blue-600">About Me</a></div>
              <div><a href="#research" className="hover:text-blue-600">Research Scope</a></div>
              <div><a href="#current-research" className="hover:text-blue-600">PhD Investigation</a></div>
              <div><a href="#publications" className="hover:text-blue-600">Publications</a></div>
            </div>

            <div className="space-y-1.5">
              <span className="font-semibold text-slate-900 dark:text-white text-[11px] uppercase tracking-wider block">
                Portfolio
              </span>
              <div><a href="#projects" className="hover:text-blue-600">Research Projects</a></div>
              <div><a href="#education" className="hover:text-blue-600">Education</a></div>
              <div><a href="#experience" className="hover:text-blue-600">Experience</a></div>
              <div><a href="#journey" className="hover:text-blue-600">Research Journey</a></div>
              <div><a href="#contact" className="hover:text-blue-600">Contact</a></div>
            </div>
          </div>

          {/* Back to top & CV */}
          <div className="md:col-span-3 flex md:flex-col items-center md:items-end justify-between gap-3">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenCV}
              className="text-xs font-semibold text-blue-700 dark:text-blue-400 hover:underline"
            >
              Curriculum Vitae (PDF)
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 dark:text-slate-500">
          <div>
            © {new Date().getFullYear()} Aymen Gasmi. Built for Academic Research &amp; Scholarly Collaboration.
          </div>
          <div>
            International Islamic University Malaysia (IIUM)
          </div>
        </div>
      </div>
    </footer>
  );
}
