import { ExternalLink, BookOpen, Fingerprint, Github, Linkedin, Network, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { academicProfiles } from '../data/portfolioData';

export default function AcademicProfiles() {
  const [copiedIdentifier, setCopiedIdentifier] = useState<string | null>(null);

  const getProfileIcon = (platform: string) => {
    switch (platform) {
      case 'Google Scholar':
        return BookOpen;
      case 'ORCID':
        return Fingerprint;
      case 'ResearchGate':
        return Network;
      case 'GitHub':
        return Github;
      case 'LinkedIn':
        return Linkedin;
      default:
        return ExternalLink;
    }
  };

  const copyId = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIdentifier(id);
    setTimeout(() => setCopiedIdentifier(null), 2500);
  };

  return (
    <section id="profiles" className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Academic Presence
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Academic Profiles &amp; Networks
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Scholarly identifiers, digital repositories, research networks, and codebases.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {academicProfiles.map((profile) => {
            const Icon = getProfileIcon(profile.platform);
            return (
              <div
                key={profile.name}
                className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-400 border border-blue-200/60 dark:border-blue-900">
                      <Icon className="w-5 h-5" />
                    </div>
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 p-1"
                      aria-label={`Visit ${profile.name}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                      {profile.name}
                    </h3>
                    {profile.identifier && (
                      <div className="text-xs font-mono text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {profile.identifier}
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {profile.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <span>Visit Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  {profile.identifier && (
                    <button
                      onClick={() => copyId(profile.name, profile.identifier!)}
                      title="Copy identifier"
                      className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1"
                    >
                      {copiedIdentifier === profile.name ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
