import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Bot, 
  ShieldCheck, 
  Award, 
  Terminal, 
  Zap, 
  Users,
  Briefcase
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFEFE] text-slate-900 pb-20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-violet-100/50 via-teal-50/30 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-200/80 text-violet-800 text-xs sm:text-sm font-semibold shadow-xs">
            <Sparkles className="w-4 h-4 text-violet-600" />
            <span>Democratizing Experience for Young & Female Technologists</span>
          </div>

          {/* Clean Main Heading without underline lines */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-[1.15]">
            Gain Real-World Tech <br />
            <span className="bg-gradient-to-r from-violet-700 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
              Experience
            </span>{' '}
            Without Leaving Your Desk
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            SkillBridge AI provides realistic micro-internship simulations, automated senior-engineer code evaluations, and verifiable credentials for aspiring software leaders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/tracks"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-violet-700 hover:bg-violet-800 text-white font-black text-sm shadow-md hover:shadow-lg transition-all"
            >
              <span>Explore Simulation Tracks</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://www.linkedin.com/in/abeera-ejaz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-xs transition-colors"
            >
              <span>View Creator Profile</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm font-medium text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>100% Free & Open-Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Instant Gemini AI Code Review</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Verifiable Completion Certificates</span>
            </div>
          </div>

        </div>
      </section>

      {/* Feature Value Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-7 shadow-xs hover:shadow-md transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-700 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-slate-900">Dynamic Task Engine</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Gemini AI structures corporate engineering briefs, requirements, and constraints matching real-world expectations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-7 shadow-xs hover:shadow-md transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-slate-900">Automated Senior Review</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Submit your GitHub repository to receive architectural critiques, readiness scores, and instant resume bullet points.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-7 shadow-xs hover:shadow-md transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-black text-slate-900">Verified Cloud Credential</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Download high-resolution PDF certificates and export unique credential links directly onto your LinkedIn profile.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}