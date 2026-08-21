import { useState } from 'react';
import { X, Printer, Download, Copy, Check, FileText, CheckCircle2, GraduationCap, Briefcase, Code, Award, BookOpen } from 'lucide-react';
import { personalInfo, experiences, educations, skillCategories, projects, researchTopics, certifications } from '../data/portfolioData';

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

  const handleDownloadText = () => {
    const cvText = `
AYMEN GASMI — CURRICULUM VITAE
Software Engineer & AI Researcher
Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}

=======================================================
EXECUTIVE SUMMARY
=======================================================
${personalInfo.bio}

=======================================================
TECHNICAL COMPETENCIES (AS IN CV)
=======================================================
• Programming Languages: C, C++, Java, Python, R, JavaScript, TypeScript
• Backend: Python (Flask, FastAPI), Node.js (Express.js), PHP, RESTful API Design, Async Programming
• AI / RAG / NLP: LangChain, FAISS, Ollama, DeepSeek-R1 (via OpenRouter), Prompt Engineering, Semantic Search, MiniLM, Machine Learning
• Agentic AI: Claude AI, GPT, Gemini, LLM Integration, Anti-gravity & Autonomous Workflows
• Frontend & Mobile: React.js (JavaScript, TypeScript), Flutter (Android & iOS), HTML5, CSS3
• Databases: MySQL, MongoDB, Database Design (ERD, normalization), Optimized SQL Queries, CRUD & Data Validation
• DevOps & Tools: Git (branching, pull requests, merge conflicts), VPS Hosting, DNS, Server Configuration, System Design
• Currently Learning: FastAPI, PostgreSQL, Docker, Advanced LLM Fine-tuning

=======================================================
EDUCATION
=======================================================
${educations
  .map(
    (e) => `• ${e.degree} — ${e.field}
  ${e.institution} (${e.period}) | ${e.location}
  ${e.honors ? `Honors: ${e.honors}` : ''}
  ${e.thesis ? `Thesis: ${e.thesis}` : ''}`
  )
  .join('\n\n')}

=======================================================
PROFESSIONAL & RESEARCH EXPERIENCE
=======================================================
${experiences
  .map(
    (exp) => `• ${exp.role} — ${exp.organization} (${exp.period})
  Location: ${exp.location}
  Summary: ${exp.description}
  Key Outcomes:
${exp.achievements.map((a) => `    - ${a}`).join('\n')}
  Stack: ${exp.technologies.join(', ')}`
  )
  .join('\n\n')}

=======================================================
KEY DOCTORAL RESEARCH TOPICS
=======================================================
${researchTopics
  .map(
    (r) => `• ${r.title} (${r.status} ${r.year})
  Venue: ${r.venue || 'Doctoral Thesis Investigation'}
  Abstract: ${r.abstract}
  Tags: ${r.tags.join(', ')}`
  )
  .join('\n\n')}

=======================================================
FEATURED PRODUCTION PROJECTS
=======================================================
${projects
  .map(
    (p) => `• ${p.title}
  Category: ${p.categoryLabel}
  Description: ${p.shortDescription}
  Tech: ${p.technologies.join(', ')}`
  )
  .join('\n\n')}

=======================================================
CERTIFICATIONS & HONORS
=======================================================
${certifications.map((c) => `• ${c.title} — ${c.issuer} (${c.year})`).join('\n')}
    `.trim();

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Aymen_Gasmi_CV_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyText = () => {
    const textSummary = `Aymen Gasmi - Software Engineer & AI Researcher | ${personalInfo.email} | Specializing in NLP, LLMs, RAG, and Modern Backend Architecture.`;
    navigator.clipboard.writeText(textSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl my-6 bg-[#0e121a] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Actions Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm sm:text-base font-bold text-white">
              Curriculum Vitae — {personalInfo.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-colors"
              title="Download TXT CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download File</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-300 text-xs sm:text-sm bg-[#090b10]">
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-cyan-400 font-mono text-sm font-semibold">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 font-mono pt-1">
              <span>{personalInfo.email}</span>
              <span>•</span>
              <span>github.com/aymengasmi</span>
              <span>•</span>
              <span>linkedin.com/in/aymengasmi</span>
              <span>•</span>
              <span>Doctoral Research Laboratory</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <Code className="w-3.5 h-3.5" />
              Executive Profile
            </h2>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {personalInfo.bio}
            </p>
          </div>

          {/* Technical Competencies */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Technical Stack &amp; Skills (From CV)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 space-y-1">
                <span className="font-bold text-white font-mono">• Programming Languages</span>
                <p className="text-slate-400">
                  C, C++, Java, Python, R, JavaScript, TypeScript
                </p>
              </div>
              <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 space-y-1">
                <span className="font-bold text-white font-mono">• Backend</span>
                <p className="text-slate-400">
                  Python (Flask, FastAPI), Node.js (Express.js), PHP, RESTful API Design, Async Programming
                </p>
              </div>
              <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 space-y-1">
                <span className="font-bold text-white font-mono">• AI / RAG / NLP</span>
                <p className="text-slate-400">
                  LangChain, FAISS, Ollama, DeepSeek-R1 (via OpenRouter), Prompt Engineering, Semantic Search, MiniLM, Machine Learning
                </p>
              </div>
              <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 space-y-1">
                <span className="font-bold text-white font-mono">• Agentic AI</span>
                <p className="text-slate-400">
                  Claude AI, GPT, Gemini, LLM Integration, Anti-gravity &amp; Autonomous Workflows
                </p>
              </div>
              <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 space-y-1">
                <span className="font-bold text-white font-mono">• Frontend &amp; Mobile</span>
                <p className="text-slate-400">
                  React.js (JavaScript, TypeScript), Flutter (Android &amp; iOS), HTML5, CSS3
                </p>
              </div>
              <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 space-y-1">
                <span className="font-bold text-white font-mono">• Databases</span>
                <p className="text-slate-400">
                  MySQL, MongoDB, Database Design (ERD, normalization), Optimized SQL Queries, CRUD &amp; Data Validation
                </p>
              </div>
              <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 space-y-1">
                <span className="font-bold text-white font-mono">• DevOps &amp; Tools</span>
                <p className="text-slate-400">
                  Git (branching, pull requests, merge conflicts), VPS Hosting, DNS, Server Configuration, System Design
                </p>
              </div>
              <div className="p-3 bg-slate-900/60 rounded-lg border border-amber-500/30 space-y-1">
                <span className="font-bold text-amber-300 font-mono">• Currently Learning</span>
                <p className="text-slate-400">
                  FastAPI, PostgreSQL, Docker, Advanced LLM Fine-tuning
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5" />
              Education
            </h2>
            <div className="space-y-3">
              {educations.map((edu, idx) => (
                <div key={idx} className="p-3.5 bg-slate-900/40 rounded-lg border border-slate-800 text-xs space-y-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-white">
                    <span>{edu.degree} — {edu.field}</span>
                    <span className="text-slate-400 font-mono font-normal">{edu.period}</span>
                  </div>
                  <div className="text-slate-400">{edu.institution} | {edu.location}</div>
                  {edu.honors && <div className="text-amber-300 font-mono text-[11px]">{edu.honors}</div>}
                  {edu.thesis && <div className="text-slate-300 italic text-[11px]">Thesis: &quot;{edu.thesis}&quot;</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              Experience &amp; Appointments
            </h2>
            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div key={idx} className="p-3.5 bg-slate-900/40 rounded-lg border border-slate-800 text-xs space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-white">
                    <span className="text-sm text-cyan-300">{exp.role}</span>
                    <span className="text-slate-400 font-mono font-normal">{exp.period}</span>
                  </div>
                  <div className="text-slate-400 font-mono">{exp.organization} • {exp.location}</div>
                  <p className="text-slate-300">{exp.description}</p>
                  <ul className="list-disc list-inside text-slate-400 space-y-0.5 pl-1">
                    {exp.achievements.map((ach, achIdx) => (
                      <li key={achIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Publications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              Selected Research Publications &amp; Preprints
            </h2>
            <div className="space-y-2">
              {researchTopics.map((r, idx) => (
                <div key={idx} className="p-3 bg-slate-900/30 rounded-lg border border-slate-800 text-xs space-y-1">
                  <div className="font-bold text-white">{r.title} ({r.year})</div>
                  <div className="text-slate-400 italic">{r.venue || 'Doctoral Research Thesis'} — Status: {r.status}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Awards */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <Award className="w-3.5 h-3.5" />
              Certifications &amp; Honors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certifications.map((c, idx) => (
                <div key={idx} className="p-2.5 bg-slate-900/30 rounded border border-slate-800 flex justify-between">
                  <span className="text-slate-200 font-medium">{c.title}</span>
                  <span className="text-slate-400 font-mono">{c.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
