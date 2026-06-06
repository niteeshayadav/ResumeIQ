import express from 'express';
import analyzeResume from '../controllers/resume.controller.js';
import upload from '../middlewares/upload.middleware.js';

const router = express.Router();

/* Routes */

router.post("/analyze", upload.single('resume'), analyzeResume);

export default router;