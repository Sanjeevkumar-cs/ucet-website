import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

export const getAllDepartments = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/public/department`, {
      withCredentials: true,
    });
    return response.data.content || [];
  } catch (error) {
    throw error;
  }
};

export const getDepartmentById = async (id) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/public/department/${id}`,
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllCourses = async () => {
  const response = await axios.get(`${API_BASE_URL}/public/course`);
  return response.data.content || [];
};

export const getCourseById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/public/course/${id}`);
  return response.data;
};

export const getAllPublicTeachers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/public/teacher`);
    return response.data.content || [];
  } catch (error) {
    throw error;
  }
};

export const getTeacherById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/public/teacher/${id}`, {
    withCredentials: true,
  });
  return response.data;
};

export const contactUsData = async (formData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/public/contact`,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      { withCredentials: true },
    );
    return response;
  } catch (error) {
    throw error;
  }
};
