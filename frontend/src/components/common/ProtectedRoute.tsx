import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  if (token) {
    return <>{children}</>;
  }

  return <Navigate to="/login" replace />;
}
