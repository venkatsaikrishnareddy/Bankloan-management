import axiosInstance from "./axiosInstance";

// Register new user
export const register = (username, password) => {
  return axiosInstance.post("/auth/register", { username, password });
};

// Login existing user
export const login = async (username, password) => {
  const response = await axiosInstance.post("/auth/login", {
    username,
    password,
  });
  if (response.data.token) {
    localStorage.setItem("jwtToken", response.data.token);
  }
  return response.data;
};

// Logout user
export const logout = () => {
  localStorage.removeItem("jwtToken");
};

// Get current user token
export const getCurrentUser = () => {
  return localStorage.getItem("jwtToken");
};

// Get user profile
export const getUserProfile = async () => {
  try {
    const response = await axiosInstance.get("/profile");
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

// Update user profile
export const updateUserProfile = async (userData) => {
  try {
    const response = await axiosInstance.put("/profile", userData);
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  getUserProfile,
  updateUserProfile,
};
