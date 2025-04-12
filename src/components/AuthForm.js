import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Toast } from "react-bootstrap";
import axios from "axios";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    var data = await axios.post("http://127.0.0.1:5000/signup",formData)
  
    // if (data.data.status == "success"){
    //   Toast(data.data.message)
      
    // }else{
    //   Toast(data.data.message)

    // }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-4 shadow-lg rounded-lg" style={{ background: "#ffffffdd" }}>
              <Card.Title className="text-center text-primary fs-3 fw-bold">
                {isLogin ? "Login" : "Register"}
              </Card.Title>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  {!isLogin && (
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  )}
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    {isLogin ? "Login" : "Register"}
                  </Button>
                </Form>
                <p className="text-center mt-3">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                  <span
                    className="text-primary fw-bold"
                    onClick={() => setIsLogin(!isLogin)}
                    style={{ cursor: "pointer" }}
                  >
                    {isLogin ? "Register" : "Login"}
                  </span>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AuthForm;
