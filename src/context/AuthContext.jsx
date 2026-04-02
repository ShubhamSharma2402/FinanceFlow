import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "auth_user";

const ACCOUNTS = {
  "admin@example.com": "admin",
  "viewer@example.com": "viewer",
};

const AuthContext = createContext(null);

function loadStoredUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed.email === "string" &&
      (parsed.role === "admin" || parsed.role === "viewer") &&
      ACCOUNTS[parsed.email] === parsed.role
    ) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(loadStoredUser);

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const login = (email) => {
    const normalized = String(email).trim().toLowerCase();
    const role = ACCOUNTS[normalized];
    if (!role) {
      return { ok: false };
    }
    const next = { email: normalized, role };
    setUser(next);
    return { ok: true, role };
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = Boolean(user);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
}
