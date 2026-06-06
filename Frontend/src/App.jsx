import React from 'react'
import Home from './pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom';
import UploadResume from './pages/UploadResume';
import AnalyzeResume from './pages/AnalyzeResume';
import { useState, useEffect } from 'react';
import About from './pages/About';
import Features from './pages/Features';
import LearnMore from './pages/LearnMore';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode((prev) => !prev);
    };

    useEffect(()=> {
      localStorage.setItem('darkMode', darkMode);

      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [darkMode]);
    
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/upload-resume" element={<UploadResume />} />
        <Route path="/analyze-resume" element={<AnalyzeResume />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
    </>
  );
}

export default App