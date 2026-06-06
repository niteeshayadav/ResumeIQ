import React, { useState } from "react";
import { Moon, Sun, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Home = ({ darkMode, toggleDarkMode }) => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
              <FileText className="w-5 h-5 text-white" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                ResumeIQ
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                AI Resume Analyzer
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 cursor-pointer">
            <a
              href="#"
              className="font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Home
            </a>

            <a
              href="/features"
              className="font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Features
            </a>

            <a
              href="/about"
              className="font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              About
            </a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-5">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="group transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              {darkMode ? (
                <Moon
                  className="
                      w-7 h-7
                      text-white
                      transition-all
                      duration-300
                      drop-shadow-[0_0_10px_rgba(250,204,21,0.9)]
                      group-hover:drop-shadow-[0_0_16px_rgba(250,204,21,1)]
                    "
                  strokeWidth={2}
                />
              ) : (
                <Sun
                  className="
                      w-7 h-7
                      text-yellow-400
                      transition-all
                      duration-300
                      group-hover:rotate-12
                    "
                  strokeWidth={2}
                />
              )}
            </button>

            <button
              className="cursor-pointer hidden md:block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all"
              onClick={() => navigate("/upload-resume")}
            >
              Analyze Resume
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <span className="px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
          AI-Powered Resume Analysis
        </span>

        <h1 className="mt-6 text-5xl md:text-6xl font-bold text-slate-900 dark:text-white max-w-4xl leading-tight">
          Improve Your Resume With
          <span className="text-blue-600 dark:text-blue-400"> AI Insights</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Upload your resume and receive ATS score, keyword analysis, strengths,
          weaknesses, and personalized recommendations to improve your chances
          of landing interviews.
        </p>

        <div className="flex gap-4 mt-8">
          <button
            className="cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
            onClick={() => navigate("/upload-resume")}
          >
            Upload Resume
          </button>

          <button
            className="cursor-pointer px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-xl font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            onClick={() => navigate("/learn-more")}
          >
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
