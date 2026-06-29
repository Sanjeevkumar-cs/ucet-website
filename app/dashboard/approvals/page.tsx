// app/dashboard/approvals/page.tsx
"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import styles from "../dashboard.module.css";
import {
  Menu,
  UserPlus,
  CheckCircle,
  XCircle,
  Clock,
  Mail,
  GraduationCap,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

// --- Types & Mock Data ---
type RegistrationStatus = "Pending" | "Approved" | "Rejected";

interface RegistrationRequest {
  _id: string;
  fullName: string;
  email: string;
  course: string;
  requestDate: string;
  status: RegistrationStatus;
}

const MOCK_REQUESTS: RegistrationRequest[] = [
  {
    _id: "REQ001",
    fullName: "Amit Kumar",
    email: "amit.k@example.com",
    course: "B.Tech Computer Science",
    requestDate: "2026-06-28",
    status: "Pending",
  },
  {
    _id: "REQ002",
    fullName: "Priya Singh",
    email: "priya.s@example.com",
    course: "B.Tech Information Tech",
    requestDate: "2026-06-27",
    status: "Pending",
  },
  {
    _id: "REQ003",
    fullName: "Rahul Sharma",
    email: "rahul.s@example.com",
    course: "B.Tech Mechanical",
    requestDate: "2026-06-27",
    status: "Approved",
  },
  {
    _id: "REQ004",
    fullName: "Neha Gupta",
    email: "neha.g@example.com",
    course: "B.Tech Civil",
    requestDate: "2026-06-25",
    status: "Rejected",
  },
];

export default function ApprovalsPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Data State
  const [requests, setRequests] = useState<RegistrationRequest[]>([]);
  const [loading, setLoading] = useState(true);

  // --- Layout Effect ---
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setSidebarOpen(false);
      else setSidebarOpen(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- Initial Data Fetch ---
  useEffect(() => {
    if (!user) {
      router.push("/login");
      return;
    }
    // Simulate API fetch from backend
    setTimeout(() => {
      setRequests(MOCK_REQUESTS);
      setLoading(false);
    }, 800);
  }, [user, router]);

  // --- Status Update Handler ---
  const handleStatusUpdate = async (
    id: string,
    newStatus: RegistrationStatus,
  ) => {
    // Optimistic UI Update
    setRequests((prev) =>
      prev.map((req) => (req._id === id ? { ...req, status: newStatus } : req)),
    );

    // TODO: Connect to your MERN backend here
    /*
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/registrations/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      });
    } catch (error) {
      console.error("Failed to update status", error);
      // Revert state if API fails...
    }
    */
  };

  if (!user) {
    return (
      <div className={styles.loadingWrapper}>
        <div className={styles.loadingSpinnerContainer}>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>Loading approvals...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex min-h-screen ${styles.dashboardWrapper} relative`}>
      {/* Sidebar Component */}
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

      {/* Floating Toggle Button for Mobile */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className={styles.floatingToggle}
          title="Expand Sidebar"
        >
          <Menu size={20} />
        </button>
      )}

      {/* Main Content Area */}
      <main
        className={`${styles.mainContainer} ${!sidebarOpen ? styles.mainContentShifted : ""}`}
      >
        <div className="max-w-6xl mx-auto space-y-6">
          {!sidebarOpen && <div className={styles.topSpacerMobile} />}

          {/* Header Section */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
              <UserPlus size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Registration Approvals
              </h1>
              <p className="text-sm text-gray-500">
                Review and manage new student registration requests
              </p>
            </div>
          </div>

          {/* Approvals Table Widget */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h2 className="text-base font-semibold text-gray-800">
                Pending Requests
              </h2>
              <div className="flex gap-2">
                <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">
                  {requests.filter((r) => r.status === "Pending").length}{" "}
                  Pending
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">
                  {requests.length} Total
                </span>
              </div>
            </div>

            {loading ? (
              <div className="py-20 flex justify-center">
                <div className={styles.spinner}></div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                      <th className="p-4 font-semibold">Student Details</th>
                      <th className="p-4 font-semibold">Course Applied</th>
                      <th className="p-4 font-semibold">Date</th>
                      <th className="p-4 font-semibold">Status</th>
                      <th className="p-4 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {requests.map((req) => (
                      <tr
                        key={req._id}
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        {/* Student Details */}
                        <td className="p-4">
                          <div className="font-semibold text-gray-800 text-sm">
                            {req.fullName}
                          </div>
                          <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                            <Mail size={12} /> {req.email}
                          </div>
                        </td>

                        {/* Course */}
                        <td className="p-4">
                          <div className="text-sm text-gray-700 flex items-center gap-2">
                            <GraduationCap
                              size={16}
                              className="text-gray-400"
                            />
                            {req.course}
                          </div>
                        </td>

                        {/* Date */}
                        <td className="p-4 text-sm text-gray-600">
                          {req.requestDate}
                        </td>

                        {/* Status Badge */}
                        <td className="p-4">
                          <span
                            className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border
                            ${
                              req.status === "Approved"
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                : req.status === "Rejected"
                                  ? "bg-red-50 text-red-700 border-red-200"
                                  : "bg-yellow-50 text-yellow-700 border-yellow-200"
                            }`}
                          >
                            {req.status === "Approved" && (
                              <CheckCircle size={12} />
                            )}
                            {req.status === "Rejected" && <XCircle size={12} />}
                            {req.status === "Pending" && <Clock size={12} />}
                            {req.status}
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {/* Set Pending Button */}
                            <button
                              onClick={() =>
                                handleStatusUpdate(req._id, "Pending")
                              }
                              disabled={req.status === "Pending"}
                              className={`p-1.5 rounded-lg border transition-colors ${
                                req.status === "Pending"
                                  ? "bg-gray-100 text-gray-400 border-gray-100 cursor-not-allowed"
                                  : "bg-white text-yellow-600 border-yellow-200 hover:bg-yellow-50"
                              }`}
                              title="Mark as Pending"
                            >
                              <Clock size={16} />
                            </button>

                            {/* Approve Button */}
                            <button
                              onClick={() =>
                                handleStatusUpdate(req._id, "Approved")
                              }
                              disabled={req.status === "Approved"}
                              className={`p-1.5 rounded-lg border transition-colors ${
                                req.status === "Approved"
                                  ? "bg-gray-100 text-gray-400 border-gray-100 cursor-not-allowed"
                                  : "bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50"
                              }`}
                              title="Approve Request"
                            >
                              <CheckCircle size={16} />
                            </button>

                            {/* Reject Button */}
                            <button
                              onClick={() =>
                                handleStatusUpdate(req._id, "Rejected")
                              }
                              disabled={req.status === "Rejected"}
                              className={`p-1.5 rounded-lg border transition-colors ${
                                req.status === "Rejected"
                                  ? "bg-gray-100 text-gray-400 border-gray-100 cursor-not-allowed"
                                  : "bg-white text-red-600 border-red-200 hover:bg-red-50"
                              }`}
                              title="Reject Request"
                            >
                              <XCircle size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}

                    {requests.length === 0 && (
                      <tr>
                        <td
                          colSpan={5}
                          className="p-8 text-center text-gray-500"
                        >
                          No registration requests found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
