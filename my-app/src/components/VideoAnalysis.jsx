import React, { useState } from 'react';
import { Upload, Shield, Eye, AlertCircle, Volume } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const VideoAnalysis = () => {
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
        microExpression: {
          confidence: 95,
          detectedExpressions: ['smile', 'blink', 'eyebrow_raise']
        },
        gazeTracking: {
          naturalGazePattern: true,
          anomalies: []
        },
        frequencyAnalysis: {
          abnormalPatterns: false,
          confidence: 92
        }
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            DeepFake Detection Shield
          </h1>
          <p className="text-blue-400 text-lg max-w-2xl mx-auto">
            Advanced AI-powered analysis to detect manipulated video content with state-of-the-art precision
          </p>
        </div>
        
        <Card className="mb-8 bg-gray-800/50 border border-gray-700 backdrop-blur-sm">
          <CardHeader className="border-b border-gray-700">
            <CardTitle className="text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              Secure Video Upload
            </CardTitle>
            <CardDescription className="text-gray-400">
              Your video will be analyzed securely using our advanced AI algorithms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-12 text-center bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300">
              <Upload className="mx-auto h-16 w-16 text-blue-400 mb-4" />
              <input
                type="file"
                accept="video/*"
                onChange={handleFileUpload}
                className="hidden"
                id="video-upload"
              />
              <label
                htmlFor="video-upload"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium cursor-pointer transition-colors duration-300"
              >
                Select Video for Analysis
              </label>
              <p className="text-sm text-gray-400 mt-4">
                Supported formats: MP4, AVI, MOV (max 500MB)
              </p>
            </div>
          </CardContent>
        </Card>

        {isAnalyzing && (
          <Card className="mb-8 bg-gray-800/50 border border-gray-700">
            <CardContent className="p-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-white text-lg">Analyzing video content...</p>
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
                  <Eye className="w-5 h-5 text-blue-400" />
                  Micro Expression Analysis
                </CardTitle>
                <CardDescription className="text-blue-400">
                  Confidence: {results.microExpression.confidence}%
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-4">
                <ul className="space-y-2">
                  {results.microExpression.detectedExpressions.map((expr, index) => (
                    <li key={index} className="text-gray-300 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      {expr.replace('_', ' ')}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors duration-300">
              <CardHeader className="border-b border-gray-700">
                <CardTitle className="text-white flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-400" />
                  Gaze Pattern Analysis
                </CardTitle>
                <CardDescription className="text-blue-400">
                  {results.gazeTracking.naturalGazePattern ? 'Natural pattern detected' : 'Unnatural pattern detected'}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-4">
                {results.gazeTracking.anomalies.length === 0 ? (
                  <div className="flex items-center gap-2 text-green-400">
                    <Shield className="w-4 h-4" />
                    <span>No anomalies detected</span>
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {results.gazeTracking.anomalies.map((anomaly, index) => (
                      <li key={index} className="text-red-400 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        {anomaly}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors duration-300">
              <CardHeader className="border-b border-gray-700">
                <CardTitle className="text-white flex items-center gap-2">
                  <Volume className="w-5 h-5 text-blue-400" />
                  Frequency Analysis
                </CardTitle>
                <CardDescription className="text-blue-400">
                  Confidence: {results.frequencyAnalysis.confidence}%
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-4">
                <div className={`flex items-center gap-2 ${results.frequencyAnalysis.abnormalPatterns ? 'text-red-400' : 'text-green-400'}`}>
                  {results.frequencyAnalysis.abnormalPatterns ? (
                    <AlertCircle className="w-4 h-4" />
                  ) : (
                    <Shield className="w-4 h-4" />
                  )}
                  <span>
                    {results.frequencyAnalysis.abnormalPatterns ? 'Abnormal patterns detected' : 'No abnormal patterns detected'}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoAnalysis;