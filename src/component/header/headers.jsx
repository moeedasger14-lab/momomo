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
import SwitchAccountModal  from "../../pages/fole/SwitchAccountModal";
const { Header } = Layout;
 const { Text } = Typography;
const Heder = () => {
   const navigate = useNavigate();
  const [openSwitchModal, setOpenSwitchModal] = useState(false);
  const allUsers = JSON.parse(localStorage.getItem("signupdata")) || [];
      const user = JSON.parse(localStorage.getItem("currentUser"));
  const parentAdmin =
  user?.createdBy
    ? allUsers.find((u) => u.id === user.createdBy && u.role === 1)
    : null;

const adminAccounts = Array.isArray(allUsers)
  ? allUsers.filter((u) => u.createdBy === user?.id)
  : [];
  useEffect(() => {
    // allow public pages
    if (
      location.pathname === "/login" ||
      location.pathname === "/signup"
    ) {
      return;
    }

    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user, location.pathname, navigate]);
const pending =
    JSON.parse(localStorage.getItem("pendingTeacherSignupData")) || [];
  const approved =
    JSON.parse(localStorage.getItem("approvedTeacherSignupData")) || [];

// 🔹 accounts created by this admin

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
  localStorage.setItem("previousUser", JSON.stringify(currentUser));
}
// 🔹 switch account logic
 const switchableTeachers = [...pending, ...approved];

  const switchAccount = (acc) => {
    localStorage.setItem("currentUser", JSON.stringify(acc));
    message.success(`Switched to ${acc.fullName}`);
    window.location.reload();
  };

const switchBackToAdmin = () => {
 if (!parentAdmin) {
    message.error("Admin account not found");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(parentAdmin));
  message.success(`Switched back to Admin: ${parentAdmin.fullName}`);
  window.location.reload();
};
   
 const previousUser = JSON.parse(localStorage.getItem("previousUser"));
  if (!previousUser) {
    message.warning("No previous account to switch back to");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(previousUser));
  localStorage.removeItem("previousUser");

  message.success("Switched back successfully");
  navigate("/home");
 
 
   
 
  
const handleDeleteAccount = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user) return;

  Modal.confirm({
    title: "Delete Account",
    content: "This action cannot be undone. Are you sure?",
    okType: "danger",
    onOk: () => {
      const signups = JSON.parse(localStorage.getItem("signupdata")) || [];
      const updated = signups.filter(u => u.email !== user.email);

      localStorage.setItem("signupdata", JSON.stringify(updated));
      localStorage.removeItem("currentUser");
      localStorage.removeItem("previousUser");

      message.success("Account deleted successfully");
      navigate("/login");
    },
  });
};











       
 const adminMenu = [
  { key: "1", label: <span>Admin Dashboard</span> },
  { key: "2", label: <span>Setting</span> },
  { key: "3", label: <span>Logout</span> },
   {
      key: "switch",
      label: "Switch Account",
      children: [
        ...switchableTeachers.map((acc) => ({
          key: acc.id,
          label: `${acc.fullName} (${acc.status})`,
          onClick: () => switchAccount(acc),
        })),
        { type: "divider" },
        {
          key: "create",
          label: (
            <span onClick={()=>setOpenSwitchModal(true)}>
              <PlusOutlined /> Create Teacher
            </span>
          ),
        },
         { type: "divider" },
          {
    key: "delete",
    label: (
      <span style={{ color: "red" }} onClick={handleDeleteAccount}>
        Delete Account
      </span>
    ),
  },
      ],
    },
    
];


    const teacherMenu = [
      { key: "4", label: <span>Teacher Dashboard</span> },
      { key: "2", label: <span>Setting</span> },
      { key: "3", label: <span>Logout</span> },
       {
    key: "switch",
    label: <span onClick={switchBackToAdmin}>Switch Back</span>,
  },
    ].filter(Boolean);
    const studentMenu = [
      { key: "5", label: <span>Student Dashboard</span> },
      { key: "2", label: <span>Setting</span> },
      { key: "3", label: <span>Logout</span> },
       {
    key: "switch",
    label: <span onClick={switchBackToAdmin}>Switch Back</span>,
  },
    ].filter(Boolean);
    const userMenu = [
      { key: "2", label: <span>Setting</span> },
      { key: "3", label: <span>Logout</span> },
        {
    key: "switch",
    label: <span onClick={switchBackToAdmin}>Switch Back</span>,
  },
    ].filter(Boolean);
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
      logout();
      break;
      case "switch-back":
  switchBackToAdmin();
  break;
       case "create-account":
      setOpenSwitchModal(true); // 🔹 open modal
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
    
 

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
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
      <SwitchAccountModal
  open={openSwitchModal}
  setOpen={setOpenSwitchModal}
/>
    </>
  );
};
export default Heder;
