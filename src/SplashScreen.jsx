import { useEffect, useRef, useState } from "react";

export default function SplashScreen({ onForcedDump }) {
  const [points, setPoints] = useState(0);
  const [items, setItems] = useState(0);
  const videoRef = useRef(null);

  // Animate points and items
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) => (prev < 465 ? prev + 1 : prev));
      setItems((prev) => (prev < 41 ? prev + 1 : prev));
    }, 25);
    return () => clearInterval(interval);
  }, []);

  // Setup live camera stream
  useEffect(() => {
    async function enableCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera access denied:", err);
      }
    }
    enableCamera();
  }, []);

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-black via-gray-900 to-green-950 text-white flex items-center justify-between px-16 py-12 font-sans tracking-wide overflow-hidden">

      {/* Left Content */}
      <div className="w-2/3 flex flex-col justify-center gap-12 animate-fade-in">
        <div>
          <p className="text-2xl text-gray-400 mb-2">Welcome to the</p>
          <h1 className="text-7xl md:text-8xl font-extrabold text-green-400 leading-tight drop-shadow-xl">
            Smart <span className="text-white">Bin</span> Era!
          </h1>
          <p className="text-lg text-gray-300 mt-4 italic">
            — Where AI Meets Sustainability
          </p>
        </div>

        <div className="flex gap-16 text-white text-lg font-semibold mt-4">
          <div className="bg-gray-800/50 px-10 py-6 rounded-2xl shadow-2xl text-center">
            <p className="text-5xl font-extrabold text-green-400">{points}</p>
            <p className="text-lg text-gray-300 mt-2">Points</p>
          </div>
          <div className="bg-gray-800/50 px-10 py-6 rounded-2xl shadow-2xl text-center">
            <p className="text-5xl font-extrabold text-green-400">{items}</p>
            <p className="text-lg text-gray-300 mt-2">Items</p>
          </div>
        </div>

        <button
          onClick={onForcedDump}
          className="mt-8 w-fit px-10 py-4 bg-green-400 text-black font-bold text-lg rounded-full shadow-xl hover:bg-green-500 transition-all duration-300"
        >
          🚨 FORCED DUMP
        </button>
      </div>

      {/* Right: Camera */}
      <div className="w-1/3 flex justify-center items-center relative">
        <div className="rounded-3xl overflow-hidden border-8 border-green-500 shadow-2xl">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-[450px] h-[320px] object-cover rounded-3xl"
          />
        </div>

        <div className="absolute top-6 right-4 text-right text-sm text-gray-200 leading-tight bg-black/50 px-3 py-2 rounded-lg shadow-lg">
          <p>📸 Live View</p>
          <p>Place the item</p>
          <p>on the receptacle</p>
        </div>
      </div>
    </div>
  );
}
