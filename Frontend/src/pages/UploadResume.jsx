import { useState } from "react";
import { UploadCloud, FileText, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import uploadResume from "../services/resumeService";
import Loader from "../components/Loader";

const UploadResume = () => {
  const navigate = useNavigate();

  const [resume, setResume] = useState(null);

  const [jobData, setJobData] = useState({
    jobRole: "",
    jobType: "Internship",
    experienceLevel: "Student",
  });

  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setJobData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume) {
      return toast.error("Please upload a resume");
    }

    if (!jobData.jobRole.trim()) {
      return toast.error("Please enter a job role");
    }

    const formData = new FormData();

    formData.append("resume", resume);
    formData.append("jobRole", jobData.jobRole);
    formData.append("jobType", jobData.jobType);
    formData.append("experience", jobData.experienceLevel);

    try {
      setLoading(true);

      const response = await uploadResume(formData);

      navigate("/analyze-resume", {
        state: {
          analysis: response.analysis,
        },
      });
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to analyze resume. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen lg:h-screen bg-slate-50 dark:bg-slate-900 px-4 sm:px-6 py-4 lg:py-2 transition-colors duration-300 overflow-y-auto lg:overflow-hidden flex items-center justify-center">
      <Toaster position="top-center" />

      <div className="max-w-2xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 mb-2">
            <FileText className="text-blue-600 dark:text-blue-400" size={22} />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Upload Your Resume
          </h2>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            Get ATS score, strengths, weaknesses, missing skills and AI-powered
            suggestions.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg p-5 lg:p-6">
          {/* Back Button */}
          <div className="mb-3">
            <button
              onClick={() => navigate("/")}
              className="group flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft
                size={18}
                className="transition-transform duration-200 group-hover:-translate-x-1"
              />
              <span className="text-sm font-medium">Back</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Resume Upload */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">
                Resume
              </label>

              <label className="flex flex-col items-center justify-center w-full h-36 lg:h-40 rounded-2xl cursor-pointer border-2 border-dashed border-blue-300 dark:border-blue-700 bg-slate-50 dark:bg-slate-900 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-200">
                <input
                  type="file"
                  accept=".pdf"
                  className="hidden cursor-pointer"
                  onChange={handleFileChange}
                />

                {resume ? (
                  <div className="flex flex-col items-center gap-3 px-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                      <FileText size={22} className="text-white" />
                    </div>

                    <p className="text-sm font-medium text-slate-900 dark:text-white truncate max-w-[220px] sm:max-w-xs">
                      {resume.name}
                    </p>

                    <span className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                      Tap to replace
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <UploadCloud
                        size={20}
                        className="text-blue-600 dark:text-blue-400"
                      />
                    </div>

                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      Click to upload your resume
                    </p>

                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      PDF only
                    </p>
                  </div>
                )}
              </label>
            </div>

            {/* Job Role */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">
                Job Role
              </label>

              <input
                type="text"
                name="jobRole"
                value={jobData.jobRole}
                onChange={handleChange}
                placeholder="e.g. Full Stack Developer"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Job Type */}
              <div className="relative">
                <label className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">
                  Job Type
                </label>

                <select
                  name="jobType"
                  value={jobData.jobType}
                  onChange={handleChange}
                  className="cursor-pointer w-full appearance-none px-4 py-3 pr-10 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Internship</option>
                  <option>Full-Time</option>
                </select>

                <svg
                  className="absolute right-3 top-[46px] h-5 w-5 text-slate-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Experience */}
              <div className="relative">
                <label className="block mb-2 text-sm font-medium text-slate-900 dark:text-white">
                  Experience Level
                </label>

                <select
                  name="experienceLevel"
                  value={jobData.experienceLevel}
                  onChange={handleChange}
                  className="cursor-pointer w-full appearance-none px-4 py-3 pr-10 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Student</option>
                  <option>Fresher</option>
                  <option>1 - 2 Years</option>
                  <option>3 - 5 Years</option>
                </select>

                <svg
                  className="absolute right-3 top-[46px] h-5 w-5 text-slate-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="cursor-pointer w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 text-white font-semibold transition-all duration-200"
            >
              Analyze Resume
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-4">
          Your resume is never stored. Analysis happens in real time.
        </p>
      </div>
    </div>
  );
};

export default UploadResume;
