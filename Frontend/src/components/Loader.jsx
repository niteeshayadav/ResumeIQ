import React from "react";
import { Brain, LoaderCircle } from "lucide-react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-sm px-6">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl p-8">
          {/* AI Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />

              <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <Brain className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="mt-8 text-center">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              ResumeIQ is analyzing your resume
            </h2>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Evaluating ATS score, skills, keywords, projects and experience...
            </p>
          </div>

          {/* Animated Dots */}
          <div className="flex justify-center gap-2 mt-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
            <span
              className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>

          {/* Progress Steps */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Extracting resume content
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Matching ATS keywords
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-400 dark:text-slate-500">
              <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600" />
              Generating recommendations
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Loader;
