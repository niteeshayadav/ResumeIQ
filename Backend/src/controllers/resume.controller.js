import express from 'express';
import extractTextFromPDF from '../services/pdf.service.js';
import analyzeWithGemini from '../services/gemini.service.js';

const analyzeResume = async (req, res) => {
    try{
    // Check if inputDetails are provided
    const { jobRole, jobType, experience } = req.body;
    if(!jobRole || !jobType || !experience) {
        return res.status(400).json({ 
            success: false, 
            message: 'Please provide jobRole, jobType and experience details'
        });
    }
    // Check if a file was uploaded
    if(!req.file) {
        return res.status(400).json({ 
            success: false, 
            message: 'Please upload resume'
        });
    }

    const resumeText = await extractTextFromPDF(req.file.buffer);
    const analysis = await analyzeWithGemini(resumeText, jobRole, jobType, experience);

    res.status(200).json({
        success: true,
        analysis
    });
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message || "Failed to analyze resume"
        });
    }
}

export default analyzeResume;