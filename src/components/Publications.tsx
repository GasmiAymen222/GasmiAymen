import { useState } from 'react';
import { BookOpen, FileText, ExternalLink, Download, Quote, Check } from 'lucide-react';
import { publications } from '../data/portfolioData';

export default function Publications() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Publications' },
    { id: 'Journal Publications', label: 'Journals' },
    { id: 'Conference Publications', label: 'Conferences' },
    { id: 'Preprints', label: 'Preprints' },
    { id: 'Work in Progress', label: 'Work in Progress' },
  ];

  const filteredPublications =
    selectedCategory === 'all'
      ? publications
      : publications.filter((p) => p.category === selectedCategory);

  const handleCopyBibtex = (id: string, bibtex?: string) => {
    if (!bibtex) {
      const pub = publications.find((p) => p.id === id);
      const generatedBib = `@article{gasmi${pub?.year || '2026'},\n  title={${pub?.title}},\n  author={${pub?.authors.join(' and ')}},\n  year={${pub?.year}},\n  note={${pub?.venue}}\n}`;
      navigator.clipboard.writeText(generatedBib);
    } else {
      navigator.clipboard.writeText(bibtex);
    }
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="publications" className="py-14 sm:py-16 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-1">
            Scholarly Output
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Publications
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Working papers, preprints, conference submissions, and journal drafts.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 font-semibold shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Publication Cards */}
        <div className="space-y-4">
          {filteredPublications.map((pub) => (
            <div
              key={pub.id}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 transition-colors shadow-2xs space-y-3"
            >
              {/* Card Header: Category & Year */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900">
                    {pub.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {pub.year}
                  </span>
                </div>

                {pub.statusTag && (
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                    {pub.statusTag}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {pub.title}
              </h3>

              {/* Authors List */}
              <div className="text-xs text-slate-600 dark:text-slate-300">
                {pub.authors.map((author, index) => {
                  const isAymen = author.toLowerCase().includes('aymen gasmi');
                  return (
                    <span key={index}>
                      <span className={isAymen ? 'font-bold text-slate-900 dark:text-white underline decoration-blue-500/50 underline-offset-2' : ''}>
                        {author}
                      </span>
                      {index < pub.authors.length - 1 && ', '}
                    </span>
                  );
                })}
              </div>

              {/* Venue */}
              <div className="text-xs text-slate-500 dark:text-slate-400 italic">
                {pub.venue}
              </div>

              {/* Publication Brief Inside Card */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <span className="font-semibold text-blue-700 dark:text-blue-400 block mb-1">
                  Brief Summary:
                </span>
                <p>{pub.brief}</p>
              </div>

              {/* Actions: Cite (BibTeX), Links */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                  {pub.doi ? (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>DOI</span>
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-400">DOI: Upcoming</span>
                  )}

                  {pub.pdfUrl ? (
                    <a
                      href={pub.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 dark:text-slate-200 hover:text-blue-600 flex items-center gap-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-400">PDF: Upcoming</span>
                  )}
                </div>

                <button
                  onClick={() => handleCopyBibtex(pub.id, pub.bibtex)}
                  className="inline-flex items-center gap-1 font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {copiedId === pub.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">BibTeX Copied</span>
                    </>
                  ) : (
                    <>
                      <Quote className="w-3.5 h-3.5" />
                      <span>Cite (BibTeX)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
