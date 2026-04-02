// src/router/AppRouter.jsx

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transactions";
import Insights from "../pages/Insights";
import Settings from "../pages/Settings";
import PageTransition from "../components/PageTransition";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 flex flex-col">
          {/* Top Navbar */}
          <Navbar />

          {/* Animated Page Content */}
          <div className="p-6">
            <Routes>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <Dashboard />
                  </PageTransition>
                }
              />

              <Route
                path="/transactions"
                element={
                  <PageTransition>
                    <Transactions />
                  </PageTransition>
                }
              />

              <Route
                path="/insights"
                element={
                  <PageTransition>
                    <Insights />
                  </PageTransition>
                }
              />

              <Route
                path="/settings"
                element={
                  <PageTransition>
                    <Settings />
                  </PageTransition>
                }
              />

              {/* Redirect unknown routes */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;