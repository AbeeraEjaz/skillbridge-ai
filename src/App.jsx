import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Real Pages
import Home from './pages/Home';
import Tracks from './pages/Tracks';
import Workspace from './pages/Workspace';
import ReviewResult from './pages/ReviewResult';
import Certificate from './pages/Certificate';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#FDFEFE] text-slate-900 font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracks" element={<Tracks />} />
            <Route path="/workspace/:trackId" element={<Workspace />} />
            <Route path="/review/:submissionId" element={<ReviewResult />} />
            <Route path="/certificate/:certId" element={<Certificate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}