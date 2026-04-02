import { Sun, Moon } from "lucide-react";

export default function Navbar({ role, setRole, theme, toggleTheme }) {
  return (
    <div className="w-full h-16 bg-white dark:bg-zinc-900 border-b dark:border-zinc-800 px-6 flex items-center justify-between">
      <h2 className="text-xl font-semibold">Welcome!</h2>

      <div className="flex items-center gap-4">

        {/* Role Switch */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="bg-zinc-100 dark:bg-zinc-800 rounded-md px-3 py-2"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 transition-all"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </div>
  );
}