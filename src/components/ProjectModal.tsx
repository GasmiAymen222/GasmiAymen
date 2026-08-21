import { useState } from 'react';
import { X, Github, ExternalLink, Play, CheckCircle2, Terminal, Sparkles, Layers, ArrowRight, Shield, Cpu, RefreshCw } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  // Interactive state for different demo types
  const [ragQuery, setRagQuery] = useState('What mechanisms prevent hallucination in multi-hop RAG?');
  const [ragRunning, setRagRunning] = useState(false);
  const [ragResult, setRagResult] = useState<{
    answer: string;
    citations: string[];
    retrievedChunks: { source: string; score: number; text: string }[];
    latency: string;
  } | null>(null);

  // NER state
  const [nerText, setNerText] = useState('Patient presented with acute bronchitis and hypertension. Prescribed Azithromycin 500mg daily and Lisinopril 10mg.');
  const [nerRunning, setNerRunning] = useState(false);
  const [nerTokens, setNerTokens] = useState<{ text: string; tag?: string; color?: string }[] | null>(null);

  // Agent state
  const [agentRunning, setAgentRunning] = useState(false);
  const [agentLogs, setAgentLogs] = useState<string[]>([]);

  // API Bench state
  const [benchRunning, setBenchRunning] = useState(false);
  const [benchStats, setBenchStats] = useState<{ reqCount: number; p95: string; cacheHits: number } | null>(null);

  const handleRunRAG = () => {
    setRagRunning(true);
    setRagResult(null);
    setTimeout(() => {
      setRagResult({
        answer:
          'Hallucination in multi-hop RAG is prevented through hybrid dense-sparse reciprocal rank fusion (RRF) coupled with a token-level cross-attention attribution layer that mathematically checks generated output tokens against retrieved source spans before streaming.',
        citations: ['Doc: Enterprise_RAG_Architecture.pdf §4.2', 'Doc: Cross_Encoder_Attribution.pdf §1.1'],
        retrievedChunks: [
          {
            source: 'Enterprise_RAG_Architecture.pdf',
            score: 0.94,
            text: 'Dense vector embeddings capture semantic intent while BM25 enforces exact keyword preservation, passing candidates to cross-encoder rerankers.',
          },
          {
            source: 'Cross_Encoder_Attribution.pdf',
            score: 0.91,
            text: 'Token attribution calculates integrated gradients between generated tokens and context passages to score factual fidelity.',
          },
        ],
        latency: '38ms',
      });
      setRagRunning(false);
    }, 700);
  };

  const handleRunNER = () => {
    setNerRunning(true);
    setNerTokens(null);
    setTimeout(() => {
      setNerTokens([
        { text: 'Patient' },
        { text: 'presented' },
        { text: 'with' },
        { text: 'acute bronchitis', tag: 'DISEASE/PATHOLOGY', color: 'text-amber-300 bg-amber-500/20 border-amber-500/40' },
        { text: 'and' },
        { text: 'hypertension', tag: 'DISEASE/PATHOLOGY', color: 'text-amber-300 bg-amber-500/20 border-amber-500/40' },
        { text: '. Prescribed' },
        { text: 'Azithromycin 500mg', tag: 'MEDICATION_DOSAGE', color: 'text-emerald-300 bg-emerald-500/20 border-emerald-500/40' },
        { text: 'daily and' },
        { text: 'Lisinopril 10mg', tag: 'MEDICATION_DOSAGE', color: 'text-emerald-300 bg-emerald-500/20 border-emerald-500/40' },
        { text: '.' },
      ]);
      setNerRunning(false);
    }, 600);
  };

  const handleRunAgent = () => {
    setAgentRunning(true);
    setAgentLogs([]);
    const steps = [
      '→ [PlannerAgent] Reading repository AST and building execution graph...',
      '→ [SecurityAgent] Flagging unescaped raw query in db/connection.py:120',
      '→ [PatchAgent] Generating parameterized prepared statement patch...',
      '→ [SandboxAgent] Running test suite in isolated container: 32 tests passed (0 failures)',
      '✓ [ReviewAgent] Audit approved! Synthesizing changelog and PR summary.',
    ];
    steps.forEach((step, idx) => {
      setTimeout(() => {
        setAgentLogs((prev) => [...prev, step]);
        if (idx === steps.length - 1) setAgentRunning(false);
      }, (idx + 1) * 400);
    });
  };

  const handleRunBench = () => {
    setBenchRunning(true);
    setBenchStats(null);
    setTimeout(() => {
      setBenchStats({
        reqCount: 5000,
        p95: '12.4ms',
        cacheHits: 1720,
      });
      setBenchRunning(false);
    }, 650);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl my-8 bg-[#0d1117] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-200">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {project.categoryLabel}
            </span>
            <h3 className="text-lg font-bold text-white truncate max-w-md">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Overview</h4>
            <p className="text-slate-300 text-sm leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Architecture Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Engineering Architecture Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.architectureHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Simulation Sandbox */}
          <div className="p-5 rounded-xl bg-slate-950/90 border border-slate-800">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono uppercase font-semibold text-slate-200">
                  Interactive Live Demo &amp; Logic Simulation
                </span>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                Live Prototype Mode
              </span>
            </div>

            {/* RAG Demo */}
            {project.demoType === 'rag-query' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Test RAG Query Prompt:</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={ragQuery}
                      onChange={(e) => setRagQuery(e.target.value)}
                      className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                    <button
                      onClick={handleRunRAG}
                      disabled={ragRunning}
                      className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      {ragRunning ? 'Retrieving...' : 'Execute RAG'}
                    </button>
                  </div>
                </div>

                {ragResult && (
                  <div className="space-y-3 pt-2 animate-in fade-in">
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs">
                      <div className="flex items-center justify-between text-cyan-400 font-mono text-[11px] mb-1">
                        <span>Generated Answer (Verified Attribution)</span>
                        <span className="text-slate-500">Latency: {ragResult.latency}</span>
                      </div>
                      <p className="text-slate-200 leading-relaxed">{ragResult.answer}</p>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[11px] font-mono text-slate-400">Top Dense-Sparse Retrieved Chunks:</span>
                      {ragResult.retrievedChunks.map((chunk, idx) => (
                        <div key={idx} className="p-2.5 bg-slate-900/50 rounded border border-slate-800 text-[11px]">
                          <div className="flex justify-between text-slate-400 font-mono mb-1">
                            <span className="text-cyan-300">{chunk.source}</span>
                            <span className="text-emerald-400">Fidelity Score: {chunk.score}</span>
                          </div>
                          <p className="text-slate-300">{chunk.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* BERT NER Demo */}
            {project.demoType === 'bert-ner' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Clinical Note Input:</label>
                  <textarea
                    rows={2}
                    value={nerText}
                    onChange={(e) => setNerText(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    onClick={handleRunNER}
                    disabled={nerRunning}
                    className="mt-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    {nerRunning ? 'Extracting Entities...' : 'Run BioBERT NER'}
                  </button>
                </div>

                {nerTokens && (
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs leading-loose">
                    <span className="block font-mono text-[11px] text-slate-400 mb-2">Token Classification Output:</span>
                    <div className="flex flex-wrap gap-1.5 items-center">
                      {nerTokens.map((t, idx) =>
                        t.tag ? (
                          <span
                            key={idx}
                            className={`px-2 py-0.5 rounded border text-xs font-mono font-medium ${t.color}`}
                          >
                            {t.text}{' '}
                            <span className="text-[9px] opacity-80 uppercase tracking-tight">[{t.tag}]</span>
                          </span>
                        ) : (
                          <span key={idx} className="text-slate-300">
                            {t.text}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Multi-Agent Demo */}
            {project.demoType === 'agent-run' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300">Target Repo: <code className="text-cyan-400 font-mono">auth_service/src</code></span>
                  <button
                    onClick={handleRunAgent}
                    disabled={agentRunning}
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    {agentRunning ? 'Agents Running...' : 'Launch Agent Flow'}
                  </button>
                </div>

                <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 font-mono text-[11px] min-h-[110px] space-y-1">
                  {agentLogs.length === 0 ? (
                    <span className="text-slate-500">Click &quot;Launch Agent Flow&quot; to execute the multi-agent review graph.</span>
                  ) : (
                    agentLogs.map((log, idx) => (
                      <div key={idx} className={log.includes('✓') ? 'text-emerald-400' : 'text-cyan-300'}>
                        {log}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* API Bench Demo */}
            {project.demoType === 'api-bench' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300">Target Endpoint: <code className="text-cyan-400 font-mono">POST /v1/chat/stream</code></span>
                  <button
                    onClick={handleRunBench}
                    disabled={benchRunning}
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${benchRunning ? 'animate-spin' : ''}`} />
                    {benchRunning ? 'Benchmarking...' : 'Simulate 5,000 Req Load'}
                  </button>
                </div>

                {benchStats && (
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-center">
                      <div className="text-xs text-slate-400">Total Requests</div>
                      <div className="text-base font-bold font-mono text-cyan-400">{benchStats.reqCount}</div>
                    </div>
                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-center">
                      <div className="text-xs text-slate-400">P95 Latency</div>
                      <div className="text-base font-bold font-mono text-emerald-400">{benchStats.p95}</div>
                    </div>
                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-center">
                      <div className="text-xs text-slate-400">Cache Hits</div>
                      <div className="text-base font-bold font-mono text-purple-400">{benchStats.cacheHits} (34.4%)</div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Mobile Mock Demo */}
            {project.demoType === 'mobile-mock' && (
              <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 text-center space-y-2">
                <div className="text-xs font-mono text-cyan-400">Cross-Platform Flutter &amp; Dart Architecture</div>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Utilizes BLoC pattern with offline-first SQLite synchronization, biometric security, and responsive UI components across iOS and Android.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 text-emerald-300 text-xs font-mono rounded">
                  ✓ 99.9% Crash-Free Session Reliability
                </div>
              </div>
            )}
          </div>

          {/* Links & Close */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source on GitHub</span>
              </a>
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-semibold rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Live App URL</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium rounded-lg transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
