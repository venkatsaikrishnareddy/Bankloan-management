import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Welcome to the Bank Loan Management System
      </h1>
      <p className="text-lg mb-4">
        Manage your loans easily by applying for loans, tracking your loan
        status, and more.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/profile"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Go to Profile
        </Link>
        <Link
          to="/loan-form"
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700"
        >
          Apply for a Loan
        </Link>
        <Link
          to="/loan-status"
          className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700"
        >
          Check Loan Status
        </Link>
        <Link
          to="/user-dashboard"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Go to Dashboard
        </Link>
        <Link
          to="/admin-dashboard"
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Admin Panel
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
