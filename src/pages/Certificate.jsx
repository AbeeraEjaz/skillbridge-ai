import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Download, 
  Share2, 
  Sparkles, 
  CheckCircle2, 
  ArrowLeft, 
  Award, 
  ShieldCheck,
  Printer,
  Copy,
  Check
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import confetti from 'canvas-confetti';

export default function Certificate() {
  const { certId } = useParams();
  const certificateRef = useRef(null);

  const [downloading, setDownloading] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [certData, setCertData] = useState({
    fullName: 'Abeera Ejaz',
    trackTitle: 'Full-Stack MERN Architecture: Community Skill Board',
    roleTitle: 'Full-Stack Software Engineer',
    company: 'CivicTech Foundation',
    score: 91,
    credentialId: certId || 'SB-' + Math.random().toString(36).substring(2, 9).toUpperCase(),
    issueDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  });

  useEffect(() => {
    // Load dynamic submission data if exists
    const saved = localStorage.getItem('currentSubmission');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCertData(prev => ({
          ...prev,
          fullName: parsed.fullName || prev.fullName,
          trackTitle: parsed.trackTitle || prev.trackTitle,
          roleTitle: parsed.roleTitle || prev.roleTitle,
          company: parsed.company || prev.company,
          score: parsed.evaluation?.score || 91,
          credentialId: parsed.submissionId ? parsed.submissionId.replace('sub_', 'SB-CERT-').toUpperCase() : prev.credentialId
        }));
      } catch (e) {
        console.error('Error loading submission for certificate', e);
      }
    }

    // Celebration Confetti
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch (e) {}
  }, [certId]);

  // PDF Download Handler
  const handleDownloadPDF = async () => {
    if (!certificateRef.current) return;
    setDownloading(true);

    try {
      const element = certificateRef.current;
      const canvas = await html2canvas(element, {
        scale: 2.5,
        useCORS: true,
        logging: false,
        backgroundColor: '#FFFFFF'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save(`SkillBridge_Certificate_${certData.fullName.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
      console.error('PDF Generation failed:', error);
      window.print();
    } finally {
      setDownloading(false);
    }
  };

  const handleCopyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 pb-24 font-sans">
      
      {/* Top Action Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/tracks"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="text-sm sm:text-base font-black text-slate-900">
                Verified Credential Studio
              </h1>
              <p className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Ready for PDF Export & LinkedIn
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyShareLink}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all shadow-xs"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Link Copied!' : 'Copy Verification Link'}</span>
            </button>

            <button
              onClick={handleDownloadPDF}
              disabled={downloading}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-violet-700 hover:bg-violet-800 text-white text-xs font-black shadow-md transition-all disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloading ? 'Exporting PDF...' : 'Download Official PDF'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-6">
        
        {/* Certificate Frame Preview */}
        <div className="overflow-x-auto pb-4 flex justify-center">
          <div
            ref={certificateRef}
            className="w-[920px] h-[640px] bg-[#FFFFFF] p-8 relative select-none shadow-2xl flex flex-col justify-between shrink-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 50% 50%, rgba(248, 250, 252, 0.95), #FFFFFF 85%),
                linear-gradient(to right, #f8fafc 1px, transparent 1px),
                linear-gradient(to bottom, #f8fafc 1px, transparent 1px)
              `,
              backgroundSize: '100% 100%, 30px 30px, 30px 30px'
            }}
          >
            {/* Outer Royal Border */}
            <div className="absolute inset-4 border-[3px] border-[#B45309] rounded-2xl pointer-events-none" />
            
            {/* Inner Delicate Inset Border */}
            <div className="absolute inset-6 border-[1px] border-[#D97706]/50 rounded-xl pointer-events-none" />

            {/* Corner Ornamental Accents */}
            <div className="absolute top-7 left-7 w-6 h-6 border-t-2 border-l-2 border-[#B45309]" />
            <div className="absolute top-7 right-7 w-6 h-6 border-t-2 border-r-2 border-[#B45309]" />
            <div className="absolute bottom-7 left-7 w-6 h-6 border-b-2 border-l-2 border-[#B45309]" />
            <div className="absolute bottom-7 right-7 w-6 h-6 border-b-2 border-r-2 border-[#B45309]" />

            {/* 1. CERTIFICATE HEADER */}
            <div className="text-center pt-4 z-10">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-violet-700 flex items-center justify-center text-white shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-sm font-black tracking-widest uppercase text-slate-800">
                  SkillBridge<span className="text-violet-700">.AI</span> Labs
                </span>
              </div>
              
              <h2 className="text-3xl font-black uppercase tracking-[0.25em] text-[#0F172A] font-serif mt-2">
                Certificate of Completion
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D97706] to-transparent mx-auto mt-2" />
              <p className="text-[11px] font-semibold tracking-widest text-[#B45309] uppercase mt-2">
                Verified Micro-Internship & Applied Engineering Simulation
              </p>
            </div>

            {/* 2. CANDIDATE & ACHIEVEMENT BODY */}
            <div className="text-center my-auto px-12 z-10 space-y-3">
              <p className="text-xs italic text-slate-500 font-serif">
                This credential is professionally presented to
              </p>

              {/* Candidate Name (Bold & Elegant) */}
              <h3 className="text-3xl sm:text-4xl font-black text-violet-950 font-serif tracking-tight border-b-2 border-slate-200 pb-2 inline-block px-8">
                {certData.fullName}
              </h3>

              <p className="text-xs text-slate-600 max-w-xl mx-auto leading-relaxed pt-1">
                for successfully building, testing, and defending industry-grade deliverables under simulated corporate constraints as a
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-900 text-xs font-bold">
                <Award className="w-3.5 h-3.5 text-violet-700" />
                <span>{certData.roleTitle}</span>
                <span className="text-slate-300">•</span>
                <span className="text-emerald-700 font-extrabold">{certData.score}/100 Senior AI Audit Score</span>
              </div>

              <p className="text-[12px] font-semibold text-slate-700 block">
                Project Focus: <span className="font-normal italic text-slate-800">"{certData.trackTitle}"</span>
              </p>
            </div>

            {/* 3. SIGNATURES & VERIFICATION SEAL */}
            <div className="px-10 pb-4 z-10 flex items-end justify-between border-t border-slate-100 pt-4">
              
              {/* Left: Platform Director Signature */}
              <div className="text-center w-48">
                <div className="font-serif italic text-base font-bold text-slate-800 border-b border-slate-400 pb-1">
                  Abeera Ejaz
                </div>
                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider mt-1">
                  Founder & Lead Architect
                </p>
                <p className="text-[9px] text-slate-400">SkillBridge AI Initiative</p>
              </div>

              {/* Center: Official Gold Emblem Seal */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#92400E] via-[#D97706] to-[#FDE68A] p-0.5 shadow-md flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#FFFBEB] border border-[#F59E0B] flex flex-col items-center justify-center p-1 text-center">
                    <ShieldCheck className="w-5 h-5 text-[#B45309]" />
                    <span className="text-[7px] font-black uppercase text-[#92400E] tracking-tighter">
                      Verified AI
                    </span>
                  </div>
                </div>
                <span className="text-[8px] font-mono text-slate-400 mt-1">AUTHENTICITY VALID</span>
              </div>

              {/* Right: Technical Lead / Verification ID */}
              <div className="text-center w-48">
                <div className="font-mono text-xs font-bold text-slate-800 border-b border-slate-400 pb-1">
                  {certData.credentialId}
                </div>
                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider mt-1">
                  Credential ID
                </p>
                <p className="text-[9px] text-slate-400">Issued on {certData.issueDate}</p>
              </div>

            </div>

          </div>
        </div>

        {/* Certificate Actions & LinkedIn Guide */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900">Add to LinkedIn Profile</h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Highlight your micro-internship under Licenses & Certifications on LinkedIn.
            </p>
          </div>

          <a
            href={`https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(certData.roleTitle + ' Simulation')}&organizationName=${encodeURIComponent('SkillBridge AI')}&issueYear=${new Date().getFullYear()}&issueMonth=${new Date().getMonth() + 1}&certUrl=${encodeURIComponent(window.location.href)}&certId=${certData.credentialId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold shadow-xs transition-colors whitespace-nowrap"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span>Add to LinkedIn</span>
          </a>
        </div>

      </div>

    </div>
  );
}