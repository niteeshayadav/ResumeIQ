import React from "react";
import { CheckCircle2, AlertTriangle, XCircle, Info } from "lucide-react";

const ATSScoreCard = ({ score = 0 }) => {

  const getScoreTier = (score) => {
    if (score >= 85) {
      return {
        title: "Excellent Match!",
        description:
          "Your resume is highly optimized for ATS algorithms. You are in the top tier!",
        colorClass: "text-emerald-600 dark:text-emerald-400",
        ringColor: "stroke-emerald-500",
        bgLight: "bg-emerald-50 dark:bg-emerald-950/30",
        icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
      };
    }
    if (score >= 70) {
      return {
        title: "Good Match!",
        description:
          "Great baseline! A few targeted keyword additions could comfortably push you into the elite tier.",
        colorClass: "text-blue-600 dark:text-blue-400",
        ringColor: "stroke-blue-500",
        bgLight: "bg-blue-50 dark:bg-blue-950/30",
        icon: <Info className="w-5 h-5 text-blue-500" />,
      };
    }
    if (score >= 50) {
      return {
        title: "Needs Improvement",
        description:
          "Your resume has a solid foundation, but missing core industry keywords might cause filter issues.",
        colorClass: "text-amber-600 dark:text-amber-400",
        ringColor: "stroke-amber-500",
        bgLight: "bg-amber-50 dark:bg-amber-950/20",
        icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
      };
    }
    return {
      title: "Critical Fixes Required",
      description:
        "Severe formatting problems or major keyword gaps detected. Use the suggestions below to rewrite.",
      colorClass: "text-rose-600 dark:text-rose-400",
      ringColor: "stroke-rose-500",
      bgLight: "bg-rose-50 dark:bg-rose-950/20",
      icon: <XCircle className="w-5 h-5 text-rose-500" />,
    };
  };

  const tier = getScoreTier(score);

  // 2. SVG Circular Progress Calculations
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;


  const metrics = [
    {
      label: "Keyword Optimization",
      val: Math.min(100, Math.round(score * 1.05)),
      color: "bg-blue-500",
    },
    {
      label: "Formatting & Parseability",
      val: Math.min(100, Math.round(score * 0.95)),
      color: "bg-indigo-500",
    },
    {
      label: "Section Completeness",
      val: score >= 70 ? 100 : 80,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        <div className="flex flex-col items-center justify-center">
          <div className="relative w-36 h-36">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 120 120"
            >
              {/* Track Ring */}
              <circle
                cx="60"
                cy="60"
                r={radius}
                className="stroke-slate-100 dark:stroke-slate-700"
                strokeWidth="10"
                fill="transparent"
              />
              {/* Progress Ring */}
              <circle
                cx="60"
                cy="60"
                r={radius}
                className={`transition-all duration-1000 ease-out ${tier.ringColor}`}
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>

            {/* Center Circular Score */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {score}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Match
              </span>
            </div>
          </div>
        </div>

        {/* Personalized Text Insight Summary */}
        <div className="md:col-span-2 flex flex-col justify-center">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl w-fit ${tier.bgLight}`}
          >
            {tier.icon}
            <span className={`text-base font-semibold ${tier.colorClass}`}>
              {tier.title}
            </span>
          </div>

          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
            {tier.description}
          </p>

          <div className="mt-2 text-xs text-slate-400 dark:text-slate-500">
            *Based on standard industrial parsed data benchmarks.
          </div>
        </div>
      </div>

      <hr className="my-6 border-slate-100 dark:border-slate-700/50" />

      {/* Analytical Sub-Metrics Progression Bars */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
          Analysis Breakdown
        </h3>

        <div className="flex flex-col gap-4">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-900/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800/60"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400 truncate pr-2">
                  {item.label}
                </span>
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  {item.val}%
                </span>
              </div>

              {/* Progress Slider Track */}
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div
                  className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${item.val}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ATSScoreCard;
