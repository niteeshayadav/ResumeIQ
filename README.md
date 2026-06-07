# 🧠 ResumeIQ — AI-Powered Resume Analyzer

<p align="center">
  <img src="./screenshots/banner.png" alt="ResumeIQ Banner" width="100%"/>
</p>

<h3 align="center">Upload · Analyze · Get Interview Ready</h3>

<p align="center">
  ResumeIQ is a full-stack AI application that analyzes your resume against a specific job role, generates an ATS compatibility score, and delivers personalized, actionable feedback — powered by Google Gemini 2.5 Flash.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Express.js-5-black?style=for-the-badge&logo=express"/>
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Google_Gemini-2.5_Flash-4285F4?style=for-the-badge&logo=google&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/License-ISC-lightgrey?style=for-the-badge"/>
</p>

---

## 🌟 Live Demo

🔗 **Live Application:** https://resumeiq-insights.vercel.app

---

## 📖 Overview

Most resumes never reach a human recruiter.

Before anyone reads your resume, it passes through an **Applicant Tracking System (ATS)** — software that automatically filters candidates based on keywords, formatting, and role relevance. Studies suggest that **over 75% of resumes are rejected by ATS before a recruiter ever sees them.**

Even when resumes do reach recruiters, the average review time is **6–8 seconds.**

**ResumeIQ** was built to solve both of these problems.

Upload your resume as a PDF, tell ResumeIQ what role you're targeting, and receive a comprehensive AI-powered analysis in seconds — including your ATS compatibility score, detected strengths and weaknesses, missing skills, and concrete improvement suggestions.

> 💡 Your resume is **never stored**. Text is extracted in-memory and discarded immediately after analysis.

---

## ✨ Features

### 🤖 AI-Powered Resume Analysis
Leverages **Google Gemini 2.5 Flash** to intelligently evaluate your resume content against industry benchmarks and role-specific hiring expectations. Analysis is grounded in your actual resume content — no generic feedback.

---

### 📊 ATS Compatibility Score
Generates a **0–100 ATS score** that reflects how well your resume aligns with the filters modern Applicant Tracking Systems use for your target role. The score is broken down into three sub-metrics:

- **Keyword Optimization** — presence of role-relevant terms
- **Formatting & Parseability** — ATS readability
- **Section Completeness** — coverage of expected resume sections

---

### 💪 Strength Detection
Identifies the **4 strongest aspects** of your resume based on its actual content — not generic compliments. This could include your project quality, technical depth, certifications, or relevant experience.

---

### ⚠️ Weakness Analysis
Pinpoints the **4 most critical gaps** that could hurt your chances, such as:
- Missing quantified achievements
- Weak or vague project descriptions
- Absence of relevant keywords
- Formatting issues that confuse parsers

---

### 🛠️ Missing Skills Detection
Compares your resume against your target role and surfaces **4 key skills or technologies** recruiters expect to see but couldn't find. Example:

| Target Role | Missing Skills Detected |
|---|---|
| Full Stack Developer | Docker, TypeScript, CI/CD, Redis |
| Backend Developer | System Design, gRPC, Kafka, PostgreSQL |
| Frontend Developer | Accessibility (a11y), Testing (Jest/RTL), Storybook, SSR |

---

### 🎯 Actionable Suggestions
Provides **4 specific, implementable improvements** — not vague advice. Each suggestion is under 15 words and directly tied to what's missing or weak in your resume.

---

### 🎨 Role-Aware, Context-Sensitive Analysis
Analysis is fully customized based on three inputs:

| Input | Options |
|---|---|
| **Job Role** | Any role — typed by the user |
| **Job Type** | Internship · Full-Time |
| **Experience Level** | Student · Fresher · 1–2 Years · 3–5 Years |

A "Student" targeting an "Internship" for "Frontend Developer" receives a completely different analysis than a "Fresher" targeting a "Full-Time" "Backend Developer" role.

---

