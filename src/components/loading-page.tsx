// components/LoadingPage.tsx
import { cn } from '@/lib/utils'; // Utility function from shadcn for className merging
import React from 'react';

interface LoadingPageProps {
  message?: string;
  className?: string;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ message = 'Loading...', className }) => {
  return (
    <div
      className={cn(
        'fixed inset-0 flex items-center justify-center min-h-screen',
        'bg-gray-100 dark:bg-gray-900 transition-colors duration-200',
        className
      )}
    >
      <div className="text-center space-y-6">
        {/* Spinner Animation */}
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 border-4 border-t-transparent border-blue-500 dark:border-blue-400 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-t-transparent border-blue-300 dark:border-blue-600 rounded-full animate-spin animate-reverse"></div>
        </div>

        {/* Loading Message */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{message}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 animate-pulse">
            Please wait a moment
          </p>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2">
          <div
            className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: '0s' }}
          ></div>
          <div
            className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: '0.2s' }}
          ></div>
          <div
            className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: '0.4s' }}
          ></div>
        </div>
      </div>
    </div>
  );
};
