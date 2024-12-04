import React from "react";
// import { useNavigate } from "react-router-dom";

import Login from "./LoginPage"; // Import Login Page

const AuthUser = () => {
  const email = localStorage.getItem("EmailInput");
  const password = localStorage.getItem("PasswordInput");

  // Simple authentication check
  return email === "sales@Chemcoats.com" && password === "1234";
};

const Protect = ({ children }) => {
  // const navigate = useNavigate(); // Get navigate function
  const isAuth = AuthUser(); // Check if user is authenticated

  if (!isAuth) {
    // navigate("/login"); // Redirect to login page if not authenticated
    return null; // Do not render anything else
  }

  return children; // Render children if authenticated
};

export default Protect;
