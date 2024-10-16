import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoanForm from "./Components/LoanForm";
import LoanStatus from "./Components/LoanStatus";
import Dashboard from "./Components/Dashboard";
import AdminPanel from "./Components/AdminPanel";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoanForm />} />
        <Route path="/status" element={<LoanStatus />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
