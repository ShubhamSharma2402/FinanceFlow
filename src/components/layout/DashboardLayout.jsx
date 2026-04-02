import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({ basePath, dashboardTitle }) {
  return (
    <div className="app-shell flex min-h-screen w-full flex-col md:flex-row">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_90%_50%_at_50%_-20%,rgba(99,102,241,0.14),transparent)] dark:bg-[radial-gradient(ellipse_90%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent)]"
        aria-hidden
      />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgb(148_163_184/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.06)_1px,transparent_1px)] bg-[size:44px_44px] dark:opacity-40" />

      <Sidebar basePath={basePath} />

      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar dashboardTitle={dashboardTitle} />

        <main className="relative flex-1 overflow-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-[1400px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