### 📄 PDF Resume Upload
Secure in-browser PDF upload handled by **Multer** on the backend. Text is extracted using **pdf-parse** with zero file persistence — your data never touches a database.

---

### ⚡ Modern Responsive UI
Built with **React 19**, **Tailwind CSS v4**, and **Vite** — fast, responsive, and accessible across desktop and mobile.

---

## 🖼️ Screenshots

### 🏠 Landing Page
<img src="./screenshots/home.png" alt="Home Page" width="100%"/>

---

### 📤 Resume Upload
<img src="./screenshots/upload.png" alt="Upload Page" width="100%"/>

---

### 📈 Analysis Dashboard
<img src="./screenshots/analysis.png" alt="Analysis Dashboard" width="100%"/>

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     User (Browser)                      │
│                React 19 + Vite Frontend                 │
│                                                         │
│   UploadResume.jsx  ──►  FormData (PDF + job metadata)  │
└────────────────────────────┬────────────────────────────┘
                             │  POST /api/resume/analyze
                             │  multipart/form-data
                             ▼
┌─────────────────────────────────────────────────────────┐
│                  Express 5 Backend                      │
│                                                         │
│  upload.middleware.js  →  Multer buffers PDF in-memory  │
│  resume.controller.js  →  Orchestrates the pipeline     │
│                                                         │
│         ┌──────────────────┬──────────────────┐         │
│         ▼                  ▼                  │         │
│   pdf.service.js    gemini.service.js         │         │
│   (pdf-parse)       (Gemini 2.5 Flash)        │         │
│   Extract text      Build prompt +            │         │
│   from buffer       call Gemini API           │         │
│         │                  │                  │         │
│         └──────────────────┘                  │         │
│                    ▼                           │         │
│           Parse JSON response                 │         │
│           { atsScore, strengths,              │         │
│             weaknesses, missingSkills,        │         │
│             suggestions }                     │         │
└────────────────────────────┬────────────────────────────┘
                             │  JSON Response
                             ▼
┌─────────────────────────────────────────────────────────┐
│                  Analysis Dashboard                     │
│                                                         │
│   ATSScoreCard.jsx    →  Circular score + progress bars │
│   StrengthsList.jsx   →  4 detected strengths           │
│   WeaknessList.jsx    →  4 identified gaps              │
│   MissingSkills.jsx   →  4 missing technologies         │
│   Suggestions.jsx     →  4 improvement actions          │
└─────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| React Router DOM | v7 | Client-side routing |
| Tailwind CSS | v4 | Utility-first styling |
| Vite | v8 | Build tool & dev server |
| Axios | ^1.17.0 | HTTP client |
| Lucide React | ^1.17.0 | Icon library |
| React Hot Toast | ^2.6.0 | Toast notifications |

### Backend

| Technology | Version | Purpose |
|---|---|---|
| Node.js | v18+ | Runtime |
| Express | v5 | Web framework |
| Multer | ^2.1.1 | Multipart file upload |
| pdf-parse | ^2.4.5 | PDF text extraction |
| Axios | ^1.17.0 | Gemini API calls |
| dotenv | ^17.4.2 | Environment config |
| CORS | ^2.8.6 | Cross-origin requests |

### AI

| Service | Model | Purpose |
|---|---|---|
| Google Gemini | 2.5 Flash | Resume analysis + JSON generation |

---

## 📂 Folder Structure

