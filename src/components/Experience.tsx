import { Microscope, GraduationCap, Code2, Calendar } from 'lucide-react';
import { academicExperiences } from '../data/portfolioData';

export default function Experience() {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Research':
        return Microscope;
      case 'Teaching':
        return GraduationCap;
      case 'Software Development':
        return Code2;
      default:
        return Microscope;
    }
  };

  return (
    <section id="experience" className="py-14 sm:py-16 bg-slate-50/70 dark:bg-slate-900/40 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-1">
            Professional Track Record
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Work &amp; Research Experience
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Doctoral AI research, academic instruction, and full-stack software engineering.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4">
          {academicExperiences.map((exp) => {
            const Icon = getIcon(exp.category);
            return (
              <div
                key={exp.id}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-2xs space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-semibold text-blue-700 dark:text-blue-400">{exp.organization}</span>
                        <span> · </span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                      {exp.category}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300 pt-1">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
