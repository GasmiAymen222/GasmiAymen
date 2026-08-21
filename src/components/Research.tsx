import { useState } from 'react';
import { BookOpen, Copy, Check, ChevronDown, ChevronUp, Sparkles, Award, FileText, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { researchTopics } from '../data/portfolioData';

export default function Research() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>('xai-llms');
  const [copiedBibtex, setCopiedBibtex] = useState<string | null>(null);

  const copyBibtex = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBibtex(id);
    setTimeout(() => setCopiedBibtex(null), 2500);
  };

  const researchKeywords = [
    'Explainable AI (XAI)',
    'Natural Language Processing',
    'Large Language Models (LLMs)',
    'Retrieval-Augmented Generation (RAG)',
    'Knowledge Extraction',
    'Transformer Optimization',
    'Attention Saliency',
    'Factual Attribution Verification',
  ];

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#07090e]/50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              <span>04. DOCTORAL RESEARCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              AI, NLP &amp; Explainability Research
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Doctoral investigations into model faithfulness, attention mechanics in Transformers, and verifiable retrieval pipelines.
            </p>
          </div>
        </div>

        {/* Research Core Themes Pill Cloud */}
        <div className="mb-10 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>PhD Primary Research Themes &amp; Methodologies</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {researchKeywords.map((kw) => (
              <span
                key={kw}
                className="px-3 py-1 text-xs font-medium text-slate-200 bg-slate-800/80 border border-slate-700/80 rounded-lg"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Research Cards */}
        <div className="space-y-6">
          {researchTopics.map((topic) => {
            const isExpanded = expandedTopic === topic.id;
            return (
              <div
                key={topic.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-slate-900/70 border-cyan-500/40 shadow-xl shadow-cyan-950/10'
                    : 'bg-slate-900/30 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/50'
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => setExpandedTopic(isExpanded ? null : topic.id)}
                  className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${
                          topic.status === 'Published'
                            ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                            : topic.status === 'Under Review'
                            ? 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                            : 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                        }`}
                      >
                        {topic.status}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{topic.year}</span>
                      {topic.venue && (
                        <span className="text-xs text-slate-400 border-l border-slate-800 pl-2">
                          {topic.venue}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {topic.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cyan-400/90 font-mono">
                      {topic.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="text-xs text-slate-400 hidden sm:inline">
                      {isExpanded ? 'Collapse' : 'Read Abstract & Methods'}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 space-y-5 animate-in fade-in duration-200">
                    {/* Abstract */}
                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                        <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Abstract / Core Thesis</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {topic.abstract}
                      </p>
                    </div>

                    {/* Key Highlights / Contributions */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                        Key Research Contributions &amp; Experimental Findings
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {topic.highlights.map((h, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags & BibTeX Citation */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-slate-800/70">
                      <div className="flex flex-wrap gap-1.5">
                        {topic.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[11px] font-mono text-slate-400 bg-slate-800/50 border border-slate-700/60 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {topic.bibtex && (
                        <button
                          onClick={() => copyBibtex(topic.id, topic.bibtex!)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 border border-slate-700 transition-colors self-start sm:self-auto"
                        >
                          {copiedBibtex === topic.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-300">BibTeX Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-cyan-400" />
                              <span>Copy BibTeX Citation</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
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
