// app/dashboard/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Sidebar from "@/components/Sidebar";
import styles from "./dashboard.module.css";
import {
  BookOpen,
  FileText,
  DollarSign,
  Bus,
  TrendingUp,
  Users,
  Menu,
  GraduationCap,
  Calendar,
  Award,
  Trophy,
} from "lucide-react";

// --- Mock Data ---
const MOCK_STATS = [
  {
    label: "Students",
    value: "2,000",
    icon: GraduationCap,
    colorClass: "blue",
  },
  { label: "Teachers", value: "120", icon: Users, colorClass: "green" },
  { label: "Parents", value: "2,115", icon: Users, colorClass: "purple" },
  { label: "Staff", value: "82", icon: Users, colorClass: "orange" },
];

const MOCK_PERFORMANCE = [
  { subject: "Science", pass: 88, fail: 12 },
  { subject: "English", pass: 70, fail: 30 },
  { subject: "History", pass: 82, fail: 18 },
  { subject: "Art", pass: 98, fail: 2 },
];

const MOCK_ACHIEVERS = [
  { name: "Madhiha Sharma", achievement: "Top Ranker" },
  { name: "Rahul Gupta", achievement: "Sports Captain" },
  { name: "Aisha Khan", achievement: "Science Olympiad" },
];

const MOCK_PLAYERS = [
  { name: "Rahul Gupta", achievement: "Cricket Captain" },
  { name: "Priya Singh", achievement: "Football Star" },
];

const MOCK_EVENTS = [
  {
    id: 1,
    title: "School President Elections",
    date: "6 Feb",
    time: "11:00 AM - 12:30 PM",
    borderClass: "borderBlue",
  },
  {
    id: 2,
    title: "Special Guest Lecture",
    date: "9 Feb",
    time: "11:00 AM - 12:30 PM",
    borderClass: "borderOrange",
  },
  {
    id: 3,
    title: "Webinar on Career Trends for Class 11",
    date: "9 Feb",
    time: "01:00 PM - 02:30 PM",
    borderClass: "borderGreen",
  },
];

