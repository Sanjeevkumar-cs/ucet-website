import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

export const getStudentDashboardData = async () => {
  // Using mock data for now
  return {
    attendance: 92,
    feesDue: 5000,
    newNotices: 3,
    totalSubjects: 6,
  };
};

export const getFeeDetails = async () => {
  return [
    {
      id: 1,
      invoice: "INV-2023-1001",
      semester: "1st",
      status: "Paid",
      total: 60000,
      paid: 60000,
      date: "1/12/2023",
    },
    {
      id: 2,
      invoice: "INV-2023-1002",
      semester: "2nd",
      status: "Partial Payment",
      total: 85000,
      paid: 30000,
      date: "2/12/2023",
    },
    {
      id: 3,
      invoice: "INV-2023-1003",
      semester: "3rd",
      status: "Unpaid",
      total: 60000,
      paid: 0,
      date: "3/12/2023",
    },
    {
      id: 4,
      invoice: "INV-2023-1004",
      semester: "4th",
      status: "Paid",
      total: 60000,
      paid: 60000,
      date: "4/12/2023",
    },
  ];
};

export const getEvents = async () => {
  return [
    {
      id: 1,
      title: 'Annual Tech Fest "Genesis"',
      date: "Oct 15, 2025",
      description:
        "A 3-day event showcasing the latest in technology and innovation.",
    },
    {
      id: 2,
      title: "Inter-Departmental Sports Meet",
      date: "Nov 02, 2025",
      description:
        "Compete in various sports and win prizes for your department.",
    },
    {
      id: 3,
      title: "Alumni Homecoming 2025",
      date: "Dec 20, 2025",
      description:
        "Connect with past graduates and expand your professional network.",
    },
  ];
};

export const getNotices = async () => {
  return [
    {
      id: 1,
      title: "Mid-Term Exam Schedule",
      date: "September 05, 2025",
      content:
        "The schedule for the upcoming mid-term examinations has been published. Please check the examination section for details.",
    },
    {
      id: 2,
      title: "Holiday Notification",
      date: "September 10, 2025",
      content:
        "The university will be closed on September 12, 2025, in observance of the annual city festival.",
    },
    {
      id: 3,
      title: "Campus Placement Drive",
      date: "October 01, 2025",
      content:
        "A campus placement drive is being organized on October 15, 2025. Interested students should register by October 10, 2025.",
    },
  ];
};

export const getStudentAttendanceByRollNo = async (rollNo) => {
  const response = await axios.get(
    `${API_BASE_URL}/attendance/student/${rollNo}`,
    {
      withCredentials: true,
    },
  );
  return response.data;
};

export const getStudentAttendanceById = async (studentId) => {
  const response = await axios.get(
    `${API_BASE_URL}/attendance/student/id/${studentId}`,
    {
      withCredentials: true,
    },
  );
  return response.data;
};

export const getStudentFee = async (studentId) => {
  const response = await axios.get(
    `${API_BASE_URL}/student/${studentId}/fees`,
    {
      withCredentials: true,
    },
  );
  return response.data;
};

export const getStudentFeeOfSemester = async (studentId, semester) => {
  const response = await axios.get(
    `${API_BASE_URL}/student/${studentId}/fees/${semester}`,
    {
      withCredentials: true,
    },
  );
  return response.data;
};
