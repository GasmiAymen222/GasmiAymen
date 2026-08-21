import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';
import { educations } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#07090e]/40 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <span>06. ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education &amp; Degrees
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Formal degrees in Computer Science, Software Engineering, and specialized NLP deep learning.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-cyan-500/30 transition-all duration-200 space-y-6"
            >
              <div className="space-y-4">
                {/* Degree Header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-medium text-cyan-300 font-mono">
                    {edu.field}
                  </p>
                </div>

                {/* Institution & Location */}
                <div className="text-xs text-slate-400 space-y-1">
                  <div className="font-semibold text-slate-300">{edu.institution}</div>
                  <div className="flex items-center gap-1 text-[11px]">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Honors badge if present */}
                {edu.honors && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-[11px] font-mono text-amber-300">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.honors}</span>
                  </div>
                )}

                {/* Thesis details if present */}
                {edu.thesis && (
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-cyan-400" />
                      Thesis &amp; Research Topic
                    </span>
                    <p className="text-slate-300 text-[11px] leading-relaxed italic">
                      &quot;{edu.thesis}&quot;
                    </p>
                  </div>
                )}
              </div>

              {/* Focus Areas */}
              <div className="pt-3 border-t border-slate-800/80 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                  Curriculum &amp; Specialization
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {edu.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800/50 border border-slate-700/50 rounded"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
