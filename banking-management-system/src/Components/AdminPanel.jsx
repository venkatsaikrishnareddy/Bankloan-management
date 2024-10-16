import React, { useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [loanId, setLoanId] = useState("");
  const [action, setAction] = useState("");

  const handleApproval = async () => {
    try {
      await axios.put(`/api/admin/loans/approve`, { loanId, action });
      alert("Action successful!");
    } catch (error) {
      console.error("Error in loan approval", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Loan ID</label>
        <input
          type="text"
          value={loanId}
          onChange={(e) => setLoanId(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Enter Loan ID"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Action</label>
        <select
          value={action}
          onChange={(e) => setAction(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Action</option>
          <option value="approve">Approve</option>
          <option value="reject">Reject</option>
        </select>
      </div>
      <button
        onClick={handleApproval}
        className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700"
      >
        Submit Action
      </button>
    </div>
  );
};

export default AdminPanel;
