import { BookOpen, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { currentResearch, researchInterests, personalInfo } from '../data/portfolioData';

export default function Research() {
  return (
    <section id="research" className="py-14 sm:py-16 bg-slate-50/70 dark:bg-slate-900/50 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-1">
            Doctoral Investigation
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Current Research
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            PhD research topic, core problem statement, and primary doctoral objectives.
          </p>
        </div>

        {/* Current Topic Banner */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs mb-8 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
              Active PhD Topic (2026 – Present)
            </span>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
              IIUM · Computer Science
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
            {personalInfo.currentResearchTopic}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong className="text-slate-800 dark:text-slate-200">The Problem:</strong> {currentResearch.problemStatement}
          </p>

          {/* Research Interest Tags */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-700/70">
            <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
              Key Research Areas
            </div>
            <div className="flex flex-wrap gap-1.5">
              {researchInterests.map((interest) => (
                <span
                  key={interest.id}
                  className="px-2.5 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 font-medium"
                >
                  {interest.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Research Objectives Grid */}
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
            Research Objectives
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentResearch.objectives.map((obj, i) => (
              <div
                key={obj.id}
                className="p-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">
                    0{i + 1}
                  </span>
                  <span
                    className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                      obj.status === 'current'
                        ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900'
                        : 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-900'
                    }`}
                  >
                    {obj.status === 'current' ? 'Current' : 'Planned'}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {obj.title}
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {obj.description}
                </p>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-700/70 flex flex-wrap gap-1.5">
                  {obj.keyAspects.map((aspect, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                    >
                      {aspect}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
