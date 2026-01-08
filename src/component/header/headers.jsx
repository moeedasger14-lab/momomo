import React from "react";
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
  SettingFilled,
  UserAddOutlined,
} from "@ant-design/icons";
const { Header } = Layout;
 const { Text } = Typography;
const Heder = () => {
   const navigate = useNavigate();
  
 
   
    const storedUser = localStorage.getItem("signupdata");

    let user = storedUser ? JSON.parse(storedUser) : null;
       
 const adminMenu = [
  { key: "1", label: <span>Admin Dashboard</span> },
  { key: "2", label: <span>Setting</span> },
  { key: "3", label: <span>Logout</span> },
];


    const teacherMenu = [
      { key: "4", label: <span>Teacher Dashboard</span> },
      { key: "2", label: <span>Setting</span> },
      { key: "3", label: <span>Logout</span> },
    ];
    const studentMenu = [
      { key: "5", label: <span>Student Dashboard</span> },
      { key: "2", label: <span>Setting</span> },
      { key: "3", label: <span>Logout</span> },
    ];
    const userMenu = [
      { key: "2", label: <span>Setting</span> },
      { key: "3", label: <span>Logout</span> },
    ];
    const items =
      user?.role === 1
        ? adminMenu
        : user?.role === 2
        ? teacherMenu
        : user?.role === 4
        ? studentMenu
        : user?.role === 3
        ? userMenu
        : [];
        const roleLabels = { 1: (user) => `${user.fullName},${user.adminType}`
        , 2: (user) => `${user.fullName},${user.teacherType}` };
    const renderUserInfo = () => {
      if (!user) return <Text style={{ color: "blue" }}>Guest</Text>;
      // Auto pick role label if exists, else fallback to name
      const roleRenderer = roleLabels[user.role];

      return roleRenderer ? (
        <Text style={{ color: "gold" }}>{roleRenderer(user)}</Text>
      ) : (
        <Text style={{ color: "yellow" }}>{user.fullName}</Text>
      );
    };
    const onMenuClick = ({ key }) =>{
        console.log("Menu clicked:", key);
        switch (key) {
    case "1":
      navigate("/admindashboard");
      break;
    case "2":
      navigate("/setting");
      break;
    case "3":
      handleLogout();
      break;
    case "4":
      navigate("/teacherdashboard");
      break;
    case "5":
      navigate("/studentdashboard");
      break;
    default:
      break;
  }

    };
    
    const handleLogout = () => {
     
    Modal.confirm({
      title: "Confirm Logout",
      content: "Are you sure you want to logout?",
      okText: "Yes",
      cancelText: "No",
      onOk() {
        localStorage.removeItem("login");
        message.success("Logged out");
        localStorage.removeItem("signupdata");
        navigate("/signup");
      },
      onCancel() {
        message.info("Logout cancelled");
      },
    });

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
        {[4, 3].includes(user?.role) && (
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
        )}

        <div style={{ padding: "2px" }}>{renderUserInfo()}</div>
         
<Dropdown
  menu={{ items, onClick: onMenuClick }}
  trigger={["click"]}
>
  <Button
  className="btn"
    shape="circle"
    style={{ height: 35, width: 35, border: "1px solid black" }}
    icon={<UserAddOutlined />}
  />
</Dropdown>



      </Header>
    </>
  );
};
export default Heder;
