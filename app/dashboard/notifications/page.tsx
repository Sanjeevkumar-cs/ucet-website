// app/dashboard/notifications/page.tsx
"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import styles from "../dashboard.module.css";
import {
  Bell,
  Plus,
  Trash2,
  Edit3,
  Send,
  X,
  AlertCircle,
  CheckCircle,
  Menu,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

interface Notification {
  _id: string;
  title: string;
  content: string;
  targetAudience: string;
  createdAt?: string;
}

export default function NotificationsManagementPage() {
  const { user } = useAuth();
  const router = useRouter();

  // Layout State
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Data State
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Form State
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    targetAudience: "All",
  });

  // Base API URL from environment variables
  const API_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

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

  // --- Fetch Notifications (Read) ---
  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      // Replace with your actual MERN endpoint
      const res = await fetch(`${API_URL}/api/notifications`);
      if (!res.ok) throw new Error("Failed to fetch notifications");
      const data = await res.json();
      setNotifications(data);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // --- Form Handlers ---
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({ title: "", content: "", targetAudience: "All" });
    setIsEditing(false);
    setCurrentId(null);
  };

  // --- Submit (Create & Update) ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    try {
      const url = isEditing
        ? `${API_URL}/api/notifications/${currentId}`
        : `${API_URL}/api/notifications`;

      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to save notification");

      setSuccessMsg(
        isEditing
          ? "Notification updated successfully!"
          : "Notification sent successfully!",
      );
      resetForm();
      fetchNotifications(); // Refresh the list

      setTimeout(() => setSuccessMsg(null), 3000);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  // --- Edit (Populate Form) ---
  const handleEdit = (notification: Notification) => {
    setIsEditing(true);
    setCurrentId(notification._id);
    setFormData({
      title: notification.title,
      content: notification.content,
      targetAudience: notification.targetAudience,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- Delete ---
  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this notification?"))
      return;

    try {
      const res = await fetch(`${API_URL}/api/notifications/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete notification");

      setSuccessMsg("Notification deleted successfully!");
      setNotifications(notifications.filter((n) => n._id !== id));

      setTimeout(() => setSuccessMsg(null), 3000);
    } catch (err: any) {
      setError(err.message || "Could not delete notification");
    }
  };

  if (!user) {
    return (
      <div className={styles.loadingWrapper}>
        <div className={styles.loadingSpinnerContainer}>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>Loading...</p>
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
        <div className="max-w-5xl mx-auto space-y-6">
          {!sidebarOpen && <div className={styles.topSpacerMobile} />}

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
              <Bell size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Notification Center
              </h1>
              <p className="text-sm text-gray-500">
                Manage and broadcast institutional announcements
              </p>
            </div>
          </div>

          {/* Status Messages */}
          {error && (
            <div className="p-4 mb-4 text-sm text-red-700 bg-red-50 rounded-lg flex items-center gap-2 border border-red-200">
              <AlertCircle size={16} /> {error}
            </div>
          )}
          {successMsg && (
            <div className="p-4 mb-4 text-sm text-emerald-700 bg-emerald-50 rounded-lg flex items-center gap-2 border border-emerald-200">
              <CheckCircle size={16} /> {successMsg}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Form Section (Left Column) */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sticky top-6">
                <h2 className="text-base font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  {isEditing ? (
                    <Edit3 size={18} className="text-amber-500" />
                  ) : (
                    <Plus size={18} className="text-primary" />
                  )}
                  {isEditing ? "Edit Notification" : "Compose New"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Target Audience
                    </label>
                    <select
                      name="targetAudience"
                      value={formData.targetAudience}
                      onChange={handleInputChange}
                      className="w-full text-sm p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="All">All Users (Global)</option>
                      <option value="Students">Students Only</option>
                      <option value="Teachers">Teachers Only</option>
                      <option value="Parents">Parents Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Title / Subject
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="E.g., Exam Schedule Updated"
                      required
                      className="w-full text-sm p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Message Content
                    </label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      placeholder="Write your announcement here..."
                      rows={5}
                      required
                      className="w-full text-sm p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-primary hover:bg-blue-800 text-white font-medium py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
                    >
                      <Send size={16} />
                      {isEditing ? "Update" : "Publish"}
                    </button>
                    {isEditing && (
                      <button
                        type="button"
                        onClick={resetForm}
                        className="px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 rounded-lg text-sm transition-colors"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Active Notifications List (Right Column) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <h2 className="text-base font-semibold text-gray-800">
                    Active Broadcasts
                  </h2>
                  <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                    {notifications.length} Total
                  </span>
                </div>

                {loading ? (
                  <div className="py-12 flex justify-center">
                    <div className={styles.spinner}></div>
                  </div>
                ) : notifications.length === 0 ? (
                  <div className="py-12 text-center">
                    <Bell size={48} className="mx-auto text-gray-200 mb-3" />
                    <p className="text-gray-500 text-sm">
                      No active notifications found.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {notifications.map((note) => (
                      <div
                        key={note._id}
                        className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm
                                ${
                                  note.targetAudience === "All"
                                    ? "bg-purple-100 text-purple-700"
                                    : note.targetAudience === "Students"
                                      ? "bg-blue-100 text-blue-700"
                                      : note.targetAudience === "Teachers"
                                        ? "bg-emerald-100 text-emerald-700"
                                        : "bg-orange-100 text-orange-700"
                                }`}
                              >
                                {note.targetAudience}
                              </span>
                              <span className="text-xs text-gray-400">
                                {note.createdAt
                                  ? new Date(
                                      note.createdAt,
                                    ).toLocaleDateString()
                                  : "Just now"}
                              </span>
                            </div>
                            <h3 className="font-semibold text-gray-800 text-sm mb-1 truncate">
                              {note.title}
                            </h3>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {note.content}
                            </p>
                          </div>

                          <div className="flex items-center gap-1 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => handleEdit(note)}
                              className="p-2 text-gray-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <Edit3 size={16} />
                            </button>
                            <button
                              onClick={() => handleDelete(note._id)}
                              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
