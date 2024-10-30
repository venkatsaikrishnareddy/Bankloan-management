import React, { useEffect, useState } from "react";
import axiosInstance from "../services/axiosInstance";

const TestConnection = () => {
  const [status, setStatus] = useState("Connecting...");

  useEffect(() => {
    const testConnection = async () => {
      try {
        await axiosInstance.get("/test");
        setStatus("Connected to backend!");
      } catch (error) {
        setStatus("Failed to connect to backend.");
      }
    };
    testConnection();
  }, []);

  return <p>{status}</p>;
};

export default TestConnection;
