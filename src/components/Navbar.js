import React from "react";
import { Navbar, Container } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <Navbar
      expand="lg"
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container>
        <Navbar.Brand href="#" className="text-white fw-bold">
          My Friend
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
