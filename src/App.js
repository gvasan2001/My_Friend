import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import FriendForm from "./components/FriendForm";
import AppNavbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadDetailsForm from "./components/UploadDetailsForm";
import AuthPage from "./components/AuthForm";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Welcome from "./components/Welcome";
import Loading from "./components/Loading";

const App = () => {
  return (
    <Router basename="/My_Friend">
      <AppNavbar />
      <Routes>
        {/* Redirect root path to /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Login route */}
        <Route
          path="/login"
          element={
            <AuthPage>
              <LoginForm />
            </AuthPage>
          }
        />
        
        {/* Registerrrrr route */}
        <Route
          path="/register"
          element={
            <AuthPage>
              <RegisterForm />
            </AuthPage>
          }
        />
        
        {/* Protected routes */}
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/friend-form" element={<FriendForm />} />
        <Route path="/upload-details" element={<UploadDetailsForm />} />
        <Route path="/loading" element={<Loading />} />
        
        {/* Catch-all route redirects to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;