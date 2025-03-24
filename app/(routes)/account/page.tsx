"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, User } from "lucide-react";

export default function AccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would validate credentials against a backend
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-gray-600 hover:text-amber-700"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to home
          </Link>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-amber-50">
            <h1 className="text-xl font-semibold text-gray-900">My Account</h1>
          </div>

          {isLoggedIn ? (
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-amber-100 rounded-full p-6">
                  <User size={40} className="text-amber-700" />
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h2 className="text-lg font-medium text-gray-900">Welcome back!</h2>
                <p className="text-gray-600 mt-1">You are logged into your account</p>
              </div>

              <div className="border-t border-gray-200 pt-5">
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Account Details</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Update your personal information and password
                    </p>
                  </div>
                  <div className="text-right sm:mt-0">
                    <button className="text-sm text-amber-700 hover:text-amber-800">
                      Edit
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-5 mt-5">
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Order History</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      View your previous orders and track pending deliveries
                    </p>
                  </div>
                  <div className="text-right sm:mt-0">
                    <Link href="/account/orders" className="text-sm text-amber-700 hover:text-amber-800">
                      View Orders
                    </Link>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-5 mt-5">
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Saved Addresses</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Manage your delivery and billing addresses
                    </p>
                  </div>
                  <div className="text-right sm:mt-0">
                    <Link href="/account/addresses" className="text-sm text-amber-700 hover:text-amber-800">
                      Manage
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleLogout}
                  className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <div className="px-4 py-5 sm:p-6">
              <div className="text-center mb-6">
                <h2 className="text-lg font-medium text-gray-900">Sign In</h2>
                <p className="text-gray-600 mt-1">Enter your details to access your account</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-amber-700 hover:text-amber-800">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or</span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Don't have an account?{' '}
                      <a href="#" className="font-medium text-amber-700 hover:text-amber-800">
                        Sign up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 