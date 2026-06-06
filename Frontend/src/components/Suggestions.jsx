import React from "react";
import { Lightbulb } from "lucide-react";

const Suggestions = ({ suggestions }) => {

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="w-5 h-5 text-yellow-500" />

        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          Suggestions
        </h2>
      </div>

      <div className="space-y-3">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="flex gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50"
          >
          <Lightbulb className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />

          <p className="text-slate-700 dark:text-slate-300">{suggestion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
