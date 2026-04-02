import { ThemeProvider } from "./ThemeContext";
import { TransactionsProvider } from "./TransactionContext";
import { RoleProvider } from "./RoleContext"; // If you add RBAC

export default function AppContext({ children }) {
  return (
    <ThemeProvider>
      <RoleProvider>
        <TransactionsProvider>{children}</TransactionsProvider>
      </RoleProvider>
    </ThemeProvider>
  );
}