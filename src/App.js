import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import FriendForm from "./components/FriendForm";
import AppNavbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadDetailsForm from "./components/UploadDetailsForm";

const App = () => {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/friend-form" element={<FriendForm />} />
        <Route path="/upload-details" element={<UploadDetailsForm />} />
      </Routes>
    </Router>
  );
};

export default App;
