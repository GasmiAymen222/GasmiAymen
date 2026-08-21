import { useState } from 'react';
import {
  Brain,
  Server,
  Layout,
  Search,
  Sparkles,
  Code2,
  Database,
  Terminal,
  Compass,
  Cpu,
  Zap,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = skillCategories
    .map((category) => {
      const isCategoryMatch =
        selectedCategory === 'all' ||
        category.title.toLowerCase().includes(selectedCategory.toLowerCase());
      if (!isCategoryMatch) {
        return { ...category, skills: [] };
      }

      const filteredSkills = category.skills.filter((skill) => {
        const matchSearch =
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (skill.description &&
            skill.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
          category.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchSearch;
      });

      return { ...category, skills: filteredSkills };
    })
    .filter((category) => category.skills.length > 0);

  // Quick chips for core CV skills
  const featuredTechPills = [
    'Python',
    'LangChain & LangGraph',
    'FAISS & Semantic Search',
    'DeepSeek-R1',
    'Claude AI & Gemini',
    'Ollama',
    'FastAPI & Flask',
    'Node.js & Express.js',
    'React.js',
    'Flutter',
    'MySQL & MongoDB',
    'Git & VPS',
  ];

  const categoryTabList = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'programming', label: 'Programming' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai / rag', label: 'AI / RAG / NLP' },
    { id: 'agentic', label: 'Agentic AI' },
    { id: 'frontend', label: 'Frontend & Mobile' },
    { id: 'database', label: 'Databases' },
    { id: 'devops', label: 'DevOps & Tools' },
    { id: 'currently learning', label: 'Currently Learning' },
  ];

  const getCategoryIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('programming')) return Code2;
    if (t.includes('backend')) return Server;
    if (t.includes('ai / rag') || t.includes('nlp')) return Brain;
    if (t.includes('agentic')) return Sparkles;
    if (t.includes('frontend') || t.includes('mobile')) return Layout;
    if (t.includes('database')) return Database;
    if (t.includes('devops') || t.includes('tools')) return Terminal;
    if (t.includes('learning')) return Compass;
    return Cpu;
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#07090e]/40 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              <Zap className="w-3.5 h-3.5" />
              <span>02. CURRICULUM VITAE COMPETENCIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Technical Stack &amp; Skills
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Organized exactly in alignment with CV specifications spanning programming languages, backend architecture, AI &amp; RAG, Agentic AI, databases, DevOps, and currently expanding domains.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search (e.g. LangChain, Ollama, FastAPI, C++)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-12 py-2 bg-slate-900/90 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Featured quick badges strip */}
        <div className="mb-8 p-3.5 sm:p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-cyan-400 mr-2 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            Featured Skills:
          </span>
          {featuredTechPills.map((tech) => (
            <span
              key={tech}
              onClick={() => setSearchQuery(tech.split(' ')[0])}
              className="cursor-pointer px-3 py-1 text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-cyan-500/20 hover:text-cyan-300 border border-slate-700/80 hover:border-cyan-500/40 rounded-full transition-all"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categoryTabList.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                selectedCategory === tab.id
                  ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categories & Skill Cards Grid */}
        <div className="space-y-10">
          {filteredCategories.length === 0 ? (
            <div className="p-8 text-center bg-slate-900/30 rounded-xl border border-slate-800 text-slate-400 text-sm">
              No skills found matching &quot;{searchQuery}&quot;. Try searching for &quot;Python&quot;, &quot;LangChain&quot;, &quot;FastAPI&quot;, or &quot;MySQL&quot;.
            </div>
          ) : (
            filteredCategories.map((category, catIdx) => {
              const Icon = getCategoryIcon(category.title);
              const isCurrentlyLearning = category.title.toLowerCase().includes('learning');

              return (
                <div key={catIdx} className="space-y-4">
                  <div className="flex items-center gap-2.5 text-slate-200 border-b border-slate-800/80 pb-2.5">
                    <div
                      className={`p-1.5 rounded-md border ${
                        isCurrentlyLearning
                          ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                          : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-semibold tracking-tight text-white flex items-center gap-2">
                      <span>• {category.title}</span>
                      {isCurrentlyLearning && (
                        <span className="px-2 py-0.5 text-[10px] font-mono text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-md">
                          In Active Exploration
                        </span>
                      )}
                    </h3>
                    <span className="text-xs font-mono text-slate-400 ml-auto">
                      {category.skills.length} items
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {category.skills.map((skill, skillIdx) => (
                      <div
                        key={skillIdx}
                        className={`p-4 rounded-xl bg-slate-900/50 border transition-all group ${
                          isCurrentlyLearning
                            ? 'border-slate-800/90 hover:border-amber-500/40 hover:bg-slate-900/80'
                            : 'border-slate-800/90 hover:border-cyan-500/30 hover:bg-slate-900/80'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <h4 className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h4>
                          <span
                            className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded ${
                              isCurrentlyLearning
                                ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                                : skill.level === 'Expert'
                                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                                : 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30'
                            }`}
                          >
                            {isCurrentlyLearning ? 'Learning' : skill.level}
                          </span>
                        </div>

                        {skill.description && (
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
