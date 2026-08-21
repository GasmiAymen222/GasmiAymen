import { useState } from 'react';
import { Github, ExternalLink, Play, Sparkles, Database, Brain, Bot, Server, Smartphone, Check, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'rag', label: 'RAG & LLMs' },
    { id: 'nlp', label: 'NLP & BERT' },
    { id: 'agents', label: 'AI Agents' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'mobile', label: 'Mobile Apps' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'rag':
        return Brain;
      case 'nlp':
        return Database;
      case 'agents':
        return Bot;
      case 'backend':
        return Server;
      case 'mobile':
        return Smartphone;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              <span>03. FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineering &amp; AI Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Production-grade applications, AI agents, NLP pipelines, and distributed APIs built with modern technologies.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900/80 rounded-xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const Icon = getProjectIcon(project.category);
            return (
              <div
                key={project.id}
                className="flex flex-col rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 overflow-hidden group"
              >
                {/* Visual Header / Mockup Banner */}
                <div className="relative h-44 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-5 flex flex-col justify-between border-b border-slate-800/80 overflow-hidden">
                  {/* Subtle decorative grid/nodes in banner */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono text-cyan-300">
                      <Icon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{project.categoryLabel}</span>
                    </div>

                    {project.featured && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Architecture Diagram Micro-Visualizer */}
                  <div className="relative z-10 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="truncate">{project.title.split('—')[0]}</span>
                    </div>
                    {project.stats && (
                      <div className="flex items-center gap-4 text-[11px] font-mono text-slate-400">
                        {project.stats.map((s, idx) => (
                          <span key={idx}>
                            {s.label}: <strong className="text-cyan-400 font-semibold">{s.value}</strong>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono text-slate-300 bg-slate-800/80 border border-slate-700/60 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500 bg-slate-800/40 rounded">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons: GitHub & Live Demo */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800/70 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700/60"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>

                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 text-xs font-semibold transition-colors border border-cyan-500/30"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Live Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Deep-Dive & Simulation Modal */}
      {activeProjectModal && (
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      )}
    </section>
  );
}
