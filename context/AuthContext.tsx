"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define user shape (adjust based on your actual user object)
export interface User {
  id: string;
  email: string;
  role: "admin" | "student" | "teacher" | "staff";
  name?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (
    email: string,
    password: string,
    role: "admin" | "student",
  ) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // On mount, check localStorage for a saved user (mock persistence)
  useEffect(() => {
    const savedUser = localStorage.getItem("ucet_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem("ucet_user");
      }
    }
    setLoading(false);
  }, []);

  // Mock login – accepts any credentials, creates a user based on role
  const login = async (
    email: string,
    password: string,
    role: "admin" | "student",
  ) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Create mock user
    const mockUser: User = {
      id: "mock-" + Date.now(),
      email,
      role,
      name: email.split("@")[0],
    };

    // Save to state and localStorage
    setUser(mockUser);
    localStorage.setItem("ucet_user", JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("ucet_user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
