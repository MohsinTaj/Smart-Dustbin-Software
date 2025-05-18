import { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";
import DetectionScreen from "./DetectionScreen";

export default function App() {
  const [showDetection, setShowDetection] = useState(false);
  const [lastPrediction, setLastPrediction] = useState(null); // 👈 Save it if needed

  const handleForcedDump = (predictedClass) => {
    // console.log("Prediction received in App:", predictedClass);
    setLastPrediction(predictedClass); // 👈 Optional: use it in DetectionScreen
    setShowDetection(true);
  };

  return (
    <>
      {showDetection ? (
        <DetectionScreen
          onBackToSplash={() => setShowDetection(false)}
          prediction={lastPrediction} // 👈 optional
        />
      ) : (
        <SplashScreen onForcedDump={handleForcedDump} />
      )}
    </>
  );
}
