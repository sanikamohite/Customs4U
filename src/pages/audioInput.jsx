import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AudioInput = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordings, setRecordings] = useState([]);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordings(prev => [...prev, audioUrl]);
        audioChunksRef.current = [];
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Unable to access microphone. Please allow microphone permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      // Stop all tracks on the active stream
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const audioUrl = URL.createObjectURL(file);
      setRecordings(prev => [...prev, audioUrl]);
    }
  };

  // Cleanup function to revoke object URLs when component unmounts
  useEffect(() => {
    return () => {
      recordings.forEach(url => URL.revokeObjectURL(url));
    };
  }, [recordings]);

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
              Voice Emotion Recording
            </h1>
            <p className="text-xl text-gray-300">
              Record or upload your voice to analyze emotions
            </p>
          </div>

          {/* Recording Controls */}
          <div className="bg-gray-800/50 p-8 rounded-xl border border-blue-400/30 backdrop-blur-sm shadow-lg mb-8">
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={startRecording}
                disabled={isRecording}
                className={`px-6 py-3 rounded-lg font-medium text-white ${
                  isRecording
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600'
                } transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
              >
                {isRecording ? (
                  <span className="flex items-center">
                    <span className="animate-pulse mr-2">●</span> Recording...
                  </span>
                ) : (
                  'Start Recording'
                )}
              </button>
              <button
                onClick={stopRecording}
                disabled={!isRecording}
                className={`px-6 py-3 rounded-lg font-medium text-white ${
                  !isRecording
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-red-500 hover:bg-red-600'
                } transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
              >
                Stop Recording
              </button>
            </div>

            {/* File Upload Section */}
            <div className="text-center p-6 border-2 border-dashed border-blue-400/30 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">
                Or Upload Audio File
              </h3>
              <label className="cursor-pointer bg-blue-500/10 hover:bg-blue-500/20 px-6 py-4 rounded-lg inline-block transition-colors">
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <span className="text-blue-400 hover:text-blue-300">
                  Choose Audio File
                </span>
              </label>
            </div>
          </div>

          {/* Recordings List */}
          {recordings.length > 0 && (
            <div className="bg-gray-800/50 p-8 rounded-xl border border-blue-400/30 backdrop-blur-sm shadow-lg">
              <h3 className="text-xl font-semibold text-blue-400 mb-6">
                Your Recordings
              </h3>
              <div className="space-y-4">
                {recordings.map((audioUrl, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-900/50 rounded-lg border border-blue-400/20"
                  >
                    <audio
                      controls
                      src={audioUrl}
                      className="w-full focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Next Button */}
          {recordings.length > 0 && (
            <div className="text-center mt-8">
              <Link
                to="/analysis"
                className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Analyze Emotions →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AudioInput;