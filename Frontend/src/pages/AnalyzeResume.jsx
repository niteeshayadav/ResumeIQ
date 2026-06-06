import React from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { FileCheck2, ArrowLeft } from "lucide-react";

import ATSScoreCard from "../components/ATSScoreCard";
import MissingSkills from "../components/MissingSkills";
import SuggestionsList from "../components/Suggestions";
import WeaknessList from "../components/WeaknessList";
import StrengthsList from "../components/StrengthsList";

const AnalyzeResume = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const analysisData = location.state?.analysis;

  if (!analysisData) {
    return <Navigate to="/upload-resume" />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-8">
          {/* Back Button */}
          <button
            onClick={() => navigate("/upload-resume")}
            className="group flex items-center gap-2 mb-4 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft
              size={18}
              className="transition-transform duration-200 group-hover:-translate-x-1"
            />
            <span className="text-sm font-medium">Back</span>
          </button>

          <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-5">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 shrink-0">
              <FileCheck2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                Resume Analysis Results
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                AI-powered ATS analysis and personalized recommendations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* ATS Score Card */}
          <div className="lg:col-span-1 lg:sticky lg:top-6">
            <ATSScoreCard score={analysisData.atsScore} />
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
            <StrengthsList strengths={analysisData.strengths} />
            <MissingSkills skills={analysisData.missingSkills} />
            <WeaknessList weaknesses={analysisData.weaknesses} />
            <SuggestionsList suggestions={analysisData.suggestions} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalyzeResume;
