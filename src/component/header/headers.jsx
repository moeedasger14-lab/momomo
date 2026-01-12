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


const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("currentUser");
  navigate("/signup");
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
        <Text style={{ marginRight: "710px", marginLeft: "10px" }} italic>
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
              onClick={() => navigate("/subject")}
            >
              Subjects + Language
            </Button>
            <Button
              onClick={() => navigate("/course")}
              className="btn"
              type="primary"
            >
              Courses
            </Button>
          </>
        
<Button style={{margin:"10px"}} variant="solid" color="danger" onClick={()=>Logout()}>Logout</Button>
        
         



      </Header>
      
    </>
  );
};
export default Heder;
