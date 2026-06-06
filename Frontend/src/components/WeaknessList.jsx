import React from "react";
import { AlertTriangle } from "lucide-react";

const WeaknessList = ({ weaknesses }) => {

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-6">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="w-5 h-5 text-amber-500" />

        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Areas for Improvement
        </h2>
      </div>

      <div className="space-y-3">
        {weaknesses.map((weakness, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50"
          >
            <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />

            <p className="text-slate-700 dark:text-slate-300">{weakness}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeaknessList;
