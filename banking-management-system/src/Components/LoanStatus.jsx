import React, { useEffect, useState } from "react";
import { getUserLoans } from "../services/loanService";

const LoanStatus = () => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoans = async () => {
      const userLoans = await getUserLoans();
      setLoans(userLoans);
      setLoading(false);
    };
    fetchLoans();
  }, []);

  if (loading) return <p>Loading loans...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Loan Status</h2>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanStatus;
