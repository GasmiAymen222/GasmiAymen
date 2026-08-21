import { Code2, Brain, Database, Cpu, ShieldCheck, Layers, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Brain,
      title: 'AI Research & NLP',
      description:
        'Conducting doctoral research on Explainable AI (XAI), Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG). Specializing in attention attribution and hallucination mitigation.',
    },
    {
      icon: Database,
      title: 'Software Engineering & Backends',
      description:
        'Architecting resilient distributed systems, asynchronous event pipelines, and high-throughput APIs in Python (FastAPI), Node.js, Express, and PostgreSQL.',
    },
    {
      icon: Layers,
      title: 'Applied AI & Agents',
      description:
        'Designing stateful multi-agent workflows with LangGraph, hybrid dense-sparse vector search, and model optimization using PyTorch and Hugging Face.',
    },
    {
      icon: ShieldCheck,
      title: 'Academic Rigor & Mentorship',
      description:
        'Authoring peer-reviewed academic publications and delivering graduate/undergraduate coursework in algorithms, NLP, and distributed systems.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering Rigor Meets Deep Learning Research
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A dual perspective: developing robust production software while advancing theoretical NLP and LLM interpretability.
          </p>
        </div>

        {/* Two-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative text */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed">
            <p>
              I am a <strong className="text-slate-100 font-semibold">Software Engineer and AI Researcher</strong> with a rigorous background in both applied distributed engineering and doctoral-level artificial intelligence research.
            </p>
            <p>
              My primary research focuses on <strong className="text-cyan-300">Natural Language Processing (NLP)</strong>, <strong className="text-cyan-300">Large Language Models (LLMs)</strong>, and <strong className="text-cyan-300">Retrieval-Augmented Generation (RAG)</strong>. I investigate methods to ensure generative architectures provide faithful, mathematically verifiable attribution while drastically reducing hallucinations in enterprise and scientific domains.
            </p>
            <p>
              On the engineering side, I have designed and deployed high-traffic backend microservices, real-time token-streaming APIs, and cross-platform applications using <strong className="text-slate-100">Python, Node.js, Express, TypeScript, Flutter, Docker, and PostgreSQL</strong>. I treat machine learning not as an isolated black box, but as a critical component in a larger, fault-tolerant software architecture.
            </p>
            <p>
              Whether engineering autonomous multi-agent graphs, fine-tuning domain-specific BERT models, or optimizing database queries for sub-millisecond lookups, I prioritize clean architecture, measurable performance benchmarks, and maintainable code.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-2xl font-bold font-mono text-cyan-400">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-slate-100">{pillar.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
