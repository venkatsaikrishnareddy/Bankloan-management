
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api", // Update with your backend URL if needed
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken"); // Retrieve JWT token from localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
