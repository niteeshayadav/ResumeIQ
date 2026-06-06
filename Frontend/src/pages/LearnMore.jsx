import React from "react";
import {
  Brain,
  FileSearch,
  BadgeCheck,
  Lightbulb,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const LearnMore = () => {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <FileSearch className="w-6 h-6 text-blue-600" />,
      title: "Upload Your Resume",
      description:
        "Upload your PDF resume and provide your target role, job type, and experience level.",
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-600" />,
      title: "AI Analysis",
      description:
        "Our AI analyzes ATS compatibility, keywords, skills, formatting, and overall resume quality.",
    },
    {
      icon: <BadgeCheck className="w-6 h-6 text-green-600" />,
      title: "Get Your ATS Score",
      description:
        "Receive a detailed ATS score that reflects how well your resume matches industry expectations.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
      title: "Improve Your Resume",
      description:
        "View strengths, weaknesses, missing skills, and actionable suggestions to improve your chances.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>

          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
              Learn More About ResumeIQ
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
              Understand how ResumeIQ uses AI and ATS analysis to help you build
              stronger resumes and increase your interview opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* What is ResumeIQ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            What is ResumeIQ?
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            ResumeIQ is an AI-powered resume analysis platform that evaluates
            your resume against modern ATS (Applicant Tracking System)
            requirements. It helps identify strengths, weaknesses, missing
            skills, and optimization opportunities.
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            Whether you're applying for internships, full-time jobs, or
            experienced positions, ResumeIQ provides insights that can help your
            resume stand out to recruiters and hiring systems.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-4">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ATS Score */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Understanding Your ATS Score
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            ATS systems scan resumes before recruiters review them. A higher ATS
            score indicates better keyword relevance, formatting, structure, and
            compatibility with automated screening systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 text-center">
              <h3 className="font-bold text-red-500">0 - 49</h3>
              <p className="text-sm mt-2">Needs Major Improvement</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 text-center">
              <h3 className="font-bold text-yellow-500">50 - 69</h3>
              <p className="text-sm mt-2">Needs Improvement</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 text-center">
              <h3 className="font-bold text-blue-500">70 - 84</h3>
              <p className="text-sm mt-2">Good Match</p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-4 text-center">
              <h3 className="font-bold text-green-500">85 - 100</h3>
              <p className="text-sm mt-2">Excellent Match</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
