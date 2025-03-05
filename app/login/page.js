"use client";

import Image from "next/image"; 
import Link from "next/link"; 
import Header from "../header/page"; 
import Footer from "../footer/page"; 
import LoginImage from "../assets/images/login.avif";
import { useRouter } from "next/navigation";
import {useState} from "react";

const SignInComponent = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${NEXT_PUBLIC_BACKEND_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        router.push("/homepage"); // Redirect to home page
      } else {
        setError(data.message || "Invalid username or password");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="md:py-24">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:block lg:w-1/2 relative">
            <Image
              src={LoginImage}
              alt="Login Background"
              layout="fill"
              objectFit="cover"
              className="rounded-l-lg"
            />
          </div>

          <div className="w-full p-8 lg:w-1/2">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image
                  alt="Your Company"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=blue&shade=600"
                  width={40}
                  height={40}
                  className="mx-auto"
                />
                <h1 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                  Sign in to your account
                </h1>
              </div>

              {/* Error or Success Message */}
              {error && <div className="mt-4 text-center text-sm text-red-500">{error}</div>}
              {success && <div className="mt-4 text-center text-sm text-green-500">Login successful!</div>}

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-2.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-base font-medium text-gray-900">
                        Password
                      </label>
                      <div className="text-sm">
                        <Link href="/forgot-password">
                          <span className="font-semibold text-[#2c3f7c] hover:text-blue-500 cursor-pointer">
                            Forgot password?
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0 py-2.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-[#2c3f7c] px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                      {loading ? "Signing in..." : "Sign in"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignInComponent;
