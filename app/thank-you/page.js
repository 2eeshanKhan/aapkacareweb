// pages/thank-you.js

import { FaCheckCircle } from 'react-icons/fa';

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-center px-4">
      <div className="animate-bounce text-green-600 mb-6">
        <FaCheckCircle size={80} />
      </div>

      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg text-gray-700">
        Your submission has been received successfully.
      </p>
    </div>
  );
}
