import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

export const getDashboardData = async () => {
  try {
    // Uncomment when backend is ready:
    // const response = await axios.get(`${API_BASE_URL}/dashboard/data`);
    // return response.data;

    console.log("Using mock dashboard data.");
    return {
      kpi: {
        totalStudents: 300,
        totalStaff: 38,
        completionRate: 85,
        newMessages: 12,
      },
      myClasses: [
        {
          id: 1,
          subject: "Computer Network",
          class: "A-301",
          day: "Mon",
          time: "10:00 AM",
        },
        { id: 2, subject: "NLP", class: "A-302", day: "Tue", time: "12:00 PM" },
        {
          id: 3,
          subject: "Database",
          class: "C-202",
          day: "Wed",
          time: "10:30 AM",
        },
      ],
      topStudents: [
        { id: 1, name: "Mansi Verma", rollNo: "CSE-01", phone: "9876543210" },
        { id: 2, name: "Faiz Arfi", rollNo: "CSE-12", phone: "9876543211" },
        { id: 3, name: "Sanjeev Kumar", rollNo: "CSE-05", phone: "9876543212" },
      ],
    };
  } catch (error) {
    console.error("Failed to fetch dashboard data:", error);
    throw error;
  }
};
