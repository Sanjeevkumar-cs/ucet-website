"use client";

import Link from "next/link";
import { GraduationCap, Lock } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const loginOptions = [
    {
      id: "student",
      title: "Student Login",
      icon: GraduationCap,
      // Using the Bright Blue from your theme
      color: "from-[#2563eb] to-[#1e40af]",
      href: "/login/student",
    },
    {
      id: "admin",
      title: "Admin Login",
      icon: Lock,
      // Using the Deep Blue from your theme for Admin distinction
      color: "from-[#1e3a8a] to-[#172554]",
      href: "/login/admin",
    },
  ];

  return (
    // h-screen and overflow-hidden ensures no scrolling occurs
    <div className="h-screen bg-white flex flex-col overflow-hidden font-sans">
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {loginOptions.map((option, index) => {
              const isHovered = hoveredCard === option.id;

              return (
                <Link
                  key={option.id}
                  href={option.href}
                  className="group"
                  onMouseEnter={() => setHoveredCard(option.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`
                      relative rounded-2xl overflow-hidden transition-all duration-500 ease-out
                      ${isHovered ? "shadow-2xl -translate-y-1" : "shadow-md translate-y-0"}
                    `}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Role-specific Branding Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>

                    {/* Adjusted sizing to prevent page scrolling */}
                    <div className="relative z-10 p-6 flex flex-col items-center text-center justify-center min-h-[220px]">
                      {/* Scaled Icon Container */}
                      <div
                        className={`w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-4 transition-all duration-500 ${
                          isHovered ? "scale-110 bg-white/30" : ""
                        }`}
                      >
                        <option.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {option.title}
                      </h3>
                    </div>

                    {/* Interactive Top Accent */}
                    <div
                      className={`absolute top-0 left-0 h-1 bg-white/40 transition-all duration-700 ${
                        isHovered ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
