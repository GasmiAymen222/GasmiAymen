import { useState, useRef, ChangeEvent } from 'react';
import { FileText, Download, ArrowRight, BookOpen, Camera, RefreshCw, Upload, MapPin, Building2, ExternalLink, Fingerprint, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import defaultPortraitImg from '../assets/images/GasmiAymen.jpg';

interface HeroProps {
  onOpenCV: () => void;
}

export default function Hero({ onOpenCV }: HeroProps) {
  const [personalPhoto, setPersonalPhoto] = useState<string>(() => {
    return localStorage.getItem('aymen_researcher_custom_photo') || defaultPortraitImg;
  });
  const [showPhotoControls, setShowPhotoControls] = useState(false);
  const [customUrlInput, setCustomUrlInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const quickFacts = [
    { label: 'Current Position', value: 'PhD Researcher in Computer Science' },
    { label: 'Institution', value: 'International Islamic University Malaysia (IIUM)' },
    { label: 'Academic Background', value: 'M.Sc. & B.Sc. in Computer Science / Software Engineering' },
    { label: 'Research Focus', value: 'Optimization-Driven & Explainable NLP' },
  ];


  return (
    <section
      id="about"
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 border-b border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Info & Biography Column */}
          <div className="lg:col-span-8 flex flex-col space-y-5">
            {/* Academic Position Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span>International Islamic University Malaysia (IIUM)</span>
            </div>

            {/* Name & Academic Title */}
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {personalInfo.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-blue-700 dark:text-blue-400 tracking-tight">
                {personalInfo.roleSubtitle}
              </p>
            </div>

            {/* Academic Biography Text */}
            <div className="space-y-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a Computer Science PhD researcher at the{' '}
                <strong className="font-semibold text-slate-900 dark:text-white">International Islamic University Malaysia (IIUM)</strong>{' '}
                interested in Natural Language Processing, Large Language Models, Knowledge Extraction, Explainable AI, and AI systems. My research focuses on developing optimization-driven and explainable approaches for extracting domain-specific knowledge from textual data.
              </p>
              <p>
                With a strong academic and technical foundation in Information Systems and Software Engineering (M.Sc. &amp; B.Sc.), I bridge theoretical machine learning research with scalable, principled software engineering practices.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {quickFacts.map((fact, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs"
                >
                  <div className="text-slate-400 dark:text-slate-400 font-medium mb-0.5">
                    {fact.label}
                  </div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#research"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-xs transition-colors"
              >
                <span>View Research</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#publications"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>View Publications</span>
              </a>


            </div>

            {/* Research Keywords */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
                Research Keywords
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                {personalInfo.researchKeywords.map((kw, i) => (
                  <span
                    key={kw}
                    className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-[11px]"
                  >
                    <span>{kw}</span>
                    {i < personalInfo.researchKeywords.length - 1 && (
                      <span className="text-slate-400 dark:text-slate-600">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Academic Portrait Card & Quick Links */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center">
            <div className="relative w-56 sm:w-64 bg-white dark:bg-slate-800 p-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={personalPhoto}
                  alt="Aymen Gasmi - Computer Science PhD Researcher"
                  className="w-full h-full object-cover object-top"
                  onError={() => setPersonalPhoto(defaultPortraitImg)}
                />

              </div>

              {/* Caption */}
              <div className="mt-2.5 text-center space-y-0.5">
                <div className="text-sm font-semibold text-slate-900 dark:text-white">Aymen Gasmi</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Department of Computer Science</div>
                <div className="text-[11px] text-blue-700 dark:text-blue-400 font-medium">
                  IIUM · Kuala Lumpur, Malaysia
                </div>
              </div>

              {/* Scholarly Quick Links */}
              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700/70 flex items-center justify-center gap-3 text-slate-400 dark:text-slate-400">
                <a
                  href={personalInfo.links.googleScholar}
                  target="_blank"
                  rel="noreferrer"
                  title="Google Scholar"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
                >
                  <BookOpen className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.links.orcid}
                  target="_blank"
                  rel="noreferrer"
                  title="ORCID"
                  className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors p-1"
                >
                  <Fingerprint className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  className="hover:text-slate-900 dark:hover:text-white transition-colors p-1"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  title="Email"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
