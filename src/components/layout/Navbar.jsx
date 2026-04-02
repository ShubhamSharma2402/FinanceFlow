import { Sun, Moon, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

export default function Navbar({ dashboardTitle }) {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 px-4 py-3 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/75 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-white sm:text-xl">
            {dashboardTitle}
          </h2>
          {user?.email && (
            <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-zinc-400">{user.email}</p>
          )}
        </motion.div>

        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            onClick={handleLogout}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="pressable flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
          >
            <LogOut size={17} className="opacity-80" />
            <span className="hidden sm:inline">Log out</span>
          </motion.button>

          <motion.button
            type="button"
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pressable flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/90 bg-slate-50 text-slate-700 shadow-sm transition-colors hover:bg-slate-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </motion.button>
        </div>
      </div>
    </header>
  );
}
