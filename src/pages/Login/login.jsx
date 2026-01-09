import { Button, Card, Form, Input, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => { 
    const navigate = useNavigate();
 
     const signups = JSON.parse(localStorage.getItem("signupdata")) || [];
  const logins = JSON.parse(localStorage.getItem("logindata")) || [];

 const handleLogin = (values) => {
    const users = JSON.parse(localStorage.getItem("signupdata")) || [];
    const pending =
      JSON.parse(localStorage.getItem("pendingTeacherSignupData")) || [];
    const approved =
      JSON.parse(localStorage.getItem("approvedTeacherSignupData")) || [];

    // normal users
    const normalUser = users.find(
      (u) => u.email === values.email && u.password === values.password
    );
    if (normalUser) {
      localStorage.setItem("currentUser", JSON.stringify(normalUser));
      navigate("/home");
      return;
    }

    // 🔹 CHANGE: allow pending teacher login
    const pendingTeacher = pending.find(
      (u) => u.email === values.email && u.password === values.password
    );
    if (pendingTeacher) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...pendingTeacher, status: "pending" })
      );
      message.warning("Logged in, awaiting admin approval");
      navigate("/teacherdashboard");
      return;
    }

    // approved teacher
    const approvedTeacher = approved.find(
      (u) => u.email === values.email && u.password === values.password
    );
    if (approvedTeacher) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...approvedTeacher, status: "approved" })
      );
      navigate("/teacherdashboard");
      return;
    }

    message.error("Invalid credentials");
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
