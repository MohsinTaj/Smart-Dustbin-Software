import { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";
import DetectionScreen from "./DetectionScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showDetection, setShowDetection] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleBackToSplash = () => {
    setShowSplash(true);
  };

  return (
   <>
      {showDetection ? (
        <DetectionScreen onBackToSplash={() => setShowDetection(false)} />
      ) : (
        <SplashScreen onForcedDump={() => setShowDetection(true)} />
      )}
    </>
  );
}