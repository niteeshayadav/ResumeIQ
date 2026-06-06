import React from "react";
import {
  ScanSearch,
  BadgeCheck,
  Brain,
  TrendingUp,
  AlertCircle,
  Lightbulb,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <ScanSearch className="w-8 h-8 text-blue-600" />,
    title: "ATS Score Analysis",
    description:
      "Get an instant ATS compatibility score to understand how recruiters and applicant tracking systems view your resume.",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-green-600" />,
    title: "Strength Detection",
    description:
      "Identify your strongest skills, projects, and achievements highlighted in your resume.",
  },
  {
    icon: <AlertCircle className="w-8 h-8 text-red-500" />,
    title: "Weakness Detection",
    description:
      "Discover missing sections, weak content, and areas that may reduce your interview chances.",
  },
  {
    icon: <Brain className="w-8 h-8 text-purple-600" />,
    title: "AI-Powered Insights",
    description:
      "Advanced AI analyzes your resume against the target role and provides detailed feedback.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
    title: "Missing Skills Analysis",
    description:
      "Find the important technologies and keywords missing from your resume for your desired role.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    title: "Personalized Suggestions",
    description:
      "Receive actionable recommendations to improve your resume and increase interview opportunities.",
  },
];

const Features = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
            Features
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white">
            Everything You Need To Improve Your Resume
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
            ResumeIQ uses AI to evaluate your resume, identify weaknesses,
            highlight strengths, and provide recommendations that help you stand
            out to recruiters.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
