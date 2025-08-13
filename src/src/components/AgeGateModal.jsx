export default function AgeGateModal({ onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="bg-red-900 p-8 rounded-lg max-w-md text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Age Verification</h2>
        <p className="mb-6">
          You must be at least 18 years old to enter this site. 
          Please confirm your age.
        </p>
        <div className="space-x-4">
          <button
            onClick={onConfirm}
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-opacity-90 transition"
          >
            I Am 18+
          </button>
          <button
            onClick={() => window.close()}
            className="border border-yellow-400 px-6 py-2 rounded hover:bg-yellow-400 hover:text-black transition"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}
