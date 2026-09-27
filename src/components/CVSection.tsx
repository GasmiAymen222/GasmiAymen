import { FileText, Download, Eye, ExternalLink, Printer, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface CVSectionProps {
  onOpenCV: () => void;
}

export default function CVSection({ onOpenCV }: CVSectionProps) {
  return (
    <section id="cv" className="py-16 sm:py-20 bg-slate-50/70 dark:bg-slate-900/40 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm text-center space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
            <FileText className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Curriculum Vitae
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              For a detailed overview of my academic background, research experience, technical skills, and publications, please view or download my CV.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="/cv.pdf"
              download="Aymen_Gasmi_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-xs transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>

            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 transition-colors"
            >
              <Eye className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>View Academic CV Online</span>
            </button>
          </div>

          <div className="pt-4 text-xs text-slate-400 dark:text-slate-500 font-mono">
            Document format: Academic Curriculum Vitae · Last updated: 2026
          </div>
        </div>
      </div>
    </section>
  );
}
