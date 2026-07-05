import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Lightbulb,
  HelpCircle,
  MessageSquare,
  Settings,
  LogOut,
  Brain,
  X,
} from "lucide-react";

interface SidebarProps {
  onClose: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: BookOpen,
      label: "My Notes",
      path: "/notes",
    },
    {
      icon: Lightbulb,
      label: "Flashcards",
      path: "/flashcards",
    },
    {
      icon: HelpCircle,
      label: "Quizzes",
      path: "/quiz",
    },
    {
      icon: MessageSquare,
      label: "AI Chat",
      path: "/chat",
    },
  ];

  return (
    <div className="flex flex-col h-full p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-3xl bg-gradient-accent flex items-center justify-center shadow-lg">
            <Brain className="w-6 h-6 text-white" />
          </div>

          <div>
            <h1 className="text-lg font-bold gradient-text">
              StudySync
            </h1>
            <p className="text-xs text-muted-foreground">
              AI Learning
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="md:hidden p-2 rounded-full bg-card/30 hover:bg-card/60 transition-all duration-200"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-accent/15 to-transparent border-l-4 border-accent text-accent"
                  : "text-foreground hover:bg-card/50"
              } group`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon
                  className={`w-5 h-5 transition-colors duration-200 ${
                    isActive
                      ? "text-accent"
                      : "text-muted-foreground group-hover:text-accent"
                  }`}
                />
                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Menu */}
      <div className="space-y-3 pt-4 border-t border-border">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 ${
              isActive
                ? "bg-gradient-to-r from-accent/15 to-transparent border-l-4 border-accent text-accent"
                : "text-foreground hover:bg-card/50"
            } group`
          }
        >
          {({ isActive }) => (
            <>
              <Settings
                className={`w-5 h-5 ${
                  isActive
                    ? "text-accent"
                    : "text-muted-foreground group-hover:text-accent"
                }`}
              />
              <span>Settings</span>
            </>
          )}
        </NavLink>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-foreground hover:bg-card/50 transition-all duration-200 group"
        >
          <LogOut className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}