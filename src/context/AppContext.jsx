import { ThemeProvider } from "./ThemeContext";
import { AuthProvider } from "./AuthContext";
import { TransactionsProvider } from "./TransactionContext";

export default function AppProvider({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TransactionsProvider>{children}</TransactionsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
