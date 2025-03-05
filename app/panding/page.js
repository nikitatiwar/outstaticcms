"use client";

import React from "react";
import Link from "next/link";

const Pending = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="w-full max-w-2xl p-12 mx-4 text-center transition-all transform bg-white shadow-lg rounded-xl hover:shadow-xl">
          {/* Success Icon */}
          <div className="flex items-center justify-center w-24 h-24 mx-auto mb-8 bg-green-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 fill-current text-green-600" viewBox="0 0 384 512">
              <path d="M0 24C0 10.7 10.7 0 24 0L360 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 19c0 40.3-16 79-44.5 107.5L225.9 256l81.5 81.5C336 366 352 404.7 352 445l0 19 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0 0-19c0-40.3 16-79 44.5-107.5L158.1 256 76.5 174.5C48 146 32 107.3 32 67l0-19-8 0C10.7 48 0 37.3 0 24zM110.5 371.5c-3.9 3.9-7.5 8.1-10.7 12.5l184.4 0c-3.2-4.4-6.8-8.6-10.7-12.5L192 289.9l-81.5 81.5zM284.2 128C297 110.4 304 89 304 67l0-19L80 48l0 19c0 22.1 7 43.4 19.8 61l184.4 0z"/>
            </svg>
          </div>

          {/* Main Content */}
          <h1 className="mb-5 text-3xl font-extrabold text-gray-800">
            Payment Pending
          </h1>

          <p className="mb-5 text-xl text-gray-600">
            An error occurred while processing your transaction. Please try again or use a different payment method.
          </p>

          {/* Back to Home Button */}
          <div className="mt-8">
            <Link href="/home" className="inline-block px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 bg-green-600 rounded-lg hover:bg-green-700">
              Try Again
            </Link>  
          </div>
        </div>
      </div>
    );
}

export default Pending;
