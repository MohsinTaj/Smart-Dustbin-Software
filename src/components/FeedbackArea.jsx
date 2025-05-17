// RightPanel.js
export default function FeedbackArea({ onFeedback }) {
  return (
    <div className="w-1/2 bg-white flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">WAS IT CORRECT?</h2>
      <div className="flex gap-10">
        <button
          onClick={() => onFeedback("wrong")}
          className="w-20 h-20 bg-red-500 text-white rounded-full flex items-center justify-center text-3xl shadow-lg hover:bg-red-600"
        >
          👎
        </button>
        <button
          onClick={() => onFeedback("correct")}
          className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl shadow-lg hover:bg-green-600"
        >
          👍
        </button>
      </div>
    </div>
  );
}
