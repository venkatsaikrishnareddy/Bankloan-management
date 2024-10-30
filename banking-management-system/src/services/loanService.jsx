import axiosInstance from "./axiosInstance";

export const getAllLoans = async () => {
  const response = await axiosInstance.get("/loans");
  return response.data;
};

export const approveLoan = async (loanId) => {
  await axiosInstance.put(`/loans/approve/${loanId}`);
};

export const rejectLoan = async (loanId) => {
  await axiosInstance.put(`/loans/reject/${loanId}`);
};

export const applyForLoan = async (loanData) => {
  const response = await axiosInstance.post("/loans/apply", loanData);
  return response.data;
};

export const getUserLoans = async () => {
  const response = await axiosInstance.get("/loans/user");
  return response.data;
};
