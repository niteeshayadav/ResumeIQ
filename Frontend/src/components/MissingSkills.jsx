import React from "react";

const MissingSkills = ({ skills }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        Missing Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1.5 rounded-full text-sm font-medium bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
          >
            {skill}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
        Adding these skills may improve your ATS score and job match rate.
      </p>
    </div>
  );
};

export default MissingSkills;
