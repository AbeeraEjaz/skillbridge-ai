import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Briefcase, 
  Bot, 
  Code2, 
  Cpu, 
  Layers, 
  Palette,
  Search
} from 'lucide-react';

export default function Tracks() {
  const navigate = useNavigate();
  const [quickPrompt, setQuickPrompt] = useState('');

  // Pre-configured inspiration tracks that directly trigger Gemini
  const promptTemplates = [
    {
      id: 'frontend',
      category: 'Frontend Engineering',
      title: 'Responsive Web Platform with Live API',
      tech: 'React, Tailwind CSS, REST APIs',
      duration: '3–4 Hours',
      icon: Code2,
      color: 'bg-violet-50 text-violet-700 border-violet-200',
      samplePrompt: 'Build a modern responsive non-profit donation platform in React with live currency conversion and form validation'
    },
    {
      id: 'ai-genai',
      category: 'GenAI Engineering',
      title: 'Autonomous Gemini Career Assistant Bot',
      tech: 'Google Gemini API, Structured JSON, Node.js',
      duration: '4–5 Hours',
      icon: Cpu,
      color: 'bg-teal-50 text-teal-700 border-teal-200',
      samplePrompt: 'Create an intelligent student career roadmap assistant using Google Gemini API with strict JSON schema outputs'
    },
    {
      id: 'fullstack',
      category: 'Full-Stack Architecture',
      title: 'MERN Community Skill Exchange Portal',
      tech: 'MongoDB, Express, React, Node.js',
      duration: '5–6 Hours',
      icon: Layers,
      color: 'bg-sky-50 text-sky-700 border-sky-200',
      samplePrompt: 'Develop a full-stack MERN community skill board with CRUD operations, search filters, and protected endpoints'
    },
    {
      id: 'uiux',
      category: 'Product Design & UX',
      title: 'High-Contrast Safe Commute Interface',
      tech: 'Mobile UI/UX, Accessibility, Tailwind',
      duration: '2–3 Hours',
      icon: Palette,
      color: 'bg-rose-50 text-rose-700 border-rose-200',
      samplePrompt: 'Design a high-contrast emergency safety and route navigation interface for women commuters with 1-tap alerts'
    }
  ];

  // Handle direct custom prompt submission
  const handleStartCustom = (e) => {
    e.preventDefault();
    if (!quickPrompt.trim()) return;
    localStorage.setItem('preset_prompt', quickPrompt);
    navigate('/workspace/custom');
  };

  // Handle 1-click template selection
  const handleSelectTemplate = (templatePrompt) => {
    localStorage.setItem('preset_prompt', templatePrompt);
    navigate('/workspace/custom');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 bg-[#FDFEFE] text-slate-900">
      
      {/* 1. TOP AI PROMPT LAUNCHER */}
      <div className="bg-gradient-to-r from-violet-800 via-indigo-800 to-violet-900 rounded-3xl p-8 sm:p-10 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-violet-200 text-xs font-bold uppercase tracking-wider">
            <Bot className="w-4 h-4 text-teal-300" />
            <span>100% Dynamic Gemini Generator</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Launch Your Custom Micro-Internship Simulation
          </h1>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Type any stack or domain you want to practice. Gemini AI will generate a complete corporate client brief, task checklist, and evaluate your GitHub code.
          </p>

          {/* Quick Custom Input Bar */}
          <form onSubmit={handleStartCustom} className="pt-2 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <Search className="w-4 h-4 absolute left-4 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="e.g. Python scraper, React dashboard, AI chatbot..."
                value={quickPrompt}
                onChange={(e) => setQuickPrompt(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-sm shadow-md transition-all whitespace-nowrap flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate AI Brief</span>
            </button>
          </form>
        </div>
      </div>

      {/* 2. INSPIRATION TEMPLATES */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xs font-black uppercase tracking-wider text-violet-700">Need Inspiration?</h2>
          <p className="text-2xl font-black text-slate-900 mt-1">One-Click Simulation Templates</p>
          <p className="text-xs text-slate-600">Click any track below to have Gemini dynamically generate that specific challenge.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promptTemplates.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => handleSelectTemplate(item.samplePrompt)}
                className="bg-white rounded-2xl border-2 border-slate-100 hover:border-violet-300 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> {item.duration}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className={`p-2.5 rounded-xl border ${item.color} mt-1`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-violet-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-medium">
                        <strong>Tech Focus:</strong> {item.tech}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-violet-700">
                  <span>Generate with Gemini AI</span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Start Challenge <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}