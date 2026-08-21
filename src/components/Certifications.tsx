import { Award, ShieldCheck, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'award':
        return Trophy;
      case 'publication':
        return Sparkles;
      default:
        return ShieldCheck;
    }
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <span>07. RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Certifications &amp; Achievements
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Verified credentials in LLM systems, deep learning, cloud architecture, and competitive academic awards.
          </p>
        </div>

        {/* Grid of Certification / Award Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => {
            const Icon = getIcon(cert.type);
            const isAward = cert.type === 'award';

            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-4 ${
                  isAward
                    ? 'bg-amber-500/5 border-amber-500/20 hover:border-amber-500/40'
                    : 'bg-slate-900/40 border-slate-800/90 hover:border-slate-700'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-2 rounded-lg border ${
                        isAward
                          ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                          : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">{cert.year}</span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">{cert.issuer}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span
                    className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-medium border ${
                      isAward
                        ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                        : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'
                    }`}
                  >
                    {cert.badge}
                  </span>

                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
