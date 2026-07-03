import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  illustration?: React.ReactNode;
}

export function AuthLayout({ children, illustration }: AuthLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-white overflow-hidden">
      {/* Gradient background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Purple glow */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        {/* Indigo glow */}
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        {/* Cyan glow */}
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 min-h-screen flex">
        {/* Left side - Illustration (hidden on mobile) */}
        {illustration && (
          <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8">
            {illustration}
          </div>
        )}

        {/* Right side - Auth Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
