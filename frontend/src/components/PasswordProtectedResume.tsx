'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { EyeIcon } from "@heroicons/react/24/solid";

const LoadingSpinner = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"
    />
  </div>
);

interface PasswordProtectedResumeProps {
  resumeUrl: string;
  onAuthSuccess?: () => void;
}

export default function PasswordProtectedResume({ resumeUrl, onAuthSuccess }: PasswordProtectedResumeProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const correctPassword = '11/12/2004'; // In a real app, this should be stored securely

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsLoading(true);
      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsAuthenticated(true);
      setError('');
      onAuthSuccess?.();
      setIsLoading(false);
    } else {
      setError('Incorrect password');
    }
  };

  if (isLoading) {
    return (
      <div className="relative w-full h-[460px] rounded-lg overflow-hidden">
        <LoadingSpinner />
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <div className="w-full h-full">
        <Image
          src={resumeUrl}
          alt="Resume"
          width={1000}
          height={1414}
          className="w-full h-auto transform transition-transform duration-300"
          priority
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[460px] rounded-lg overflow-hidden">
      {/* Blurred background iframe */}
      <div className="absolute inset-0 filter blur-md pointer-events-none">
        <iframe
          src={resumeUrl}
          className="w-full h-full"
          title="Blurred Resume"
        />
      </div>

      {/* Password overlay */}
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center md:items-center sm:items-start sm:pt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md mx-4"
        >
          <div className="flex flex-col items-center mb-6">
            <motion.div 
              className="bg-purple-100 p-3 rounded-full mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <LockClosedIcon className="h-8 w-8 text-purple-600" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-800">Protected Content</h3>
            <p className="text-gray-600 mt-2">Please enter the password to view the resume</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
  {/* Input Wrapper */}
  <div className="relative w-full">
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter password"
      className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-gray-200 dark:text-white bg-gray-500 placeholder-gray-400"
    />
    {/* Static Lock Icon (No Animation) */}
    <LockClosedIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
  </div>

  {/* Error Message (Separate to Avoid Layout Shift) */}
  {error && (
    <motion.p
      initial={{ opacity: 0, y: 1 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-red-500 mt-2 text-sm flex items-center"
    >
      <span className="mr-1">⚠️</span> {error}
    </motion.p>
  )}
</div>
<motion.button
  type="submit"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center space-x-2"
>
  <EyeIcon className="h-5 w-5" />
  <span>View Resume</span>
</motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}