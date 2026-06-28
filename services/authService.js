import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

export const login = async (email, password) => {
  try {
    const loginUrl = `${API_BASE_URL}/auth/login`;
    return await axios.post(
      loginUrl,
      { email, password },
      { withCredentials: true },
    );
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/auth/get-current-user`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerInitialAdmin = async (email, password, newPassword) => {
  try {
    const registerUrl = `${API_BASE_URL}/auth/register-as-admin`;
    return axios.post(registerUrl, { email, password, newPassword });
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  try {
    const logoutUrl = `${API_BASE_URL}/auth/logout`;
    return axios.post(logoutUrl, {}, { withCredentials: true });
  } catch (error) {
    throw error;
  }
};

export const registerStudent = (formData) => {
  try {
    const registerUrl = `${API_BASE_URL}/auth/reg-student`;
    return axios.post(registerUrl, formData, { withCredentials: true });
  } catch (error) {
    throw error;
  }
};
