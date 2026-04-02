// src/router/AppRouter.jsx

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transaction";
import Insights from "../pages/Insights";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import PageTransition from "../components/layout/PageTransition";
import DashboardLayout from "../components/layout/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRole="admin">
              <DashboardLayout basePath="/admin" dashboardTitle="Admin Dashboard" />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <PageTransition>
                <Dashboard />
              </PageTransition>
            }
          />
          <Route
            path="transactions"
            element={
              <PageTransition>
                <Transactions />
              </PageTransition>
            }
          />
          <Route
            path="insights"
            element={
              <PageTransition>
                <Insights />
              </PageTransition>
            }
          />
          <Route
            path="settings"
            element={
              <PageTransition>
                <Settings />
              </PageTransition>
            }
          />
        </Route>

        <Route
          path="/viewer"
          element={
            <ProtectedRoute allowedRole="viewer">
              <DashboardLayout basePath="/viewer" dashboardTitle="Learner Dashboard" />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <PageTransition>
                <Dashboard />
              </PageTransition>
            }
          />
          <Route
            path="transactions"
            element={
              <PageTransition>
                <Transactions />
              </PageTransition>
            }
          />
          <Route
            path="insights"
            element={
              <PageTransition>
                <Insights />
              </PageTransition>
            }
          />
          <Route
            path="settings"
            element={
              <PageTransition>
                <Settings />
              </PageTransition>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
