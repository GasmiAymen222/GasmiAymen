import { Briefcase, GraduationCap, Microscope, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'Research':
        return {
          icon: Microscope,
          label: 'AI & NLP Research',
          classes: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
        };
      case 'Industry':
        return {
          icon: Briefcase,
          label: 'Software Engineering',
          classes: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
        };
      case 'Academic':
        return {
          icon: GraduationCap,
          label: 'Academic Teaching',
          classes: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
        };
      default:
        return {
          icon: Briefcase,
          label: type,
          classes: 'bg-slate-800 text-slate-300 border-slate-700',
        };
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <span>05. CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional &amp; Academic Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A track record of high-impact AI research, enterprise backend engineering, and university instruction.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12 ml-2 sm:ml-4">
          {experiences.map((exp, idx) => {
            const badge = getTypeBadge(exp.type);
            const Icon = badge.icon;

            return (
              <div key={exp.id} className="relative group">
                {/* Node dot on the timeline */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700 transition-all duration-200 space-y-4">
                  {/* Top row: Role, Badge, Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${badge.classes}`}>
                          <Icon className="w-3 h-3" />
                          <span>{badge.label}</span>
                        </span>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono">
                        <span>{exp.organization}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Key Outcomes &amp; Deliverables
                    </span>
                    <div className="space-y-2">
                      {exp.achievements.map((ach, achIdx) => (
                        <div key={achIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="pt-3 border-t border-slate-800/70 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono text-slate-400 bg-slate-800/50 border border-slate-700/60 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
