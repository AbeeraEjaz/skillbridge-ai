export const simulationTracks = [
  {
    id: 'frontend-react',
    title: 'Frontend Engineering: Eco-Donation Platform',
    category: 'Frontend Development',
    level: 'Intermediate',
    estimatedTime: '3–4 Hours',
    roleTitle: 'Junior Frontend Developer',
    company: 'VerdeEarth Global (Simulated NGO)',
    shortDesc: 'Build a high-converting, responsive micro-donation portal with currency toggle and form validation.',
    tags: ['React 19', 'Tailwind CSS', 'Form Handling', 'UI/UX'],
    overview: 'VerdeEarth requires a modern, responsive donation widget that allows contributors to select predefined tiers, toggle custom currencies, and receive a simulated tax-deductible receipt.',
    deliverables: [
      'Interactive Donation Tier Selector ($10, $25, $50, Custom)',
      'Currency switcher (USD, PKR, EUR) with live rate conversions',
      'Client-side form validation (Card details, Name, Email)',
      'Clean component modularity and responsive layout'
    ],
    starterAssets: {
      colorPalette: 'Emerald-600 (Primary), Slate-900 (Background), Amber-500 (Accents)',
      targetResolution: 'Mobile First (375px) to Desktop (1440px)',
      mockApiResponse: '{"status": "success", "transactionId": "TXN_99210", "timestamp": "2026-08-27T00:00:00Z"}'
    }
  },
  {
    id: 'ai-genai',
    title: 'GenAI Solutions: Career Guidance Bot',
    category: 'AI Engineering',
    level: 'Advanced',
    estimatedTime: '4–5 Hours',
    roleTitle: 'AI Solutions Engineer',
    company: 'ApexEd Innovation Labs',
    shortDesc: 'Integrate Gemini API with structured JSON output to build a specialized student roadmap assistant.',
    tags: ['Google Gemini API', 'Node.js', 'Prompt Engineering', 'REST APIs'],
    overview: 'ApexEd is launching an autonomous career navigator. You must write the prompt architecture and API integration to ingest student skills and output actionable 30-day milestone roadmaps.',
    deliverables: [
      'Integration with Google Gemini API with error handling',
      'Structured JSON output enforce (Schema: milestones, resources, skillsToLearn)',
      'Rate-limiting and fallback handler for API timeouts',
      'Input sanitization to prevent prompt injection'
    ],
    starterAssets: {
      requiredModel: 'gemini-1.5-flash',
      outputFormat: 'Strict JSON Schema',
      mockInputPayload: '{"currentEducation": "BSCS 3rd Year", "targetRole": "Cloud Engineer"}'
    }
  },
  {
    id: 'fullstack-mern',
    title: 'Full-Stack MERN: Community Skill Board',
    category: 'Full-Stack Architecture',
    level: 'Intermediate',
    estimatedTime: '5–6 Hours',
    roleTitle: 'Full-Stack Developer',
    company: 'CivicTech Foundation',
    shortDesc: 'Create a lightweight RESTful CRUD API and frontend board for youth to exchange local mentorship sessions.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    overview: 'A community empowerment board allowing students to post mentorship requests, filter by technical domain, and leave verified peer reviews.',
    deliverables: [
      'Express REST API with GET, POST, PUT, DELETE routes',
      'MongoDB Mongoose schema with validation for posts',
      'React frontend with stateful search and category filtering',
      'Environment variable protection (.env) for database URIs'
    ],
    starterAssets: {
      databaseTarget: 'MongoDB Atlas Free Tier',
      apiEndpoints: '/api/sessions (GET, POST), /api/sessions/:id (DELETE)',
      sampleRecord: '{"title": "Intro to Git & GitHub", "category": "Tech", "mentor": "Abeera"}'
    }
  },
  {
    id: 'uiux-design',
    title: 'UI/UX Design: Safe Commute Mobile Interface',
    category: 'Product Design',
    level: 'Beginner',
    estimatedTime: '2–3 Hours',
    roleTitle: 'Junior Product Designer',
    company: 'CitySafe Mobility',
    shortDesc: 'Design an intuitive 3-screen emergency safety and harassment reporting flow for women commuters.',
    tags: ['Figma / Tailwind', 'Accessibility', 'Mobile UX', 'User Journey'],
    overview: 'Create high-fidelity responsive screens for women commuters featuring 1-tap SOS triggers, live location sharing cards, and high-contrast night accessibility.',
    deliverables: [
      '3-Screen Mobile Flow (Route Planner, Active SOS, Safe Zone Map)',
      'High-contrast accessible color palette for night commuting',
      'Micro-interactions checklist and button touch targets >= 48px'
    ],
    starterAssets: {
      screenConstraints: '390px x 844px (iOS Standard)',
      primaryPalette: 'Deep Indigo (#1e1b4b), Coral Alert (#f43f5e), Mint Safe (#10b981)'
    }
  }
];