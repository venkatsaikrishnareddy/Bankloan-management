import React, { useEffect, useState } from "react";
import { getAllLoans, approveLoan, rejectLoan } from "../services/loanService";

const AdminPage = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoans = async () => {
      const allLoans = await getAllLoans();
      setLoans(allLoans);
      setLoading(false);
    };
    fetchLoans();
  }, []);

  const handleApprove = async (loanId) => {
    await approveLoan(loanId);
    alert("Loan approved!");
  };

  const handleReject = async (loanId) => {
    await rejectLoan(loanId);
    alert("Loan rejected!");
  };

  if (loading) return <p>Loading loans...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Panel - Loan Management</h2>
      <div className="grid grid-cols-1 gap-6">
        {loans.map((loan) => (
          <div key={loan.id} className="bg-white p-4 rounded-lg shadow-md">
            <p>
              <strong>Loan ID:</strong> {loan.id}
            </p>
            <p>
              <strong>Loan Type:</strong> {loan.loanType}
            </p>
            <p>
              <strong>Amount:</strong> ${loan.amount}
            </p>
            <p>
              <strong>Status:</strong> {loan.status}
            </p>
            <button
              onClick={() => handleApprove(loan.id)}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 mr-2"
            >
              Approve
            </button>
            <button
              onClick={() => handleReject(loan.id)}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
            >
              Reject
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
