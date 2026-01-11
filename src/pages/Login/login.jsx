import { Button, Card, Form, Input, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => { 
    const navigate = useNavigate();
 
    const _rawSignups = JSON.parse(localStorage.getItem("signupdata"));
    const signups = Array.isArray(_rawSignups) ? _rawSignups : _rawSignups ? [_rawSignups] : [];
  const logins = JSON.parse(localStorage.getItem("logindata")) || [];


  const handleLogin = (values) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === values.email && u.password === values.password
    );

    if (!user) {
      message.error("Invalid credentials");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    if (user.status === "pending") {
      message.warning("Account pending admin approval");
      navigate("/home");
      return;
    }

    const role = Number(user.role);
    if (role === 1) navigate("/admin");
    if (role === 2) navigate("/teacherdashboard");
    if (role === 4) navigate("/studentdashboard");
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
            <Input style={{height:'35px', width:'70%'}}  placeholder="please enter your email" />
          </Form.Item>
          <Form.Item label="Password:" name="password" rules={[{ required: true, message: "please enter your password" }]}>
            <Input autoComplete="current-password" style={{height:'35px', width:'70%'}}  placeholder="please enter your password" />
          </Form.Item>
          <Button className="btn" type="primary" htmlType="submit">Submit</Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
