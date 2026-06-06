import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
const clientURL = process.env.CLIENT_URL || "http://localhost:5173";

app.use(
  cors({
    origin: [clientURL, "http://localhost:5173"],
    credentials: true,
  }),
);
/* Importing all routes*/

import resumeRoutes from './routes/resume.routes.js';

/* Using all routes*/

app.use("/api/resume", resumeRoutes);


export default app;