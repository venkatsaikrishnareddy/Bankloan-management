import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Loan Information</h2>
          <p className="text-gray-700">Loan Amount: $10,000</p>
          <p className="text-gray-700">Interest Rate: 5%</p>
          <p className="text-gray-700">Tenure: 36 months</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Payments</h2>
          <p className="text-gray-700">Monthly Payment: $300</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
