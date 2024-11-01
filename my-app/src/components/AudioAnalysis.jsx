import React, { useState } from 'react';
import { Upload, Volume2, BarChart, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AudioAnalysis = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setResults({
        audioData: {
          duration: "00:03:24",
          sampleRate: "44.1kHz",
          bitDepth: "16-bit"
        },
        melSpectrogram: {
          anomalies: false,
          confidence: 94
        },
        mfcc: {
          naturalPattern: true,
          confidence: 96
        }
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            DeepFake Audio Analysis
          </h1>
          <p className="text-blue-400 text-lg max-w-2xl mx-auto">
            State-of-the-art AI analysis to detect manipulated audio content with precision.
          </p>
        </div>

        <Card className="mb-8 bg-gray-800/50 border border-gray-700 backdrop-blur-sm">
          <CardHeader className="border-b border-gray-700">
            <CardTitle className="text-white flex items-center gap-2">
              <Upload className="w-5 h-5 text-blue-400" />
              Secure Audio Upload
            </CardTitle>
            <CardDescription className="text-gray-400">
              Your audio file will be analyzed securely using advanced AI algorithms.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-12 text-center bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300">
              <Upload className="mx-auto h-16 w-16 text-blue-400 mb-4" />
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                className="hidden"
                id="audio-upload"
              />
              <label
                htmlFor="audio-upload"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium cursor-pointer transition-colors duration-300"
              >
                Select Audio for Analysis
              </label>
              <p className="text-sm text-gray-400 mt-4">
                Supported formats: MP3, WAV, M4A (max 100MB)
              </p>
            </div>
          </CardContent>
        </Card>

        {isAnalyzing && (
          <Card className="mb-8 bg-gray-800/50 border border-gray-700">
            <CardContent className="p-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-white text-lg">Analyzing audio content...</p>
                <p className="text-gray-400 text-sm mt-2">Running advanced detection algorithms</p>
              </div>
            </CardContent>
          </Card>
        )}

        {results && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors duration-300">
              <CardHeader className="border-b border-gray-700">
                <CardTitle className="text-white flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-blue-400" />
                  Audio Data
                </CardTitle>
                <CardDescription className="text-blue-400">
                  File Information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="text-gray-300">Duration: {results.audioData.duration}</li>
                  <li className="text-gray-300">Sample Rate: {results.audioData.sampleRate}</li>
                  <li className="text-gray-300">Bit Depth: {results.audioData.bitDepth}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors duration-300">
              <CardHeader className="border-b border-gray-700">
                <CardTitle className="text-white flex items-center gap-2">
                  <BarChart className="w-5 h-5 text-blue-400" />
                  Mel Spectrogram Analysis
                </CardTitle>
                <CardDescription className="text-blue-400">
                  Confidence: {results.melSpectrogram.confidence}%
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={results.melSpectrogram.anomalies ? 'text-red-400' : 'text-green-400'}>
                  {results.melSpectrogram.anomalies ? 'Anomalies detected' : 'No anomalies detected'}
                </p>
                <div className="mt-4 h-32 bg-gray-900 rounded flex items-center justify-center">
                  <p className="text-gray-500">Spectrogram Visualization</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors duration-300">
              <CardHeader className="border-b border-gray-700">
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  MFCC Analysis
                </CardTitle>
                <CardDescription className="text-blue-400">
                  Confidence: {results.mfcc.confidence}%
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={results.mfcc.naturalPattern ? 'text-green-400' : 'text-red-400'}>
                  {results.mfcc.naturalPattern ? 'Natural speech pattern detected' : 'Synthetic pattern detected'}
                </p>
                <div className="mt-4 h-32 bg-gray-900 rounded flex items-center justify-center">
                  <p className="text-gray-500">MFCC Visualization</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioAnalysis;
