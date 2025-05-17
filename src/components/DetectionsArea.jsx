// LeftPanel.js
export default function DetectionArea({ item = "PAPER", type = "RECYCLABLE" }) {
  return (
    <div className="w-1/2 bg-cyan-400 flex flex-col items-center justify-center text-white p-6">
      <div className="mb-6">
        <svg
          className="w-32 h-32 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 3l20 9-20 9V3z" strokeWidth="1.5" />
        </svg>
      </div>
      <h2 className="text-3xl font-bold mb-2">{item}</h2>
      <p className="text-lg font-medium opacity-80">{type}</p>
    </div>
  );
}
