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
import { ProTable } from "@ant-design/pro-components";
const { Option, OptGroup } = Select;
const Admindashboard = () => {
  const navigate = useNavigate();

  const [pendingTachers, setPendingTeachers] = useState([]);
  const [approvedTeachers, setApprovedTeachers] = useState([]);
  const [pendingStudents, setPendingStudents] = useState([]);
  const [approvedStudents, setApprovedStudents] = useState([]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const [pendingCourses, setPendingCourses] = useState([]);
  const [approvedCourses, setApprovedCourses] = useState([]);

  // 🔹 FETCH PENDING
  const fetchPending = async () => {
    const res = await fetch("http://localhost:60977/api/courses/pending");
    const data = await res.json();
    setPendingCourses(Array.isArray(data) ? data : []);
  };

  // 🔹 FETCH APPROVED
  const fetchApproved = async () => {
    const res = await fetch("http://localhost:60977/api/courses/approved");
    const data = await res.json();
    setApprovedCourses(Array.isArray(data) ? data : []);
  };

  useEffect(() => {
    fetchPending();
    fetchApproved();
  }, []);

  // 🔹 ACTIONS
  

  const handleApprove = async (courseId) => {
  try {
    const response = await fetch(`/admin/course/approve/${courseId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Optional: if you have auth token
        // "Authorization": `Bearer ${token}`
      },
    });

    const data = await response.text(); // or .json() if backend returns JSON
    alert(data); // "Course approved"

    // Optionally, remove course from pending list in frontend state
    setPendingCourses((prev) => prev.filter(course => course._id !== courseId));

  } catch (error) {
    console.error("Error approving course:", error);
  }
};
const handleReject = async (courseId) => {
  try {
    const response = await fetch(`/admin/course/reject/${courseId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.text();
    alert(data); // "Course rejected"

    // Remove course from pending list in frontend state
    setPendingCourses((prev) => prev.filter(course => course._id !== courseId));

  } catch (error) {
    console.error("Error rejecting course:", error);
  }
};
  const fetchPendingTeachers = async () => {
    const res = await fetch(
      "http://localhost:60977/api/admin/teachers/pending",
    );
    const data = await res.json();
    setPendingTeachers(Array.isArray(data) ? data : data.teachers || []);
  };

 
 
  const fetchApprovedTeachers = async () => {
    const res = await fetch(
      "http://localhost:60977/api/admin/teachers/approved",
    );
    const data = await res.json();
    setApprovedTeachers(Array.isArray(data) ? data : data.teachers || []);
  };

  // 🔹 APPROVE TEACHER

  // 🔹 DELETE STUDENT

  const approveTeacher = async (id) => {
    if (!id) return alert("ID missing");

    await fetch(`http://localhost:60977/api/admin/users/${id}/approve`, {
      method: "PATCH",
    });

    fetchPendingTeachers();
    fetchApprovedTeachers();
    fetchPendingStudents();
    fetchApprovedStudents(); // ✅ THIS is required
  };

  const rejectTeacher = async (id) => {
    if (!id) return alert("ID missing");

    await fetch(`http://localhost:60977/api/admin/users/${id}/reject`, {
      method: "DELETE",
    });

    fetchPendingTeachers(Array.isArray(data) ? data : data.teachers || []); // ✅ THIS is required
  };
  const fetchPendingStudents = async () => {
    try {
      const res = await fetch(
        "http://localhost:60977/api/admin/students/pending",
      );
      const data = await res.json();

      setPendingStudents(Array.isArray(data) ? data : data.students || []);
    } catch (err) {
      console.error(err);
      setPendingStudents(Array.isArray(data) ? data : []);
    }
  };
  const fetchApprovedStudents = async () => {
    try {
      const res = await fetch(
        "http://localhost:60977/api/admin/students/approved",
      );
      const data = await res.json();

      setApprovedStudents(Array.isArray(data) ? data : data.students || []);
    } catch (err) {
      console.error(err);
      setApprovedStudents(Array.isArray(data) ? data : data.teachers || []);
    }
  };

  const approveStudent = async (id) => {
    await fetch(`http://localhost:60977/api/admin/users/${id}/approve`, {
      method: "PATCH",
    });
    fetchPendingStudents();
    fetchApprovedStudents();
  };

  const rejectStudent = async (id) => {
    await fetch(`http://localhost:60977/api/admin/users/${id}/reject`, {
      method: "DELETE",
    });
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
    {
      title: "Expert",
      dataIndex: ["teacherProfile", "expertise"],
      key: "expertise",
    },
    {
      title: "Experience of Teaching",
      dataIndex: ["teacherProfile", "teachingExperience"],
      key: "teachingExperience",
    },
    { title: "Degree", dataIndex: ["teacherProfile", "degree"], key: "degree" },
    { title: "Country", dataIndex: "country", key: "country" },
    {
      title: "City",
      dataIndex: ["teacherProfile", "graduationCity"],
      key: "graduation",
    },
    {
      title: "university graduated from",
      dataIndex: ["teacherProfile", "university"],
      key: "university",
    },
    {
      title: "Student Id",
      dataIndex: ["teacherProfile", "studentId"],
      key: "ids",
    },
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
          <Button onClick={() => rejectTeacher(record._id)}>reject</Button>
          <Button onClick={() => approveTeacher(record._id)}>approve</Button>
        </>
      ),
    },
  ];

  var colum = [
    { title: "Student Name", dataIndex: "fullName", key: "fullName" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Country", dataIndex: "country", key: "country" },
    { title: "City", dataIndex: ["studentProfile", "City"], key: "City" },
    {
      title: "Where do you read",
      dataIndex: ["studentProfile", "studyType"],
      key: "studyType",
    },
    {
      title: "Class Level",
      dataIndex: ["studentProfile", "classLevel"],
      key: "classLevel",
    },
    { title: "Status", render: () => "Pending" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Button
            onClick={() => rejectStudent(record._id)}
            type="dashed"
            danger
            style={{ margin: 8 }}
          >
            Reject
          </Button>
          <Button
            onClick={() => approveStudent(record._id)}
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
    { title: "City", dataIndex: ["studentProfile", "City"], key: "City" },
    {
      title: "Where do you read",
      dataIndex: ["studentProfile", "studyType"],
      key: "studyType",
    },
    {
      title: "Class Level",
      dataIndex: ["studentProfile", "classLevel"],
      key: "classLevel",
    },
    { title: "Status", render: () => "Pending" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button type="dashed" danger style={{ margin: "5px" }}>
          Reject
        </Button>
      ),
    },
  ];

  var column = [
    { title: "Teacher Name", dataIndex: "fullName", key: "fullName" },

    { title: "Gender", dataIndex: "gender", key: "gender" },
    {
      title: "Expert",
      dataIndex: ["teacherProfile", "expertise"],
      key: "expertise",
    },
    {
      title: "Experience of Teaching",
      dataIndex: ["teacherProfile", "teachingExperience"],
      key: "teachingExperience",
    },
    { title: "Degree", dataIndex: ["teacherProfile", "degree"], key: "degree" },
    { title: "Country", dataIndex: "country", key: "country" },
    {
      title: "City",
      dataIndex: ["teacherProfile", "graduationCity"],
      key: "graduationCity",
    },
    {
      title: "university graduated from",
      dataIndex: ["teacherProfile", "university"],
      key: "university",
    },
    {
      title: "Student Id",
      dataIndex: ["teacherProfile", "studentId"],
      key: "ids",
    },
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
        <Button onClick={() => rejectTeacher(record._id)} type="dashed" danger>
          Ban
        </Button>
      ),
    },
  ];
  const colles = [
    {
      title: "Course Name",
      dataIndex: "coursename",
      key: "coursename",
    },
    {
      title: "Which type of Course",
      dataIndex: "coursetype",
      key: "coursetype",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Course Price",
      dataIndex: "courseprice",
      key: "courseprice",
    },
    {
      title: "Price Status",
      dataIndex: "pricestatus",
      key: "pricestatus",
    },
    {
      title: "Course Starting Date",
      dataIndex: "coursestartdate",
      key: "coursestartdate",
      render: (value) => value || "",
    },
    {
      title: "Course Ending Date",
      dataIndex: "courseend",
      key: "courseend",
      render: (value) => value || "",
    },
    {
      title: "Offers",
      dataIndex: "offers",
      key: "offers",
    },
    {
      title: "Class Days",
      dataIndex: "classdays",
      key: "classdays",
    },
    {
      title: "Timing",
      dataIndex: "timing",
      key: "timing",
      render: (value) => {
        if (!value) return "";
        if (Array.isArray(value)) {
          const [start, end] = value;
          const toTime = (val) =>
            val?.format
              ? val.format("HH:mm")
              : new Date(val).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                });
          return `${toTime(start)} - ${toTime(end)}`;
        }
        return value;
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => {
        if (!text) return "";
        return text.length > 10 ? text.substring(0, 10) + "..." : text;
      },
    },
    {
      title: "Teacher Name",
      dataIndex: "teachernames",
      key: "teachernames",
    },
    {
      title: "Teacher Age",
      dataIndex: "teacherage",
      key: "teacherage",
    },
    {
      title: "Teacher Gender",
      dataIndex: "teachergender",
      key: "teachergender",
    },
    {
      title: "Teaching Experience",
      dataIndex: "teacherexperience",
      key: "teacherexperience",
    },
    {
      title: "Class Capacity",
      dataIndex: "classcapacity",
      key: "classcapacity",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: () => "Pending",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Button onClick={()=>handleApprove()} color="green" type="dashed">
            Accept
          </Button>
          <Button onClick={()=>handleReject()} style={{ margin: "5px" }} color="danger" type="dashed">
            Reject
          </Button>
        </>
      ),
    },
  ];
 const colless = [
    {
      title: "Course Name",
      dataIndex: "coursename",
      key: "coursename",
    },
    {
      title: "Which type of Course",
      dataIndex: "coursetype",
      key: "coursetype",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Course Price",
      dataIndex: "courseprice",
      key: "courseprice",
    },
    {
      title: "Price Status",
      dataIndex: "pricestatus",
      key: "pricestatus",
    },
    {
      title: "Course Starting Date",
      dataIndex: "coursestartdate",
      key: "coursestartdate",
      render: (value) => value || "",
    },
    {
      title: "Course Ending Date",
      dataIndex: "courseend",
      key: "courseend",
      render: (value) => value || "",
    },
    {
      title: "Offers",
      dataIndex: "offers",
      key: "offers",
    },
    {
      title: "Class Days",
      dataIndex: "classdays",
      key: "classdays",
    },
    {
      title: "Timing",
      dataIndex: "timing",
      key: "timing",
      render: (value) => {
        if (!value) return "";
        if (Array.isArray(value)) {
          const [start, end] = value;
          const toTime = (val) =>
            val?.format
              ? val.format("HH:mm")
              : new Date(val).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                });
          return `${toTime(start)} - ${toTime(end)}`;
        }
        return value;
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => {
        if (!text) return "";
        return text.length > 10 ? text.substring(0, 10) + "..." : text;
      },
    },
    {
      title: "Teacher Name",
      dataIndex: "teachernames",
      key: "teachernames",
    },
    {
      title: "Teacher Age",
      dataIndex: "teacherage",
      key: "teacherage",
    },
    {
      title: "Teacher Gender",
      dataIndex: "teachergender",
      key: "teachergender",
    },
    {
      title: "Teaching Experience",
      dataIndex: "teacherexperience",
      key: "teacherexperience",
    },
    {
      title: "Class Capacity",
      dataIndex: "classcapacity",
      key: "classcapacity",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: () => "approved",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Button onClick={()=>handleApprove()} color="green" type="dashed">
            Accept
          </Button>
          <Button onClick={()=>handleReject()} style={{ margin: "5px" }} color="danger" type="dashed">
            Reject
          </Button>
        </>
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
            dataSource={[]}
            style={{ backgroundColor: "blue" }}
            rowKey="_id"
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
            rowKey="_id"
            dataSource={[]}
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
          <Card style={{ width: "100%" }} title="Request">
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
            scroll={{ x: 1400 }}
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
          <Card style={{ width: "100%" }} title="Request">
            <Table
              rowKey="_id"
              bordered
              scroll={{ x: 1400 }}
              dataSource={pendingStudents}
              columns={colum}
            />
          </Card>
        </>
      ),
    },
    {
      key: "2",
      label: "Approved Students",
      children: (
        <Card>
          <Table
            rowKey="_id"
            dataSource={approvedStudents}
            scroll={{ x: 1400 }}
            bordered
            columns={colums}
          />
        </Card>
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
  const momomo = [
    {
      key: "1",
      label: "Pending Courses",
      children: (
        <Card title="Pending courses">
          <ProTable
            dataSource={pendingCourses}
            columns={colles}
            search={false}
            rowKey="_id"
            bordered
            scroll={{ x: 1400 }}
          />
        </Card>
      ),
    },
    {
key:"2",
label:"Approved Courses",
children:( 
  <Card title="Approved Courses">
  <ProTable 
  columns={colless}
  scroll={{x : 1400}}
 bordered
 rowKey="_id"
 search={false}
 dataSource={approvedCourses}
/>
  </Card>
)
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
      key: "3",
      label: "Teacher Courses",
      children: (
        <>
     
          <Tabs
          type="card"
            centered
            tabPlacement="start"
            items={momomo}
            tabBarStyle={{
              color: "grey",
              background:
                "linear-gradient(-45deg ,orange,red,lime,yellow,rgb(224, 115, 133),rgb(26, 165, 211),white)",
              borderRadius: "8px",
            }}
          />
          
        </>
      ),
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
