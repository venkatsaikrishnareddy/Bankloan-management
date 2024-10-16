import React, { useEffect, useState } from "react";
import axios from "axios";

const LoanStatus = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchLoanStatus = async () => {
      try {
        const response = await axios.get("/api/loans/status");
        setStatus(response.data.status);
      } catch (error) {
        console.error("Error fetching loan status", error);
      }
    };
    fetchLoanStatus();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Loan Status</h2>
      <p className="text-gray-700">Current Status: {status}</p>
    </div>
  );
};

export default LoanStatus;
