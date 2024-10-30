import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./Components/PrivateRoute";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./Components/UserDashboard";
import AdminPage from "./pages/AdminPage";
import ProfilePage from "./pages/ProfilePage";
import LoanStatus from "./Components/LoanStatus"; // Adjust the import path if needed
import LoanForm from "./Components/LoanForm"; // Adjust the import path if needed

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <header className="text-3xl font-bold text-blue-600 mb-10">
            Geek Loans
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/loan-status" element={<LoanStatus />} />
            <Route path="/loan-form" element={<LoanForm />} />
            <Route
              path="/user-dashboard"
              element={
                <PrivateRoute>
                  <UserDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin-dashboard"
              element={
                <PrivateRoute>
                  <AdminPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
