import React from "react";
import LoanStatus from "./LoanStatus";
import LoanForm from "./LoanForm";

const UserDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Apply for a New Loan</h2>
          <LoanForm />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Your Loan Status</h2>
          <LoanStatus />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