```
ResumeIQ/
│
├── Backend/
│   ├── server.js                        # Entry point, starts Express server
│   ├── .env                             # Environment variables (not committed)
│   ├── package.json
│   └── src/
│       ├── app.js                       # Express app, middleware setup, CORS
│       ├── controllers/
│       │   └── resume.controller.js     # Request handler, orchestrates pipeline
│       ├── middlewares/
│       │   └── upload.middleware.js     # Multer config for in-memory PDF buffer
│       ├── routes/
│       │   └── resume.routes.js         # POST /api/resume/analyze
│       └── services/
│           ├── gemini.service.js        # Gemini prompt engineering + API call
│           └── pdf.service.js           # PDF text extraction via pdf-parse
│
├── Frontend/
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── src/
│       ├── App.jsx                      # Route definitions
│       ├── main.jsx                     # React DOM render
│       ├── index.css
│       ├── components/
│       │   ├── ATSScoreCard.jsx         # Circular SVG score + breakdown bars
│       │   ├── Loader.jsx               # Full-page loading state
│       │   ├── MissingSkills.jsx        # Missing skills display
│       │   ├── StrengthsList.jsx        # Detected strengths
│       │   ├── Suggestions.jsx          # Improvement suggestions
│       │   └── WeaknessList.jsx         # Weakness display
│       ├── pages/
│       │   ├── Home.jsx                 # Landing page
│       │   ├── UploadResume.jsx         # PDF upload + job details form
│       │   ├── AnalyzeResume.jsx        # Full analysis results dashboard
│       │   ├── Features.jsx             # Features overview page
│       │   ├── About.jsx                # About page
│       │   └── LearnMore.jsx            # How it works page
│       └── services/
│           ├── api.js                   # Axios base instance
│           └── resumeService.js         # uploadResume() API call
│
└── screenshots/
    ├── home.png
    ├── upload.png
    └── analysis.png
```

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js v18 or higher
- A [Google Gemini API key](https://aistudio.google.com/app/apikey) — free tier available

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/niteeshayadav/ResumeIQ.git
cd ResumeIQ
```

---

### 2️⃣ Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file inside `Backend/`:

```env
PORT=3000
GEMINI_API_KEY=your_gemini_api_key_here
CLIENT_URL=http://localhost:5173
```

Start the backend:

```bash
# Development — auto-reload with nodemon
npm run dev

# Production
npm start
```

Server runs at: `http://localhost:3000`

---

### 3️⃣ Frontend Setup

```bash
cd ../Frontend
npm install
npm run dev
```

App runs at: `http://localhost:5173`

---

## 🔄 How It Works

```
Step 1 — Upload Resume
        User uploads a PDF resume via the drag-and-drop interface.
        ⬇
Step 2 — Provide Job Details
        User enters target job role, selects job type and experience level.
        ⬇
Step 3 — Send to Backend
        Frontend sends FormData (PDF + metadata) to POST /api/resume/analyze.
        ⬇
Step 4 — Extract Resume Text
        Multer buffers the PDF in memory. pdf-parse extracts clean plain text.
        ⬇
Step 5 — Build Gemini Prompt
        gemini.service.js constructs a structured prompt with the resume text,
        role, job type, and experience level, instructing Gemini to return
        strict JSON with atsScore, strengths, weaknesses, missingSkills,
        and suggestions.
        ⬇
Step 6 — Gemini AI Analysis
        Google Gemini 2.5 Flash processes the prompt with responseMimeType
        set to application/json to guarantee structured output.
        ⬇
Step 7 — Parse & Return
        Backend parses the JSON, validates it, and returns it to the frontend.
        ⬇
Step 8 — Render Dashboard
        React renders the full analysis: ATS score card, circular progress,
        breakdown bars, strengths, weaknesses, missing skills, suggestions.
```

---

## 📊 API Reference

### `POST /api/resume/analyze`

Analyzes a PDF resume against a target job role using Gemini AI.

**Request** — `multipart/form-data`

| Field | Type | Required | Description |
|---|---|---|---|
| `resume` | File | ✅ | PDF resume file |
| `jobRole` | String | ✅ | Target role (e.g. `"Full Stack Developer"`) |
| `jobType` | String | ✅ | `"Internship"` or `"Full-Time"` |
| `experience` | String | ✅ | `"Student"` · `"Fresher"` · `"1 - 2 Years"` · `"3 - 5 Years"` |

**Success Response** — `200 OK`

```json
{
  "success": true,
  "analysis": {
    "atsScore": 78,
    "strengths": [
      "Strong MERN stack project portfolio",
      "Clear technical skills section",
      "Relevant academic coursework listed",
      "Consistent resume formatting"
    ],
    "weaknesses": [
      "No quantified achievements in projects",
      "Missing testing experience",
      "Weak action verbs in bullet points",
      "No mention of deployment or DevOps"
    ],
    "missingSkills": [
      "Docker",
      "TypeScript",
      "CI/CD",
      "Jest"
    ],
    "suggestions": [
      "Add measurable outcomes to every project bullet",
      "Include a testing tools section or project",
      "Replace weak verbs with built, engineered, reduced",
      "Mention deployment platforms like Vercel or Render"
    ]
  }
}
```

**Error Response** — `400 / 500`

```json
{
  "success": false,
  "message": "Please upload resume"
}
```

---

## 🔐 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `PORT` | No | Server port (default: `3000`) |
| `GEMINI_API_KEY` | ✅ | Google Gemini API key |
| `CLIENT_URL` | No | Frontend origin for CORS (default: `http://localhost:5173`) |

---

## 🎯 Use Cases

### 🎓 Students
Prepare ATS-optimized resumes before campus placements and internship drives.

### 👨‍💻 Freshers
Identify and close skill gaps before applying to entry-level roles.

### 💼 Professionals
Tailor existing resumes to specific roles during career transitions.

### 🧑‍🏫 Career Coaches
Deliver faster, consistent, and data-backed resume evaluations to clients.

---

## 💡 Challenges & Solutions

### PDF Text Extraction
Diverse PDF formats — generated from Word, LaTeX, Canva, or scanned — produce inconsistent text. Solved using `pdf-parse` with in-memory buffering via Multer, avoiding any disk I/O.

### Structured AI Responses
LLMs can return unpredictable output formats. Solved by setting Gemini's `responseMimeType` to `application/json` and writing a tightly constrained prompt that specifies exact field names, types, and counts.

### Prompt Engineering for Consistency
Ensuring the model returns exactly 4 points per category — no more, no less — required iterating on prompt constraints. Final prompt enforces field-level rules: exactly 4 items, each under 15 words, no cross-section repetition.

### Privacy Without Authentication
The app handles sensitive resume data without user accounts. Solved by processing everything in-memory — no file system writes, no database, no session storage.

---

## 🏆 Key Learnings

Building ResumeIQ provided hands-on experience with:

- **Full-Stack Development** — Connecting a React SPA to an Express REST API end-to-end
- **Prompt Engineering** — Designing structured prompts that produce reliable JSON from a generative model
- **File Handling** — Multipart upload, in-memory PDF buffering, text extraction pipeline
- **AI API Integration** — Working with the Google Gemini API, handling model responses, and parsing structured output
- **Component Architecture** — Decomposing a complex results dashboard into focused, reusable React components
- **Production Mindset** — CORS config, environment variables, error handling, and graceful failure states

---

## 🚀 Roadmap

- [ ] Resume vs Job Description matching (JD paste input)
- [ ] AI-powered resume rewriter
- [ ] AI cover letter generator
- [ ] User authentication + resume history
- [ ] Resume templates
- [ ] Multi-language support
- [ ] Recruiter dashboard

---

## 👩‍💻 Author

**Panchadarla V Sai Niteesha Yadav**

B.Tech Information Technology · Andhra University College of Engineering

📧 Email: [your-email@example.com](mailto:your-email@example.com)
💼 LinkedIn: [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)
🐙 GitHub: [github.com/niteeshayadav](https://github.com/niteeshayadav)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push and open a Pull Request

---

## ⭐ Show Your Support

If you found this project useful or interesting:

⭐ Star this repository
🍴 Fork it and build on top of it
📢 Share it with others who are job hunting

---

## 📜 License

This project is licensed under the **ISC License**.

---

<p align="center">
  <b>ResumeIQ</b> · Built with ❤️ to help candidates land interviews<br/>
  <i>Because your resume deserves more than 6 seconds.</i>
</p>
