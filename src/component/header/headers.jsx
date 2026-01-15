import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Layout,
  Typography,
  Affix,
  message,
  Modal,
  Dropdown,
  Menu,
} from "antd";
import Icon, {
  EditOutlined,
  MoreOutlined,
  PlusOutlined,
  SettingFilled,
  UserAddOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const { Text } = Typography;
const Heder = () => {
  const navigate = useNavigate();
   // ✅ SAME KEY everywhere
const handleDashboardClick = async () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser?.id) {
    navigate("/signup");
    return;
  }

  // ADMIN → local check only
  if (currentUser.role === "admin") {
    navigate("/admindashboard");
    return;
  }

  // TEACHER / STUDENT → backend check
  const res = await fetch(
    `http://localhost:60977/api/admin/users/status/${currentUser.id}`
  );

  if (!res.ok) return;

  const data = await res.json();

  if (data.status !== "approved") {
    alert("Waiting for admin approval");
    return;
  }

  if (data.role === "teacher") navigate("/teacherdashboard");
  if (data.role === "student") navigate("/home");
};
  
  return (
    <>
      <Header
        style={{
          backgroundColor: "transparent",
          height: "65px",
          width: "99%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          border: "1px solid grey",
          borderRadius: "8px",
          boxShadow: "1px 4px 6px grey",
          position: "sticky",
        }}
      >
        <img
          src="/images/OIP (5).webp"
          alt="logo"
          style={{
            height: "35px",
            width: "35px",
            borderRadius: "50%",
            marginLeft: "5px",
          }}
        />
        <Text style={{ marginRight: "630px", marginLeft: "10px" }} italic>
          Web Assistance
        </Text>
        <Button
          className="btn"
          onClick={() => navigate("/home")}
          type="primary"
        >
          Home
        </Button>

        <>
          <Button
            className="btn"
            style={{ marginRight: "8px", marginLeft: "10px" }}
            type="primary"
            onClick={() => navigate("/subjects")}
          >
            Subjects + Language
          </Button>
          <Button
            onClick={() => navigate("/courses")}
            className="btn"
            type="primary"
          >
            Courses
          </Button>
        </>
        <Button
        
          type="primary"
          className="btn"
          style={{ margin: "6px" }}
          onClick={() => handleDashboardClick()}
        >
          Dashboard
        </Button>
        <Button
          style={{ margin: "10px" }}
          variant="solid"
          color="danger"
         
      >
        
          Logout
        </Button>
      </Header>
    </>
  );
};
export default Heder;
