import { useState } from 'react';
import { X, Printer, Download, Copy, Check, FileText, GraduationCap, Briefcase, Code, BookOpen, Building2 } from 'lucide-react';
import { personalInfo, educationTimeline, academicExperiences, publications, technicalSkills, currentResearch } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const cvText = `AYMEN GASMI — CURRICULUM VITAE
PhD Researcher in Computer Science | AI & NLP Researcher
International Islamic University Malaysia (IIUM)
Email: ${personalInfo.email}
GitHub: ${personalInfo.links.github} | LinkedIn: ${personalInfo.links.linkedin}

ACADEMIC BIOGRAPHY
${personalInfo.academicBio}

CURRENT DOCTORAL RESEARCH
Topic: ${personalInfo.currentResearchTopic}
Institution: ${personalInfo.institution}
Department: ${personalInfo.department}

EDUCATION
${educationTimeline
  .map(
    (e) => `• ${e.degree} — ${e.field}
  ${e.institution} (${e.period})
  ${e.thesisOrDetails ? `Focus: ${e.thesisOrDetails}` : ''}`
  )
  .join('\n\n')}

RESEARCH & PROFESSIONAL EXPERIENCE
${academicExperiences
  .map(
    (exp) => `• ${exp.role} — ${exp.organization} (${exp.period})
  ${exp.description}
  Highlights:
  ${exp.highlights.map((h) => `  - ${h}`).join('\n')}`
  )
  .join('\n\n')}

PUBLICATIONS & WORK IN PROGRESS
${publications
  .map(
    (p) => `• ${p.title}
  Authors: ${p.authors.join(', ')} (${p.year})
  Venue: ${p.venue} [${p.category}]`
  )
  .join('\n\n')}

TECHNICAL SKILLS & COMPETENCIES
${technicalSkills.map((cat) => `• ${cat.category}: ${cat.skills.join(', ')}`).join('\n')}
`;

    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Academic Curriculum Vitae
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              title="Copy plain text CV"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href="/cv.pdf"
              download="Aymen_Gasmi_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 text-center space-y-2">
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-base font-semibold text-blue-700 dark:text-blue-400">
              {personalInfo.academicTitle} | AI &amp; NLP Researcher
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {personalInfo.institution} · {personalInfo.location}
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
              <span>{personalInfo.email}</span>
              <span>·</span>
              <a href={personalInfo.links.github} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                GitHub
              </a>
              <span>·</span>
              <a href={personalInfo.links.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Academic Biography */}
          <section className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-200 dark:border-slate-800 pb-1">
              Academic Biography
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {personalInfo.academicBio}
            </p>
          </section>

          {/* Doctoral Research Topic */}
          <section className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-200 dark:border-slate-800 pb-1">
              PhD Research Focus
            </h3>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <div className="font-bold text-slate-900 dark:text-white text-sm">
                {personalInfo.currentResearchTopic}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {currentResearch.problemStatement}
              </p>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <span>Education</span>
            </h3>
            <div className="space-y-4">
              {educationTimeline.map((edu) => (
                <div key={edu.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      {edu.degree} — {edu.field}
                    </span>
                    <span className="font-mono text-slate-500 dark:text-slate-400">{edu.period}</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                    {edu.institution}, {edu.location}
                  </div>
                  {edu.thesisOrDetails && (
                    <div className="text-xs text-slate-500 dark:text-slate-400 italic">
                      {edu.thesisOrDetails}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span>Research, Teaching &amp; Engineering Experience</span>
            </h3>
            <div className="space-y-4">
              {academicExperiences.map((exp) => (
                <div key={exp.id} className="space-y-1 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      {exp.role}
                    </span>
                    <span className="font-mono text-slate-500 dark:text-slate-400">{exp.period}</span>
                  </div>
                  <div className="font-medium text-blue-700 dark:text-blue-400">
                    {exp.organization} · {exp.location}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Publications &amp; Work in Progress</span>
            </h3>
            <div className="space-y-3">
              {publications.map((pub) => (
                <div key={pub.id} className="text-xs space-y-1">
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {pub.title}
                  </div>
                  <div className="text-slate-600 dark:text-slate-400">
                    {pub.authors.join(', ')} ({pub.year}) — <span className="italic">{pub.venue}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Competencies */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-200 dark:border-slate-800 pb-1 flex items-center gap-1.5">
              <Code className="w-4 h-4 text-blue-600" />
              <span>Technical Skills &amp; Stack</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              {technicalSkills.map((cat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
                  <div className="font-semibold text-slate-800 dark:text-slate-200">
                    {cat.category}
                  </div>
                  <ul className="space-y-0.5 text-slate-600 dark:text-slate-400 text-[11px]">
                    {cat.skills.map((s) => (
                      <li key={s}>• {s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
