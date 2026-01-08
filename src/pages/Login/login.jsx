import { Button, Card, Form, Input, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => { 
    const navigate = useNavigate();
    const signups = JSON.parse(localStorage.getItem("signupdata"));

    const handleLogin = (values) => {
        const { email, password } = values || {};

      if (!signups) {
        message.error("No signup data found. Please signup first.");
        localStorage.removeItem("login");
        localStorage.removeItem("signupdata");
        navigate('/signup');
        return;
      }

      if (email === signups.email && password === signups.password) {
        localStorage.setItem("login", JSON.stringify({ loggedIn: true, email }));
        message.success("Login successful");
        navigate('/home');
      } else {
        message.error("Invalid email or password");
        localStorage.removeItem("login");
        localStorage.removeItem("signupdata");
        navigate('/signup');
      }
    };
    return ( 
    <div
      style={{
        height: "500px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
       
      <Card
        title="Login"
        style={{
          height: "300px",
          width: "90%",
        }}
      >
        <Form onFinish={handleLogin} layout="vertical">
          <Form.Item
            label="Email:"
            name="email"
            rules={[{ required: true, message: "please enter your email" }]}
          >
            <Input style={{height:'35px', width:'70%'}} type="email" placeholder="please enter your email" />
          </Form.Item>
          <Form.Item label="Password:" name="password" rules={[{ required: true, message: "please enter your password" }]}>
            <Input style={{height:'35px', width:'70%'}} type="password" placeholder="please enter your password" />
          </Form.Item>
          <Button className="btn" type="primary" htmlType="submit">Submit</Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
