import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { educationTimeline } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-14 sm:py-16 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-1">
            Academic Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Formal degrees in Computer Science, Software Engineering, and Computer Systems.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-4">
          {educationTimeline.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-2xs space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {item.degree} — <span className="text-blue-700 dark:text-blue-400 font-medium">{item.field}</span>
                  </h3>
                  <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{item.institution}</span>
                    <span>·</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {item.period}
                  </span>
                  {item.status && (
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                      {item.status}
                    </span>
                  )}
                </div>
              </div>

              {item.thesisOrDetails && (
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong className="text-slate-800 dark:text-slate-200">Focus:</strong> {item.thesisOrDetails}
                </p>
              )}

              {/* Focus tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
