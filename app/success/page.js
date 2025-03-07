'use client';
import { useEffect, useState } from "react";
// import Link from "next/link";

const Success = () => {
  const AdminUrl = process.env.NEXT_PUBLIC_ADMIN_URL;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      window.location.href = AdminUrl;
    }, 3000);

    return () => clearTimeout(timer);
  }, [AdminUrl]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full max-w-2xl p-12 mx-4 text-center transition-all transform bg-white shadow-lg rounded-xl hover:shadow-xl">
        {/* Success Icon */}
        <div className="flex items-center justify-center w-24 h-24 mx-auto mb-8 bg-green-100 rounded-full">
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        {/* Main Content */}
        <h1 className="mb-5 text-3xl font-extrabold text-green-600">
          Payment Successful!
        </h1>

        <p className="mb-5 text-xl text-gray-600">
          Thank you for completing your secure online payment.
        </p>
        {/* Contact Information */}
        <div>
          <p className="text-xl text-green-700">
            Have a great day!
          </p>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8">
          {loading ? (
            <>
              <div className="mx-auto w-12 h-12 rounded-full animate-spin border-2 border-solid border-green-600 border-t-transparent"></div>
              <p className="text-xl text-gray-400 mt-8">Please do not refresh the page</p>
            </>
          ) : (
            <p className="text-xl text-gray-600">Redirecting...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Success;