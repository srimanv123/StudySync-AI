import React from 'react';

interface AuthCardProps {
  children: React.ReactNode;
  maxWidth?: string;
}

export function AuthCard({ children, maxWidth = 'max-w-md' }: AuthCardProps) {
  return (
    <div className={`w-full ${maxWidth}`}>
      <div className="relative group">
        {/* Animated gradient border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-300 via-indigo-300 to-cyan-300 rounded-[24px] opacity-20 group-hover:opacity-30 blur-lg transition duration-500" />

        {/* Glassmorphic card */}
        <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-[24px] p-8 shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}
