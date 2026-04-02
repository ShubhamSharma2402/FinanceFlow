import { NavLink } from "react-router-dom";
import { Home, List, BarChart3 } from "lucide-react";

export default function Sidebar() {
  const links = [
    { label: "Dashboard", to: "/", icon: Home },
    { label: "Transactions", to: "/transactions", icon: List },
    { label: "Insights", to: "/insights", icon: BarChart3 },
  ];

  return (
    <div className="w-64 h-screen bg-white dark:bg-zinc-900 border-r dark:border-zinc-800 p-5 flex flex-col">
      <h1 className="text-xl font-bold mb-8">FinanceFlow</h1>

      <nav className="space-y-2">
        {links.map(({ label, to, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all
              ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`
            }
          >
            <Icon size={20} />
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}