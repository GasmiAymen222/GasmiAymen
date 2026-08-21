import { useState, useRef, ChangeEvent } from 'react';
import { Github, Linkedin, Mail, ArrowDown, FileText, Check, Camera, RefreshCw, Upload, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import defaultPortraitImg from '../assets/images/aymen_gasmi_portrait_1787282056257.jpg';

interface HeroProps {
  onOpenCV: () => void;
}

export default function Hero({ onOpenCV }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [personalPhoto, setPersonalPhoto] = useState<string>(() => {
    return localStorage.getItem('aymen_portfolio_custom_photo') || defaultPortraitImg;
  });
  const [showPhotoControls, setShowPhotoControls] = useState(false);
  const [customUrlInput, setCustomUrlInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 8 * 1024 * 1024) {
        alert('Please choose an image file under 8MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPersonalPhoto(result);
        localStorage.setItem('aymen_portfolio_custom_photo', result);
        setShowPhotoControls(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = () => {
    if (customUrlInput.trim()) {
      setPersonalPhoto(customUrlInput.trim());
      localStorage.setItem('aymen_portfolio_custom_photo', customUrlInput.trim());
      setCustomUrlInput('');
      setShowPhotoControls(false);
    }
  };

  const handleResetPhoto = () => {
    setPersonalPhoto(defaultPortraitImg);
    localStorage.removeItem('aymen_portfolio_custom_photo');
    setShowPhotoControls(false);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[300px] bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Bio & Core Info */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/20 text-xs font-mono text-cyan-300 w-fit">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>PhD Researcher • Software Engineer</span>
          </div>

          {/* Heading with Name & Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Aymen Gasmi
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-cyan-400/90 tracking-tight">
              Software Engineer &amp; AI Researcher
            </p>
          </div>

          {/* Core Descriptive Text */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            Specializing in{' '}
            <span className="text-slate-100 font-semibold">Natural Language Processing (NLP)</span>,{' '}
            <span className="text-slate-100 font-semibold">Large Language Models (LLMs)</span>, and{' '}
            <span className="text-slate-100 font-semibold">Retrieval-Augmented Generation (RAG)</span>. 
            I bridge theoretical deep learning research with production-grade backend engineering, 
            building high-performance architectures, explainable AI pipelines, and distributed APIs.
          </p>

          {/* Quick Metrics / Key Focus Tags */}
          <div className="flex flex-wrap gap-2 pt-1 pb-2">
            {['RAG Systems', 'Transformers & BERT', 'Multi-Agent Workflows', 'FastAPI & Express', 'PyTorch', 'Distributed APIs'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-900/80 border border-slate-800 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all duration-200 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenCV}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700 hover:border-slate-600 rounded-lg transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Download CV</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/40 rounded-lg transition-colors"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Social Icons & Email Quick Copy */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-800/70 text-slate-400">
            <span className="text-xs font-mono text-slate-400">Connect:</span>
            
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors group"
            >
              <div className="p-1.5 rounded-md bg-slate-900 border border-slate-800 group-hover:border-slate-700">
                <Github className="w-3.5 h-3.5" />
              </div>
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-300 transition-colors group"
            >
              <div className="p-1.5 rounded-md bg-slate-900 border border-slate-800 group-hover:border-slate-700">
                <Linkedin className="w-3.5 h-3.5" />
              </div>
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-emerald-300 transition-colors group"
              title="Copy email to clipboard"
            >
              <div className="p-1.5 rounded-md bg-slate-900 border border-slate-800 group-hover:border-slate-700">
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5" />}
              </div>
              <span className="font-mono text-[11px] text-slate-400 group-hover:text-slate-200">
                {copiedEmail ? 'Copied to clipboard!' : personalInfo.email}
              </span>
            </button>
          </div>
        </div>

        {/* Right Column: Personal Image & Profile Display */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[420px] group">
            {/* Outer soft ambient glow border */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 via-indigo-500/20 to-cyan-500/30 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />

            {/* Main Card Container */}
            <div className="relative rounded-2xl bg-[#0c1017] border border-slate-800/90 shadow-2xl overflow-hidden p-3.5 backdrop-blur-xl">
              {/* Top Bar with Name tag & Photo Controls Trigger */}
             

              
              {/* Photo Frame Container */}
              <div className="relative mt-2 rounded-xl overflow-hidden aspect-square sm:aspect-[4/4.2] bg-slate-950 border border-slate-800/80">
                <img
                  src={personalPhoto}
                  alt="Aymen Gasmi - Software Engineer & AI Researcher"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Subtle vignette & gradient overlay at bottom for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent opacity-85 pointer-events-none" />

                {/* Floating Specialization Badges over bottom of image */}
                <div className="absolute bottom-3 left-3 right-3 space-y-1.5 pointer-events-none">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase font-mono text-cyan-300 bg-slate-950/90 border border-cyan-500/40 backdrop-blur-md rounded-md">
                      NLP &bull; LLMs &bull; RAG
                    </span>
                    <span className="px-2 py-1 text-[11px] font-mono text-emerald-300 bg-slate-950/90 border border-emerald-500/30 backdrop-blur-md rounded-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      Doctoral Track
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium line-clamp-1 drop-shadow-md">
                    Doctoral Researcher in Computer Science &amp; Senior Backend Engineer
                  </p>
                </div>
              </div>

              {/* Bottom Quick Highlights */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-2 border-t border-slate-800/70">
                <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-center">
                  <div className="text-xs font-bold font-mono text-cyan-400">6+ Years</div>
                  <div className="text-[10px] text-slate-400">SWE &amp; AI Exp</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-center">
                  <div className="text-xs font-bold font-mono text-emerald-400">4+ Papers</div>
                  <div className="text-[10px] text-slate-400">NLP Publications</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-center">
                  <div className="text-xs font-bold font-mono text-indigo-400">15+ Models</div>
                  <div className="text-[10px] text-slate-400">Production ML</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

