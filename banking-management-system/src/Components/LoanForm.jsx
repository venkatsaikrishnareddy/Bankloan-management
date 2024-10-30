import React, { useState } from "react";
import { applyForLoan } from "../services/loanService";

const LoanForm = () => {
  const [loanType, setLoanType] = useState("");
  const [amount, setAmount] = useState("");
  const [tenure, setTenure] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await applyForLoan({ loanType, amount, tenure });
      setMessage("Loan application submitted successfully!");
    } catch (error) {
      setMessage("Failed to submit loan application. Please try again.");
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80">
      <h2 className="text-2xl font-bold text-center mb-5">Apply for a Loan</h2>
      {message && <p className="text-green-500 text-center">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          placeholder="Loan Type"
          value={loanType}
          onChange={(e) => setLoanType(e.target.value)}
          required
          className="mb-4 px-3 py-2 border rounded"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="mb-4 px-3 py-2 border rounded"
        />
        <input
          type="number"
          placeholder="Tenure (months)"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          required
          className="mb-6 px-3 py-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded font-semibold hover:bg-blue-600"
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default LoanForm;
