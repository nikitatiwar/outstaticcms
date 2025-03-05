"use client";
import Link from "next/link";

const Cancel = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full max-w-2xl p-12 mx-4 text-center transition-all transform bg-white shadow-lg rounded-xl hover:shadow-xl">
        {/* Error Icon */}
        <div className="flex items-center justify-center w-24 h-24 mx-auto mb-8 bg-red-100 rounded-full">
          <svg
            className="w-16 h-16 text-red-600" // Adjust size
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
          </svg>
        </div>

        {/* Main Content */}
        <h1 className="mb-5 text-3xl font-extrabold text-gray-800">Payment Cancelled</h1>
        <p className="mb-5 text-xl text-gray-600">
          An error occurred while processing your transaction. Please try again or use a different payment method.
        </p>

        {/* Back to Home Button */}
        <div className="mt-8">
          <Link href="/home">
            <span className="inline-block px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 bg-red-600 rounded-lg cursor-pointer hover:bg-red-700">
              Try Again
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