const QUICK_ACTIONS = [
  { label: "Admissions", icon: Users, variant: "primary" },
  { label: "Fees", icon: DollarSign, variant: "normal" },
  { label: "Syllabus", icon: BookOpen, variant: "normal" },
  { label: "Results", icon: TrendingUp, variant: "accent" },
  { label: "Transport", icon: Bus, variant: "normal" },
  { label: "Finance", icon: FileText, variant: "normal" },
];

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  // Sync window breakpoints cleanly
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!user) {
    return (
      <div className={styles.loadingWrapper}>
        <div className={styles.loadingSpinnerContainer}>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex min-h-screen ${styles.dashboardWrapper} relative`}>
      {/* ===== SIDEBAR COMPONENT ===== */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        user={user}
      />

      {/* Mobile Dark Backdrop Overlay */}
      {sidebarOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Floating Toggle Button */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className={styles.floatingToggle}
          title="Expand Sidebar"
        >
          <Menu size={20} />
        </button>
      )}

      {/* ===== MAIN CONTENT ===== */}
      <main
        className={`${styles.mainContainer} ${!sidebarOpen ? styles.mainContentShifted : ""}`}
      >
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Dynamic Top layout margin space compensation */}
          {!sidebarOpen && <div className={styles.topSpacerMobile} />}

          {/* OVERVIEW STATS GRID */}
          <section>
            <h2 className={styles.sectionTitle}>Overview Status</h2>
            <div className={styles.statsGrid}>
              {MOCK_STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className={styles.statCard}>
                    <div
                      className={`${styles.statIcon} ${styles[stat.colorClass]}`}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className={styles.statValue}>{stat.value}</p>
                      <p className={styles.statLabel}>{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* QUICK shortCUT ACTIONS */}
          <section>
            <h2 className={styles.sectionTitle}>Quick Shortcuts</h2>
            <div className={styles.quickActions}>
              {QUICK_ACTIONS.map((action) => {
                const Icon = action.icon;
                const btnTypeClass =
                  action.variant === "primary"
                    ? styles.primary
                    : action.variant === "accent"
                      ? styles.accent
                      : "";

                return (
                  <button
                    key={action.label}
                    className={`${styles.quickBtn} ${btnTypeClass}`}
                  >
                    <Icon size={16} />
                    <span>{action.label}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* SPLIT COLUMN GRID CONTENT */}
          <div className={styles.dashboardGrid}>
            {/* Left Column: Academics Chart Progress */}
            <div className={styles.columnLeft}>
              <div className={styles.widget}>
                <div className={styles.widgetHeader}>
                  <h3 className={styles.widgetTitle}>
                    <TrendingUp size={18} className="text-primary" />
                    <span>Students Academic Performance Matrix</span>
                  </h3>
                  <div className="flex items-center gap-3 text-xs font-medium">
                    <span className="flex items-center gap-1.5 text-emerald-600">
                      <span className={styles.pulseIndicator}></span>
                      Passed
                    </span>
                    <span className="flex items-center gap-1.5 text-rose-600">
                      <span className="w-2 h-2 bg-rose-500 rounded-full"></span>
                      Failed
                    </span>
                  </div>
                </div>

                <div className={styles.marksProgress}>
                  {MOCK_PERFORMANCE.map((item) => (
                    <div key={item.subject} className={styles.marksRow}>
                      <span className={styles.subjectName}>{item.subject}</span>
                      <div className={styles.barTrack}>
                        <div
                          className={styles.barFill}
                          style={{ width: `${item.pass}%` }}
                        ></div>
                      </div>
                      <span className={styles.score}>
                        {item.pass}%
                        <span className={styles.scoreDivider}>/</span>
                        <span className={styles.scoreFail}>{item.fail}%</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Honors Leaders Feed */}
            <div className={styles.columnRight}>
              <div className={styles.widget}>
                <div className={styles.widgetHeader}>
                  <h3 className={styles.widgetTitle}>
                    <Award size={18} className="text-amber-500" />
                    <span>Academic Top Achievers</span>
                  </h3>
                </div>
                <div className={styles.subjectList}>
                  {MOCK_ACHIEVERS.map((person) => (
                    <div key={person.name} className={styles.subjectItem}>
                      <span className={styles.subjectName}>{person.name}</span>
                      <span
                        className={`${styles.statusBadge} ${styles.active}`}
                      >
                        {person.achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.widget}>
                <div className={styles.widgetHeader}>
                  <h3 className={styles.widgetTitle}>
                    <Trophy size={18} className="text-blue-500" />
                    <span>Athletic & Star MVP Players</span>
                  </h3>
                </div>
                <div className={styles.subjectList}>
                  {MOCK_PLAYERS.map((person) => (
                    <div key={person.name} className={styles.subjectItem}>
                      <span className={styles.subjectName}>{person.name}</span>
                      <span
                        className={`${styles.statusBadge} ${styles.completed}`}
                      >
                        {person.achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* LOWER INSTIUTION EVENTS FEED */}
          <section className={styles.widget}>
            <div className={styles.widgetHeader}>
              <h3 className={styles.widgetTitle}>
                <Calendar size={18} className="text-primary" />
                <span>Upcoming Institutional Events & Notices</span>
              </h3>
              <button className={styles.widgetMore}>View Full Calendar</button>
            </div>
            <div className={styles.activityFeed}>
              {MOCK_EVENTS.map((event) => (
                <div
                  key={event.id}
                  className={`${styles.activityItem} ${styles[event.borderClass]}`}
                >
                  <div className={styles.activityContent}>
                    <strong>{event.title}</strong>
                    <div className={styles.activityTime}>
                      <span>{event.date}</span>
                      <span className="mx-2">•</span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
