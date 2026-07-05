import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { Route, Routes } from "react-router-dom";

import Chat from "@/pages/Chat";
import Dashboard from "@/pages/Dashboard";
import Flashcards from "@/pages/Flashcards";
import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Notes from "@/pages/Notes";
import Quiz from "@/pages/Quiz";
import Settings from "@/pages/Settings";
import Signup from "@/pages/Signup";
import ForgotPassword from "@/pages/ForgotPassword";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/notes"
        element={
          <ProtectedRoute>
            <Notes />
          </ProtectedRoute>
        }
      />

      <Route
        path="/quiz"
        element={
          <ProtectedRoute>
            <Quiz />
          </ProtectedRoute>
        }
      />

      <Route
        path="/flashcards"
        element={
          <ProtectedRoute>
            <Flashcards />
          </ProtectedRoute>
        }
      />

      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}