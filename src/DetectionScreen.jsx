import { useEffect, useState } from "react";
import DetectionArea from "./components/DetectionsArea";
import FeedbackArea from "./components/FeedbackArea";

export default function DetectionScreen({ onBackToSplash }) {
  const [progress, setProgress] = useState(0);

  const handleFeedback = (type) => {
    console.log("User feedback:", type);
    // Optionally send feedback to backend
  };

  // Animate progress bar over 10 seconds, then call onBackToSplash
  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress(progress + 1), 100);
      return () => clearTimeout(timer);
    } else {
      onBackToSplash();
    }
  }, [progress, onBackToSplash]);

  return (
    <div className="h-screen w-screen flex flex-col bg-black relative">
      {/* Close button */}
      <button
        onClick={onBackToSplash}
        className="absolute top-4 right-4 text-black text-3xl font-bold hover:text-red-500 transition"
        aria-label="Close Detection Screen"
      >
        &times;
      </button>

      {/* Progress bar container */}
      <div className="w-full h-2 bg-gray-700 relative overflow-hidden">
        <div
          className="absolute right-0 top-0 h-full bg-green-400 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Main content */}
      <div className="flex flex-1">
        <DetectionArea item="PAPER" type="RECYCLABLE" />
        <FeedbackArea onFeedback={handleFeedback} />
      </div>
    </div>
  );
}
