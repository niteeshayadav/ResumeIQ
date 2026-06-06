import axios from "axios";

const analyzeWithGemini = async (resumeText, jobRole, jobType, experience) => {
  try {
    const prompt = `
      You are an ATS Resume Analyzer.

      Target Role: ${jobRole}
      Job Type: ${jobType}
      Experience Level: ${experience}

      Resume:
      ${resumeText}

      Analyze the resume and return ONLY a valid JSON object in this format:

      {
        "atsScore": number,
        "strengths": ["string"],
        "weaknesses": ["string"],
        "missingSkills": ["string"],
        "suggestions": ["string"]
      }

      Rules:
      - ATS score must be between 0 and 100.
      - strengths: exactly 4 concise points.
      - weaknesses: exactly 4 concise points.
      - missingSkills: exactly 4 relevant skill/technology names only.
      - suggestions: exactly 4 actionable points.
      - Each point should be under 15 words.
      - Do not repeat information across sections.
      - Base analysis only on the resume content.
      - Return valid JSON only.
    `;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
        generationConfig: {
          responseMimeType: "application/json",
        },
      },
    );

    const analysis = response.data.candidates[0].content.parts[0].text;

    const parsedAnalysis = JSON.parse(analysis);

    return parsedAnalysis;
  } catch (error) {
    throw new Error(
      error.response?.data?.error?.message || "Failed to analyze resume with Gemini",
    );
  }
};

export default analyzeWithGemini;
