"use client";

import { useState } from "react";
import { Logo } from "@/components/icons";
import StudentPortal from "@/components/student-portal";
import InternshipPortal from "@/components/internship-portal";
import AdminDashboard from "@/components/admin-dashboard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  GraduationCap,
  Building2,
  LayoutDashboard,
  ChevronLeft,
  ChevronRight,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  Settings,
  User,
  Home,
} from "lucide-react";
import Link from "next/link";

type TabValue = "student" | "internship" | "admin";

const navItems: { value: TabValue; label: string; icon: React.ElementType }[] = [
  { value: "student", label: "Student Portal", icon: GraduationCap },
  { value: "internship", label: "Industry Portal", icon: Building2 },
  { value: "admin", label: "Admin Dashboard", icon: LayoutDashboard },
];

const tabDisplayNames: Record<TabValue, string> = {
  student: "Student Portal",
  internship: "Industry Portal",
  admin: "Admin Dashboard",
};

export default function AppPage() {
  const [activeTab, setActiveTab] = useState<TabValue>("student");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "student":
        return <StudentPortal />;
      case "internship":
        return <InternshipPortal />;
      case "admin":
        return <AdminDashboard />;
      default:
        return <StudentPortal />;
    }
  };

  const handleNavClick = (value: TabValue) => {
    setActiveTab(value);
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-muted/20">
      {/* ─── Desktop Sidebar ─── */}
      <aside
        className={`
          hidden lg:flex flex-col fixed inset-y-0 left-0 z-40
          bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950
          border-r border-slate-800/50
          transition-all duration-300 ease-in-out
          ${sidebarCollapsed ? "w-20" : "w-64"}
        `}
      >
        {/* Sidebar Header */}
        <div className="flex h-16 items-center gap-3 px-4 shrink-0">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-lg shadow-cyan-500/20">
            <Logo className="h-6 w-6 text-white" />
          </div>
          <div
            className={`
              flex flex-col overflow-hidden transition-all duration-300
              ${sidebarCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}
            `}
          >
            <span className="text-sm font-headline font-bold text-white whitespace-nowrap">
              InternLink AI
            </span>
            <span className="text-[10px] text-slate-400 whitespace-nowrap">
              Smart Allocation Engine
            </span>
          </div>
        </div>

        <Separator className="bg-slate-700/50 mx-4" />

        {/* Navigation Items */}
        <nav className="flex-1 flex flex-col gap-1.5 px-3 py-4">
          {navItems.map((item) => {
            const isActive = activeTab === item.value;
            const Icon = item.icon;
            return (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`
                  group relative flex items-center gap-3 rounded-lg px-3 py-2.5
                  transition-all duration-200 ease-in-out cursor-pointer
                  ${
                    isActive
                      ? "bg-indigo-500/20 text-cyan-400 border-l-2 border-cyan-400 shadow-sm shadow-cyan-500/10"
                      : "text-slate-400 hover:bg-slate-800 hover:text-slate-200 border-l-2 border-transparent"
                  }
                `}
                title={sidebarCollapsed ? item.label : undefined}
              >
                <Icon
                  className={`h-5 w-5 shrink-0 transition-colors duration-200 ${
                    isActive
                      ? "text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]"
                      : "text-slate-500 group-hover:text-slate-300"
                  }`}
                />
                <span
                  className={`
                    text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300
                    ${sidebarCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}
                  `}
                >
                  {item.label}
                </span>
                {/* Active indicator dot for collapsed state */}
                {isActive && sidebarCollapsed && (
                  <span className="absolute -right-1 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="shrink-0 px-3 pb-4 space-y-2">
          <Separator className="bg-slate-700/50 mb-3" />

          <Link
            href="/"
            className={`
              flex items-center gap-3 rounded-lg px-3 py-2.5
              text-slate-500 hover:bg-slate-800 hover:text-slate-300
              transition-all duration-200
            `}
            title={sidebarCollapsed ? "Back to Home" : undefined}
          >
            <Home className="h-5 w-5 shrink-0" />
            <span
              className={`
                text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300
                ${sidebarCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}
              `}
            >
              Back to Home
            </span>
          </Link>

          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="flex items-center justify-center w-full rounded-lg px-3 py-2 text-slate-500 hover:bg-slate-800 hover:text-slate-300 transition-all duration-200 cursor-pointer"
            title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {sidebarCollapsed ? (
              <ChevronRight className="h-5 w-5 shrink-0" />
            ) : (
              <>
                <ChevronLeft className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium ml-3 whitespace-nowrap overflow-hidden transition-all duration-300">
                  Collapse
                </span>
              </>
            )}
          </button>

          {!sidebarCollapsed && (
            <p className="text-center text-[10px] text-slate-600 pt-1 select-none">
              v2.0 — InternLink AI
            </p>
          )}
        </div>
      </aside>

      {/* ─── Mobile Overlay ─── */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <aside
            className="absolute inset-y-0 left-0 w-72 bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 shadow-2xl shadow-black/50 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Sidebar Header */}
            <div className="flex h-16 items-center justify-between px-4 shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-lg shadow-cyan-500/20">
                  <Logo className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-headline font-bold text-white">
                    InternLink AI
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Smart Allocation Engine
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <Separator className="bg-slate-700/50 mx-4" />

            {/* Mobile Nav Items */}
            <nav className="flex-1 flex flex-col gap-1.5 px-3 py-4">
              {navItems.map((item) => {
                const isActive = activeTab === item.value;
                const Icon = item.icon;
                return (
                  <button
                    key={item.value}
                    onClick={() => handleNavClick(item.value)}
                    className={`
                      group flex items-center gap-3 rounded-lg px-3 py-3
                      transition-all duration-200 ease-in-out cursor-pointer
                      ${
                        isActive
                          ? "bg-indigo-500/20 text-cyan-400 border-l-2 border-cyan-400"
                          : "text-slate-400 hover:bg-slate-800 hover:text-slate-200 border-l-2 border-transparent"
                      }
                    `}
                  >
                    <Icon
                      className={`h-5 w-5 shrink-0 ${
                        isActive
                          ? "text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]"
                          : "text-slate-500 group-hover:text-slate-300"
                      }`}
                    />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile Sidebar Footer */}
            <div className="shrink-0 px-3 pb-4 space-y-2">
              <Separator className="bg-slate-700/50 mb-3" />
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 hover:bg-slate-800 hover:text-slate-300 transition-all duration-200"
              >
                <Home className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium">Back to Home</span>
              </Link>
              <p className="text-center text-[10px] text-slate-600 pt-1 select-none">
                v2.0 — InternLink AI
              </p>
            </div>
          </aside>
        </div>
      )}

      {/* ─── Main Content Area ─── */}
      <div
        className={`
          flex flex-1 flex-col min-h-screen transition-all duration-300
          ${sidebarCollapsed ? "lg:ml-20" : "lg:ml-64"}
        `}
      >
        {/* Mobile Header */}
        <header className="flex lg:hidden h-14 items-center justify-between border-b bg-background/80 backdrop-blur-md px-4 shrink-0 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500">
                <Logo className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-headline font-semibold text-foreground">
                InternLink AI
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background" />
            </Button>
          </div>
        </header>

        {/* Desktop Top Header Bar */}
        <header className="hidden lg:flex h-16 items-center justify-between border-b bg-background/80 backdrop-blur-md px-6 shrink-0 sticky top-0 z-30">
          {/* Left — Breadcrumb */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Dashboard</span>
            <span className="text-muted-foreground/50">/</span>
            <span className="font-medium text-foreground">
              {tabDisplayNames[activeTab]}
            </span>
          </div>

          {/* Right — Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-muted-foreground hover:text-foreground"
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-muted-foreground hover:text-foreground relative"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background animate-pulse" />
            </Button>
            <Separator orientation="vertical" className="mx-1 h-6" />
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-white text-xs font-bold shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 transition-shadow duration-200 cursor-pointer ring-2 ring-background">
              VK
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          <div className="animate-in fade-in-0 duration-300">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
