"use client";

import Link from "next/link";

const Failed = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full max-w-2xl p-12 mx-4 text-center transition-all transform bg-white shadow-lg rounded-xl hover:shadow-xl">
        {/* Error Icon */}
        <div className="flex items-center justify-center w-24 h-24 mx-auto mb-8 bg-red-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-red-600" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
          </svg>
        </div>

        {/* Main Content */}
        <h1 className="mb-5 text-3xl font-extrabold text-gray-800">
          Payment Failed
        </h1>

        <p className="mb-5 text-xl text-gray-600">
          An error occurred while processing your transaction. Please try again or use a different payment method.
        </p>

        {/* Try Again Button */}
        <div className="mt-8">
          <Link href="/home" className="inline-block px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 bg-red-600 rounded-lg hover:bg-red-700">
            Try Again
          </Link>  
        </div>
      </div>
    </div>
  );
};

export default Failed;
