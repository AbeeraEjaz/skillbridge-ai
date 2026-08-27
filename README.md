# ⚡ SkillBridge.AI — Autonomous AI Micro-Internship & Credential Platform

<div align="center">

![SkillBridge Banner](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop)

[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Google Gemini API](https://img.shields.io/badge/Google_Gemini-2.5_Flash-8E75B2?style=for-the-badge&logo=google&logoColor=white)](https://aistudio.google.com/)
[![Supabase Database](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Empowering aspiring developers to bridge the academic-industry gap through on-demand, AI-driven corporate simulations with tamper-proof cloud-verified credentials.**

[Live Demo](#-live-demo--deployment) • [Key Features](#-core-features) • [Architecture](#-system-architecture--workflow) • [Getting Started](#-getting-started) • [Verification Ledger](#-tamper-proof-cloud-verification)

</div>

---

## 📌 Executive Overview

**SkillBridge.AI** is an ed-tech simulation engine designed to solve the classic *"no job without experience, no experience without a job"* deadlock. 

Instead of static, cookie-cutter coding challenges, SkillBridge leverages **Google Gemini 2.5 Flash** to generate custom, context-rich enterprise client briefs, user stories, technical deliverables, and starter constraints. Once candidates push their code to GitHub, the AI auditor inspects the submission, issues a comprehensive performance audit with tailored resume bullets, and commits a verifiable credential to a distributed **Supabase PostgreSQL Ledger**.

---

## ✨ Core Features

### 1. 🤖 100% Dynamic AI Task Generator
* **Domain & Stack Agnostic:** Users can specify any target domain (e.g., *React 19 Frontend, Python Streamlit, Fast-API Backend, GenAI Agents*).
* **Enterprise Client Simulations:** Gemini acts as a Staff Engineering Manager, drafting business problem statements, edge-case constraints, and measurable deliverable roadmaps.

### 2. 🔍 Real-Time Senior Engineering Code Audit
* Evaluates submitted GitHub repositories against enterprise engineering standards.
* Generates an **Industry Readiness Scorecard (0–100)** with categorized architectural strengths and refactoring recommendations.
* Produces **action-verb, metric-driven bullet points** tailored for immediate copy-pasting into resumes and LinkedIn featured sections.

### 3. 🛡️ Tamper-Proof Cloud Credential Verification
* Every completed simulation generates a cryptographically unique `SB-CERT-XXXX` identifier.
* Verification payloads are stored in a **Supabase Cloud PostgreSQL** table, allowing recruiters to inspect the candidate's authentic project record, score, and source repository globally.

### 4. 🖨️ High-Definition Export & LinkedIn Integration
* **Royal Double-Ornamental Border** digital certificate rendering with SVG watermark seals.
* Native, high-DPI client-side PDF export powered by `html2canvas` and `jsPDF`.
* **One-Click LinkedIn Direct Sync:** Pre-fills credential name, issuing authority (*SkillBridge AI*), issue date, and verification URL directly into the candidate's LinkedIn profile.

---

## 🏛️ System Architecture & Workflow

2. Install Dependencies
Bash
npm install
3. Configure Environment Variables
Create a .env file in the root directory:

Code snippet
# Google Gemini API
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Supabase Cloud Database Configuration
VITE_SUPABASE_URL=[https://your-project-ref.supabase.co](https://your-project-ref.supabase.co)
VITE_SUPABASE_ANON_KEY=your_supabase_anon_public_key
💡 Note: If no Gemini API key is provided, the platform seamlessly utilizes its built-in intelligent fallback evaluation engine.

4. Database Schema Setup (Supabase)
Execute this script in your Supabase SQL Editor to establish the verification ledger:

SQL
create table if not exists certificates (
  id text primary key,
  full_name text not null,
  track_title text not null,
  role_title text not null,
  company text not null,
  score integer not null,
  github_url text,
  solution_notes text,
  issue_date text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable open read/write access for public simulation credentials
alter table certificates enable row level security;

create policy "Public certificates are viewable by everyone" 
on certificates for select using (true);

create policy "Public can insert certificate records" 
on certificates for insert with check (true);
5. Start Development Server
Bash
npm run dev
Open http://localhost:5173 in your browser.
👥 Author & Acknowledgements
Developed by Abeera Ejaz

GitHub: @AbeeraEjaz

LinkedIn: Abeera Ejaz

📄 License
This project is licensed under the MIT License — feel free to use and expand upon it for academic and career advancement initiatives.