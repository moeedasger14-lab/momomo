import { Button, Card, Form, Input, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => { 
    const navigate = useNavigate();
 
     const signups = JSON.parse(localStorage.getItem("signupdata")) || [];
  const logins = JSON.parse(localStorage.getItem("logindata")) || [];

  const handleLogin = (values) => {
    const user = signups.find(
      (u) => u.email === values.email && u.password === values.password
    );

    if (!user) {
      message.error("Invalid email or password");
      return;
    }

    localStorage.setItem(
      "logindata",
      JSON.stringify([...logins, { id: Date.now(), email: user.email }])
    );

    localStorage.setItem("currentUser", JSON.stringify(user));

    message.success("Login successful");
    navigate("/home");
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
