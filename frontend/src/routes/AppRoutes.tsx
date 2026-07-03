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
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/flashcards" element={<Flashcards />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
