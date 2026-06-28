import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

export const getAllNonTeachingStaff = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/public/non-teaching`, {
      withCredentials: true,
    });
    return response.data?.content || response.data || [];
  } catch (error) {
    throw error;
  }
};

export const addNonTeachingStaff = async (staffData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/hod/non-teaching`,
      {
        name: staffData.name,
        profilePic: staffData.profilePic || "",
        department: staffData.department,
        email: staffData.email,
        designation: staffData.designation,
        phone: staffData.phone,
        education: staffData.education,
      },
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateNonTeachingStaff = async (staffId, staffData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/hod/non-teaching/${staffId}`,
      staffData,
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteNonTeachingStaff = async (staffId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/hod/non-teaching/${staffId}`,
      { withCredentials: true },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
