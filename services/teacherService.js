import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

// GET all teachers
export const getAllTeachers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/hod/get-all-teacher`, {
      withCredentials: true,
    });
    return response.data.content || [];
  } catch (error) {
    throw error;
  }
};

export const addTeacher = async (teacherData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/hod/register-teacher`,
      teacherData,
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const promoteToHOD = async (teacherId) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/admin/promote-to-hod/${teacherId}`,
      null,
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const demoteToTeacher = async (teacherId) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/admin/demote-to-teacher/${teacherId}`,
      null,
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTeacher = async (teacherId, teacherData) => {
  console.log("Updating teacher:", teacherId, teacherData);
  return { ...teacherData, id: teacherId };
};

export const deleteTeacher = async (teacherId) => {
  console.log("Deleting teacher:", teacherId);
  return { message: "Deleted successfully" };
};

export const getAllQueries = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/hod/public-contact-us`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getQueryById = async (id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/hod/public-contact-us/${id}`,
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteQueryById = async (id) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/hod/public-contact-us/${id}`,
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const replyToQuery = async (id, replyMessage) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/hod/reply-contact-us/${id}`,
      {
        subject: replyMessage.subject,
        message: replyMessage.message,
      },
      { withCredentials: true },
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getStudentsByCourse = async (courseId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/attendance/students/${courseId}`,
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const markAttendanceForStudents = async (attendanceData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/attendance/update`,
      attendanceData,
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createStudentFee = async (feeData, studentId) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/hod/student/${studentId}`,
      feeData,
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateStudentFee = async (feeData, studentId, feeId) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/hod/student/${studentId}/fees/${feeId}`,
      feeData,
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteStudentFee = async (studentId, feeId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/hod/student/${studentId}/fees/${feeId}`,
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const recordFeePayment = async (studentId, feeId, paymentData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/hod/student/${studentId}/fees/${feeId}/payments`,
      paymentData,
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFeeByStatus = async (status) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/hod/fees`, {
      params: { status },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllStudents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/hod/student`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllStudentsPaginated = async (page, size, sort) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/hod/student`, {
      params: { page, size, sort },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getStudentById = async (studentId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/hod/student/${studentId}`,
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
