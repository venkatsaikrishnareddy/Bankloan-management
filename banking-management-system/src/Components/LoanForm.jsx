import React, { useState } from "react";
import axios from "axios";

const LoanForm = () => {
  const [loanData, setLoanData] = useState({
    loanType: "",
    amount: "",
    tenure: "",
  });

  const handleChange = (e) => {
    setLoanData({
      ...loanData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/loans/apply", loanData);
      console.log("Loan Applied: ", response.data);
    } catch (error) {
      console.error("Error applying for loan", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Apply for a Loan</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Loan Type</label>
          <input
            type="text"
            name="loanType"
            value={loanData.loanType}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter loan type"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Amount</label>
          <input
            type="number"
            name="amount"
            value={loanData.amount}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter amount"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tenure (months)</label>
          <input
            type="number"
            name="tenure"
            value={loanData.tenure}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter tenure"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Submit Loan Application
        </button>
      </form>
    </div>
  );
};

export default LoanForm;
