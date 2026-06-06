import React from "react";
import { CheckCircle2 } from "lucide-react";

const StrengthsList = ({ strengths }) => {

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 p-6">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        Strengths
      </h2>

      <div className="space-y-3">
        {strengths.map((strength, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />

            <p className="text-slate-700 dark:text-slate-300">{strength}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrengthsList;
