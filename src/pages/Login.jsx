import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { LogIn, Sparkles } from "lucide-react";

export default function Login() {
  const { login, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  if (isAuthenticated && user) {
    const home = user.role === "admin" ? "/admin" : "/viewer";
    return <Navigate to={home} replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const trimmed = email.trim();
    if (!trimmed) {
      setError("Please enter your email.");
      return;
    }
    const result = login(trimmed);
    if (!result.ok) {
      setError("Unknown email. Use admin@example.com or viewer@example.com.");
      return;
    }
    navigate(result.role === "admin" ? "/admin" : "/viewer", { replace: true });
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-12 dark:bg-zinc-950">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-30%,rgba(99,102,241,0.18),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-30%,rgba(99,102,241,0.14),transparent)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184/0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.07)_1px,transparent_1px)] bg-[size:48px_48px] opacity-80 dark:opacity-50" />

      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-md"
      >
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600 shadow-sm backdrop-blur dark:border-indigo-900/60 dark:bg-zinc-900/80 dark:text-indigo-400">
            <Sparkles size={12} className="opacity-80" />
            FinanceFlow
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-8 shadow-card backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-900/75 sm:p-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-glow">
              <LogIn size={28} strokeWidth={2} />
            </div>
            <h1 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Welcome back
            </h1>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
              Sign in with a demo account — no password required.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-zinc-400"
              >
                Work email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="input w-full"
              />
            </div>

            {error && (
              <p className="text-sm font-medium text-rose-600 dark:text-rose-400" role="alert">
                {error}
              </p>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="btn w-full py-3 text-base shadow-glow"
            >
              Continue
            </motion.button>
          </form>

          <p className="mt-8 text-center text-[11px] leading-relaxed text-slate-500 dark:text-zinc-500">
            Demo ·{" "}
            <span className="font-mono text-slate-700 dark:text-zinc-400">admin@example.com</span> ·{" "}
            <span className="font-mono text-slate-700 dark:text-zinc-400">viewer@example.com</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
