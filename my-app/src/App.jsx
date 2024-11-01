import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import VideoAnalysis from './components/VideoAnalysis';
import AudioAnalysis from './components/AudioAnalysis';

const App = () => {
  return (
      <div className="max-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video" element={<VideoAnalysis />} />
          <Route path="/audio" element={<AudioAnalysis />} />
        </Routes>
      </div>
  );
};
export default App
