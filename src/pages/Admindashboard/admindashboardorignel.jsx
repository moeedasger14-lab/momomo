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
  const getAllTeachers = JSON.parse(localStorage.getItem("teachers"));
  const [teachers, setTeachers] = useState(getAllTeachers || []);
 
 
    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:60987/api/admin/teachers/pending")
      .then(res => res.json())
      .then(resData => {
        setData(resData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  

  // listen for storage changes from other tabs (new signups / approvals)
  const [user, setUser] = useState(null);

/*  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      setUser(data);
    };

    fetchProfile();
  }, []);*/

  



  // 🔹 APPROVE TEACHER
  
  // 🔹 DELETE STUDENT
 

 
 
  

  
 
  const columns = [
    { title: "full Name", dataIndex: "fullName", key: "fullName" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Expert", dataIndex: "expertise", key: "expertise" },
    {
      title: "Experience of Teaching",
      dataIndex: "teachingExperience",
      key: "teachingExperience",
    },
    { title: "Degree", dataIndex: "degree", key: "degree" },
    { title: "Country", dataIndex: "country", key: "country" },
    { title: "City", dataIndex: "graduation", key: "graduation" },
    {
      title: "university graduated from",
      dataIndex: "university",
      key: "university",
    },
    { title: "Student Id", dataIndex: "ids", key: "ids" },
    {
      title: "Certification Number",
      dataIndex: "certification",
      key: "certification",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Button onClick={() => rejectTeacher(record.id)}>reject</Button>
          <Button onClick={() => approveTeacher(record)}>approve</Button>
        </>
      ),
    },
  ];

 

  var colum = [
    { title: "Student Name", dataIndex: "fullName", key: "fullName" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Country", dataIndex: "country", key: "country" },
    { title: "City", dataIndex: "live", key: "live" },
    { title: "Where do you read", dataIndex: "read", key: "read" },
    { title: "Class Level", dataIndex: "class", key: "class" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        
          <Button
            onClick={() => deleteStudent(record.id)}
            type="dashed"
            danger
            style={{ marginRight: 8 }}
          >
            Reject
          </Button>
          
      ),
    },
  ];

 


  
 
  
  var column = [
    { title: "Teacher Name", dataIndex: "fullName", key: "fullName" },
   
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Expert", dataIndex: "expertise", key: "expertise" },
    {
      title: "Experience of Teaching",
      dataIndex: "teachingExperience",
      key: "teachingExperience",
    },
    { title: "Degree", dataIndex: "degree", key: "degree" },
    { title: "Country", dataIndex: "country", key: "country" },
    { title: "City", dataIndex: "gratuation", key: "gratuation" },
    {
      title: "university graduated from",
      dataIndex: "university",
      key: "university",
    },
    { title: "Student Id", dataIndex: "ids", key: "ids" },
    {
      title: "Certification Number",
      dataIndex: "certification",
      key: "certification",
    },
      { title: "Status", render: () => "Approved" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button
          onClick={() => DeleteTeachersbyIds(record.id)}
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
               rowKey="id"
              scroll={{ x: 1400 }}
              bordered
              dataSource={data}
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
           
            scroll={true}
            bordered
            rowKey="id"
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
              bordered
             
              columns={colum}
            />
          </Card>
        </>
      ),
    },
   
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
