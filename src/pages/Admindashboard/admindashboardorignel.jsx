import {
  Breadcrumb,
  Button,
  Card,
  Form,
  Input,
  Modal,
  Select,
  Table,
  Tabs,
  message,
} from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./admindashboard.css";

import {
  AuditOutlined,
  EditOutlined,
  IdcardFilled,
  IdcardOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
const { Option, OptGroup } = Select;
const Admindashboard = () => {
    const navigate = useNavigate();
 
 const [pendingTachers, setPendingTeachers] = useState([]);
 const [approvedTeachers, setApprovedTeachers] = useState([]);
 const [pendingStudents, setPendingStudents] = useState([]);
 const [approvedStudents, setApprovedStudents] = useState([]);
 
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

 const fetchPendingTeachers = async () => {
  const res = await fetch("http://localhost:60977/api/admin/teachers/pending");
  const data = await res.json();
  setPendingTeachers(data);
};

  

 
const fetchApprovedTeachers = async () => {
  const res = await fetch("http://localhost:60977/api/admin/teachers/approved");
  const data = await res.json();
  setApprovedTeachers(data);
};


  // 🔹 APPROVE TEACHER
  
  // 🔹 DELETE STUDENT
 

const approveTeacher = async (id) => {
  if (!id) return alert("ID missing");

  await fetch(
    `http://localhost:60977/api/admin/users/${id}/approve`,
    { method: "PATCH" }
  );

 fetchPendingTeachers();
fetchApprovedTeachers();
fetchPendingStudents();
fetchApprovedStudents(); // ✅ THIS is required
};

const rejectTeacher = async (id) => {
  if (!id) return alert("ID missing");

  await fetch(
    `http://localhost:60977/api/admin/users/${id}/reject`,
    { method: "DELETE" }
  );

  fetchPendingTeachers(); // ✅ THIS is required
};
const fetchPendingStudents = async () => {
  try {
    const res = await fetch("http://localhost:60977/api/admin/students/pending");
    const data = await res.json();

    setPendingStudents(Array.isArray(data) ? data : data.students || []);
  } catch (err) {
    console.error(err);
    setPendingStudents(Array.isArray(data) ? data : []);
  }
};
const fetchApprovedStudents = async () => {
  try {
    const res = await fetch("http://localhost:60977/api/admin/students/approved");
    const data = await res.json();

    setApprovedStudents(Array.isArray(data) ? data : data.students || []);
  } catch (err) {
    console.error(err);
    setApprovedStudents();
  }
};

const approveStudent = async (id) => {
  await fetch(
    `http://localhost:60977/api/admin/users/${id}/approve`,
    { method: "PATCH" }
  );
  fetchPendingStudents();
  fetchApprovedStudents();
};

const rejectStudent = async (id) => {
  await fetch(
    `http://localhost:60977/api/admin/users/${id}/reject`,
    { method: "DELETE" }
  );
  fetchPendingStudents();
};

  useEffect(() => {
    fetchPendingTeachers();
    fetchApprovedTeachers();
    fetchPendingStudents();
    fetchApprovedStudents();

    const interval = setInterval(() => {
      fetchPendingTeachers();
      fetchApprovedTeachers();
      fetchPendingStudents();
      fetchApprovedStudents();
    }, 3000);

    return () => clearInterval(interval);
  }, []);


const columns = [
    { title: "full Name", dataIndex: "fullName", key: "fullName" },

    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Expert", dataIndex: ["teacherProfile", "expertise"], key: "expertise" },
    {
      title: "Experience of Teaching",
      dataIndex: ["teacherProfile", "teachingExperience"],
      key: "teachingExperience",
    },
    { title: "Degree", dataIndex: ["teacherProfile", "degree"], key: "degree" },
    { title: "Country", dataIndex: "country", key: "country" },
    { title: "City", dataIndex: ["teacherProfile", "graduationCity"],key:"graduation" },
    {
      title: "university graduated from",
      dataIndex: ["teacherProfile", "university"],
      key: "university",
    },
    { title: "Student Id", dataIndex: ["teacherProfile", "studentId"], key: "ids" },
    {
      title: "Certification Number",
      dataIndex: ["teacherProfile", "certification"],
      key: "certification",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Button onClick={() => rejectTeacher(record._id)} >reject</Button>
          <Button onClick={() => approveTeacher(record._id)} >approve</Button>
        </>
      ),
    },
  ];

 

  var colum = [
    { title: "Student Name", dataIndex: "fullName", key: "fullName" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Country", dataIndex: "country", key: "country" },
    { title: "City", dataIndex: ["studentProfile", "live"], key: "live" },
    { title: "Where do you read", dataIndex: ["studentProfile", "read"], key: "read" },
    { title: "Class Level", dataIndex: ["studentProfile", "class"], key: "class" },
    {title:"Status",render:()=>"Pending"},
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Button
          onClick={()=>rejectStudent(record._id)}
            type="dashed"
            danger
            style={{ margin: 8 }}
          >
            Reject
          </Button>
          <Button
          onClick={()=>approveStudent(record._id)}
          type="dashed"
          color="green"
          >
            Approve
          </Button>
          </>
      ),
    },
  ];

 
 var colums = [
    { title: "Student Name", dataIndex: "fullName", key: "fullName" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Country", dataIndex: "country", key: "country" },
    { title: "City", dataIndex: ["studentProfile", "live"], key: "live" },
    { title: "Where do you read", dataIndex: ["studentProfile", "read"], key: "read" },
    { title: "Class Level", dataIndex: ["studentProfile", "class"], key: "class" },
    {title:"Status",render:()=>"Pending"},
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        
          <Button
          
            type="dashed"
            danger
            style={{ margin: "5px" }}
          >
            Reject
          </Button>
),
    }
  ];
  
 
  
  var column = [
    { title: "Teacher Name", dataIndex: "fullName", key: "fullName" },
   
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Expert", dataIndex: ["teacherProfile", "expertise"], key: "expertise" },
    {
      title: "Experience of Teaching",
      dataIndex:["teacherProfile","teachingExperience"],
      key: "teachingExperience",
    },
    { title: "Degree", dataIndex: ["teacherProfile", "degree"], key: "degree" },
    { title: "Country", dataIndex: "country", key: "country" },
    { title: "City", dataIndex: ["teacherProfile", "graduationCity"], key: "graduationCity" },
    {
      title: "university graduated from",
      dataIndex: ["teacherProfile", "university"],
      key: "university",
    },
    { title: "Student Id", dataIndex: ["teacherProfile", "studentId"], key: "ids" },
    {
      title: "Certification Number",
      dataIndex: ["teacherProfile", "certification"],
      key: "certification",
    },
      { title: "Status", render: () => "Approved" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button
          onClick={()=>rejectTeacher(record._id)}
          type="dashed"
          danger
        >
          Ban
        </Button>
      ),
    },
  ];
  
 

  var cols = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "emails", key: "emails" },
    { title: "Message", dataIndex: "message", key: "message" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          onClick={() => DeleteMessagesbyIds(record.id)}
          style={{ padding: "5px", marginRight: "5px" }}
          variant="dashed"
          color="volcano"
        >
          Delete
        </Button>
      ),
    },
  ];
  let col = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "emails", key: "emails" },
    { title: "Message", dataIndex: "message", key: "message" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Button
            onClick={() => DeleteMessagesbyId(record.id)}
            style={{ padding: "5px", marginRight: "5px" }}
            variant="dashed"
            color="volcano"
          >
            Delete
          </Button>
          <Button
            onClick={() => handleApprovess(record)}
            variant="dashed"
            color="green"
          >
            Mark
          </Button>
        </>
      ),
    },
  ];
 
  const ittm = [
    {
      key: "1",
      label: "Requests",
      children: (
        <Card title="Request by Students">
          <Table
            scroll={{ x: 1400 }}
            bordered
            style={{ backgroundColor: "blue" }}
           
            columns={col}
          />
        </Card>
      ),
    },
    {
      key: "2",
      label: "Marked Messages",
      children: (
        <Card title="Marked Messages by Admin">
          <Table
            scroll={{ x: 1400 }}
        
            columns={cols}
          />
        </Card>
      ),
    },
  ];

  var tem = [
    {
      key: "1",
      label: "Request",
      children: (
        <>
          <Card
            style={{ width: "100%" }}
            title="Request"
          
          >
            <Table
               loading={loading}
               rowKey="_id"
              scroll={{ x: 1400 }}
              bordered
              dataSource={pendingTachers}
              columns={columns}
            />
          </Card>
        </>
      ),
    },
    {
      key: "2",
      label: "Approved Teachers",
      children: (
        <Card style={{ width: "100%" }} title="Approved Teachers">
          <Table
           dataSource={approvedTeachers}
            scroll={{x : 1400}}
            bordered
            rowKey="_id"
            sticky
            columns={column}
          />
        </Card>
      ),
    },
  ];

  var itms = [
    {
      key: "1",
      label: "Request",
      children: (
        <>
          <Card
            style={{ width: "100%" }}
            title="Request"
          
          >
            <Table
            rowKey="_id"
              bordered
             scroll={{x : 1400}}
             dataSource={pendingStudents}
              columns={colum}
            />
          </Card>
        </>
      ),
    },
   {
    key:"2",
    label:"Approved Students",
    children:(
      <Card >
        <Table rowKey="_id" dataSource={approvedStudents} scroll={{ x : 1400 }} bordered columns={colums} />
      </Card>
    )
   }
  ];

  var item = [
    {
      key: "1",
      label: "Teachers",
      icon: <AuditOutlined />,
      children: (
        <Tabs
          tabPlacement="start"
          items={tem}
          type="card"
          tabBarStyle={{
            color: "grey",
            background:
              "linear-gradient(-45deg ,orange,red,lime,yellow,rgb(224, 115, 133),rgb(26, 165, 211),white)",
            borderRadius: "8px",
          }}
        />
      ),
    },
    {
      key: "2",
      label: "Students",
      children: (
        <Tabs
          tabPlacement="start"
          items={itms}
          type="card"
          tabBarStyle={{
            color: "grey",
            background:
              "linear-gradient(-45deg ,orange,red,lime,yellow,rgb(224, 115, 133),rgb(26, 165, 211),white)",
            borderRadius: "8px",
          }}
        />
      ),
    },
    {
      key: "3",
      label: "Guest Request",
      children: (
        <Tabs
          tabPlacement="start"
          type="card"
          items={ittm}
          tabBarStyle={{
            color: "grey",
            background:
              "linear-gradient(-45deg ,orange,red,lime,yellow,rgb(224, 115, 133),rgb(26, 165, 211),white)",
            borderRadius: "8px",
          }}
        />
      ),
    },
  ];
  const co = [
    {
      key: "1",
      label: "Teachers",
      icon: <IdcardOutlined className="btn" />,
      children: (
        <Card
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "lightblue",
          }}
          title="Active Teachers"
        >
          <p>Approved Teachers:</p>
          <p>Teachers to be Approved:</p>
        </Card>
      ),
    },
    {
      key: "2",
      label: "Students",
      icon: <SolutionOutlined />,
      children: (
        <Card
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "lightblue",
          }}
          title="Active Students"
        >
          <p>Approved Students:</p>
          <p>Students to be Approved:</p>
        </Card>
      ),
    },
  ];

  var items = [
    {
      key: "1",
      label: "Request and Applications",
      children: (
        <Card
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
          title="Reguest and Application"
        >
          <img
            style={{ height: "400px", width: "100%" }}
            src="./images/contact us.jpg"
            alt="aaaaaa"
          />
          <Tabs
            type="card"
            items={item}
            centered
            tabBarStyle={{
              width: "100%",
              color: "orange",
              background:
                "linear-gradient(-45deg ,orange,red,lime,yellow,rgb(224, 115, 133),rgb(26, 165, 211),white)",
              borderRadius: "8px",
            }}
          />
        </Card>
      ),
    },
    {
      key: "2",
      label: "Active Users",
      children: (
        <Card
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
          title="Active Users"
        >
          <img
            src="/images/active.jpg"
            style={{ height: "500px", width: "100%" }}
          />
          <Tabs
            centered
            items={co}
            type="card"
            tabBarStyle={{
              background:
                "linear-gradient(-45deg ,orange,red,lime,yellow,rgb(224, 115, 133),rgb(26, 165, 211),white)",
              borderRadius: "8px",
            }}
          />
        </Card>
      ),
    },
  {
key:"3",
label:"Teacher Courses",
  },

  ];

  return (
    <>
      <Tabs
        centered
        style={{ marginTop: "30px" }}
        items={items}
        tabBarStyle={{
          color: "grey",
          background:
            "linear-gradient(-45deg ,orange,red,lime,yellow,rgb(224, 115, 133),rgb(26, 165, 211),white)",
          borderRadius: "8px",
        }}
      />
    </>
  );
};

export default Admindashboard;
