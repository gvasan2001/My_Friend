import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";

const AppNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      navigate("/login");
    }
  };

  // Updated path checks for GitHub Pages deployment
  const isAuthPage = location.pathname.endsWith("/login") || 
  location.pathname.endsWith("/register") ||
  location.pathname === "/My_Friend" ||
  location.pathname === "/My_Friend/";

  return (
    <Navbar
      expand="lg"
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white fw-bold">
          My Friend
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isAuthPage ? (
              <>
                <Nav.Link as={Link} to="/login" className="text-white fw-semibold">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register" className="text-white fw-semibold">
                  Register
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/welcome" className="text-white fw-semibold">
                  Home
                </Nav.Link>
                <Nav.Link
                  as="button"
                  className="text-white fw-semibold bg-transparent border-0"
                  style={{ cursor: "pointer" }}
                  onClick={handleLogout}
                >
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;