import { BookOpen, Zap, Brain, MessageSquare } from 'lucide-react';

export function AuthIllustration() {
  return (
    <div className="relative w-full h-full max-w-sm">
      {/* Floating cards with gradient backgrounds */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Main central card - AI Dashboard */}
        <div className="absolute w-64 h-48 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl shadow-2xl transform -rotate-6 p-6 flex flex-col justify-between border border-white/30">
          <div className="flex items-center gap-2">
            <Brain className="text-purple-600" size={20} />
            <span className="font-semibold text-gray-800 text-sm">AI Study</span>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-3/4 bg-purple-300 rounded-full" />
            <div className="h-2 w-1/2 bg-purple-200 rounded-full" />
          </div>
        </div>

        {/* Top right - Flashcard */}
        <div className="absolute w-48 h-40 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl shadow-lg transform translate-x-32 -translate-y-24 p-5 border border-white/30">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="text-cyan-600" size={18} />
            <span className="font-semibold text-gray-800 text-sm">Flashcards</span>
          </div>
          <div className="text-lg font-bold text-gray-700">Q: What is learning?</div>
        </div>

        {/* Bottom left - Chat */}
        <div className="absolute w-56 h-44 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl shadow-lg transform -translate-x-28 translate-y-32 p-5 border border-white/30">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="text-indigo-600" size={18} />
            <span className="font-semibold text-gray-800 text-sm">Ask AI</span>
          </div>
          <div className="space-y-2 text-xs text-gray-600">
            <div className="bg-white/50 rounded-lg p-2">Your question...</div>
            <div className="bg-indigo-200 rounded-lg p-2 text-indigo-800">AI thinking...</div>
          </div>
        </div>

        {/* Top left - Lightning/Progress */}
        <div className="absolute w-40 h-36 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl shadow-lg transform -translate-x-20 -translate-y-16 p-4 flex flex-col items-center justify-center border border-white/30">
          <Zap className="text-yellow-600 mb-2" size={32} />
          <div className="font-bold text-gray-800 text-center text-sm">Learn Faster</div>
        </div>
      </div>

      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 right-10 w-40 h-40 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000" />
      </div>
    </div>
  );
}
