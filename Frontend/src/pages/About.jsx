import React from "react";
import { Brain, FileText, Target, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6"
            >
              <ArrowLeft size={18} />
              <span>Back</span>
            </button>

            <span className="px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
              About ResumeIQ
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              Build Resumes That Get Past ATS Filters
            </h2>

            <p className="mt-6 text-slate-600 dark:text-slate-300 leading-relaxed">
              ResumeIQ is an AI-powered resume analysis platform designed to
              help students, freshers, and professionals improve their resumes.
              Our intelligent system evaluates ATS compatibility, identifies
              missing skills, highlights strengths, and provides actionable
              suggestions tailored to your target role.
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether you're applying for internships, full-time roles, or
              experienced positions, ResumeIQ helps you create resumes that
              stand out to recruiters and applicant tracking systems.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid gap-5">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                AI-Powered Analysis
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Advanced AI evaluates your resume and provides detailed feedback
                to improve its effectiveness.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                ATS Optimization
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Get an ATS score and discover missing keywords that can improve
                your chances of passing recruiter screening systems.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Personalized Recommendations
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Receive role-specific suggestions to strengthen your resume and
                increase interview opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
