// components/Sidebar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  FileText,
  Calendar,
  DollarSign,
  Library,
  UserCheck,
  ChevronLeft,
  Bell,
} from "lucide-react";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Administration", href: "#" },
  { icon: BookOpen, label: "Academics", href: "#" },
  { icon: FileText, label: "Study Material", href: "#" },
  { icon: Calendar, label: "Lesson Plan", href: "#" },
  { icon: FileText, label: "Bulk Print", href: "#" },
  { icon: UserCheck, label: "Student Info", href: "#" },
  { icon: DollarSign, label: "Student Fees", href: "#" },
  { icon: BookOpen, label: "Homework", href: "#" },
  { icon: Bell, label: "Notifications", href: "/dashboard/notifications" },
  { icon: Library, label: "Library", href: "#" },
];

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  user: any;
}

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  user,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:sticky lg:top-0 h-screen overflow-y-auto flex-shrink-0
      `}
    >
      <div className="flex flex-col h-full">
        {/* Header Layout Alignment */}
        <div className="flex items-center justify-between px-5 h-20 border-b border-gray-100">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex-shrink-0">
              <Image
                src="/ucet-logo.png"
                alt="UCET Logo"
                width={44}
                height={44}
                className="w-11 h-11 object-contain"
              />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <h1 className="text-sm font-bold text-[#002147] tracking-wide uppercase truncate">
                UCET
              </h1>
              <p className="text-[11px] font-medium text-gray-500 leading-tight mt-0.5 break-words">
                Vinoba Bhave University
              </p>
            </div>
          </div>

          {/* Toggle/Collapse Button */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
            title="Collapse Sidebar"
          >
            <ChevronLeft size={18} />
          </button>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href === "/dashboard" && pathname.startsWith("/dashboard"));

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                  transition-colors duration-200
                  ${isActive ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100 hover:text-primary"}
                `}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Footer Container */}
        <div className="border-t border-gray-100 p-4 bg-gray-50/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold flex-shrink-0">
              {user?.name?.charAt(0) || "U"}
            </div>
            <div className="text-sm min-w-0">
              <p className="font-medium text-gray-700 truncate">
                {user?.name || "User"}
              </p>
              <p className="text-xs text-gray-400 truncate">
                {user?.email || ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
