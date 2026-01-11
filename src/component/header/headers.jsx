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
  const _rawSignups = JSON.parse(localStorage.getItem("signupdata"));
  const allUsers = Array.isArray(_rawSignups)
    ? _rawSignups
    : _rawSignups
    ? [_rawSignups]
    : [];
      const user = JSON.parse(localStorage.getItem("currentUser"));
  const userRole = Number(user?.role || -1);
  useEffect(() => {
    if (["/login", "/signup"].includes(location.pathname)) return;
    if (!user) navigate("/login", { replace: true });
  }, [user, location.pathname, navigate]);

  // 🔹 Admin-created accounts
  const adminCreatedAccounts = allUsers.filter(
    (u) => u && String(u.createdBy) === String(user?.id)
  );

  // Accounts that this admin can switch into (alias for clarity)
  const switchableTeachers = adminCreatedAccounts;

  // Parent admin (if admin had previously switched to another account)
  const parentAdmin = JSON.parse(localStorage.getItem("previousUser")) || null;

  // 🔹 Switch logic
  const switchAccount = (acc) => {
    localStorage.setItem("previousUser", JSON.stringify(user));
    localStorage.setItem("currentUser", JSON.stringify(acc));
    message.success(`Switched to ${acc.fullName}`);
    window.location.reload();
  };

  const switchBackToAdmin = () => {
    const prev = JSON.parse(localStorage.getItem("previousUser"));
    if (prev) {
      localStorage.setItem("currentUser", JSON.stringify(prev));
      localStorage.removeItem("previousUser");
      window.location.reload();
    }
  };

  const deleteAccountById = (id) => {
  Modal.confirm({
    title: "Delete Account",
    content: "This will permanently delete this account. Continue?",
    okType: "danger",
    onOk: () => {
        try {
          const pending = JSON.parse(localStorage.getItem("pendingTeacherSignupData")) || [];
          const approved = JSON.parse(localStorage.getItem("approvedTeacherSignupData")) || [];
          const signups = JSON.parse(localStorage.getItem("signupdata")) || [];
          const courses = JSON.parse(localStorage.getItem("Courses")) || [];
          const messagesArr = JSON.parse(localStorage.getItem("messages")) || [];
          const teachers = JSON.parse(localStorage.getItem("teachers")) || [];
          const students = JSON.parse(localStorage.getItem("Students")) || [];

          const newPending = pending.filter((u) => u.id !== id);
          const newApproved = approved.filter((u) => u.id !== id);
          const newSignups = signups.filter((u) => u.id !== id);

          // remove courses created by this teacher (match by teachernames or teacherId)
          const newCourses = courses.filter((c) => {
            if (!c) return true;
            const nameMatch = c.teachernames && c.teachernames === (approved.find(a=>a.id===id)?.fullName || signups.find(s=>s.id===id)?.fullName);
            const teacherIdMatch = c.teacherId && c.teacherId === id;
            return !(nameMatch || teacherIdMatch);
          });

          // remove messages from this user (match email or name)
          const acc = signups.find((s) => s.id === id) || approved.find((a) => a.id === id) || {};
          const newMessages = messagesArr.filter((m) => {
            if (!m) return true;
            const emailMatch = acc.email && m.emails === acc.email;
            const nameMatch = acc.fullName && (m.name === acc.fullName || m.fullName === acc.fullName);
            return !(emailMatch || nameMatch);
          });

          const newTeachers = teachers.filter((t) => t.id !== id && t.email !== (acc.email || ""));
          const newStudents = students.filter((s) => s.id !== id && s.email !== (acc.email || ""));

          localStorage.setItem("pendingTeacherSignupData", JSON.stringify(newPending));
          localStorage.setItem("approvedTeacherSignupData", JSON.stringify(newApproved));
          localStorage.setItem("signupdata", JSON.stringify(newSignups));
          localStorage.setItem("Courses", JSON.stringify(newCourses));
          localStorage.setItem("messages", JSON.stringify(newMessages));
          localStorage.setItem("teachers", JSON.stringify(newTeachers));
          localStorage.setItem("Students", JSON.stringify(newStudents));

          // If the deleted account is the current user, switch back to parent admin if available
          const current = JSON.parse(localStorage.getItem("currentUser"));
          if (current && current.id === id) {
            if (parentAdmin) {
              localStorage.setItem("currentUser", JSON.stringify(parentAdmin));
              message.success("Deleted and switched back to admin");
              window.location.reload();
              return;
            }
            localStorage.removeItem("currentUser");
          }

          message.success("Account and related data deleted successfully");
          window.location.reload();
        } catch (e) {
          console.error(e);
          message.error("Failed to delete account");
        }
    },
  });
};


  // 🔹 Delete account everywhere




 
   
 
  

// Delete an account by id (used in switch list). Removes from pending/approved lists and signupdata.


const logout = () => {
    const userToRemove = JSON.parse(localStorage.getItem("currentUser"));
    if (userToRemove) {
      const keysToClean = [
        "signupdata",
        "pendingTeacherSignupData",
        "approvedTeacherSignupData",
        "Courses",
        "messages",
        "teachers",
        "Students",
        "users",
        "logindata",
      ];

      keysToClean.forEach((key) => {
        try {
          const arr = JSON.parse(localStorage.getItem(key) || "[]");
          if (!Array.isArray(arr)) return;
          const filtered = arr.filter((item) => {
            if (!item) return true;
            const idMatch = item.id && userToRemove.id && item.id === userToRemove.id;
            const emailMatch = item.email && userToRemove.email && item.email === userToRemove.email;
            const nameMatch = (item.fullName === userToRemove.fullName) || (item.fullname === userToRemove.fullName) || (item.name === userToRemove.fullName);
            return !(idMatch || emailMatch || nameMatch);
          });
          localStorage.setItem(key, JSON.stringify(filtered));
        } catch (e) {
          // ignore parse errors
        }
      });
    }

    localStorage.removeItem("currentUser");
    localStorage.removeItem("previousUser");
    message.success("Logged out and related data removed");
    navigate("/signup");
  };








       
 const adminMenu = [
  { key: "1", label: <span>Admin Dashboard</span> },
  { key: "2", label: <span>Setting</span> },
  { key: "3", label: <span>Logout</span> },
   {
      key: "switch",
      label: "Switch Account",
      children: [
        ...adminCreatedAccounts.map((acc) => ({
          key: acc.id,
          label: (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span onClick={() => switchAccount(acc)}>
                {acc.fullName} ({acc.role === 2 ? "Teacher" : "Student"})
              </span>
              <span
                style={{ color: "red" }}
                onClick={() => deleteAccountById(acc.id)}
              >
                Delete
              </span>
            </div>
          ),
        })),
        { type: "divider" },
        {
          key: "create",
          label: (
            <span onClick={() => setOpenSwitchModal(true)}>
              <PlusOutlined /> Create Account
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
      userRole === 1
        ? adminMenu
        : userRole === 2
        ? teacherMenu
        : userRole === 4
        ? studentMenu
        : userRole === 3
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
    style={{ height: 35, width: 35, border: "1px solid black", marginLeft: "10px" }}
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
