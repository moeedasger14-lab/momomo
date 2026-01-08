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
} from "antd";
import React, { useState } from "react";
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
  const getAllStudents = JSON.parse(localStorage.getItem("Students"));
  const getAllTeachers = JSON.parse(localStorage.getItem("teachers"));
  const [teachers, setTeachers] = useState(getAllTeachers || []);
  const [students, setStudents] = useState(getAllStudents || []);
  const [approvedTeachers, setApprovedTeachers] = useState(
    JSON.parse(localStorage.getItem("approvedTeachers")) || []
  );
  const [approvedStudents, setApprovedStudents] = useState(
    JSON.parse(localStorage.getItem("approvedStudents")) || []
  );
  const [approvedMessages, setApprovedMessages] = useState(
    JSON.parse(localStorage.getItem("approvedMessages")) || []
  );
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || []
  );
  const [school, setSchool] = useState([]);
  const [cities, setCities] = useState([]);
  const [universities, setUniversities] = useState([]);

  const [read, setRead] = useState("");
  const [live, setLive] = useState("");

  const [cla, setCla] = useState([]);

  const [teacherModalVisible, setTeacherModalVisible] = useState(false);
  const [studentModalVisible, setStudentModalVisible] = useState(false);

  const handleCountryChange = (value) => {
    if (value === "Pakistan") {
      setCities(["Punjab", "Sindh", "Islamabad", "Balochistan"]);
    } else if (value === "USA") {
      setCities(["New York", "Los Angeles", "Chicago", "Houston"]);
    } else {
      setCities([]);
    }
  };
  const handleTeachers = (values) => {
    const id = Date.now();
    const newTeacher = { ...values, id, key: id };
    setTeachers((prev) => {
      const next = [...prev, newTeacher];
      localStorage.setItem("teachers", JSON.stringify(next));
      return next;
    });
    setTeacherModalVisible(false);
  };

  const handleStudent = (values) => {
    const id = Date.now();
    const newStudent = { ...values, id, key: id };
    setStudents((prev) => {
      const next = [...prev, newStudent];
      localStorage.setItem("Students", JSON.stringify(next));
      return next;
    });
    setStudentModalVisible(false);
  };

  const navigate = useNavigate();
  const columns = [
    { title: "Teacher Name", dataIndex: "teachername", key: "teachername" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Expert", dataIndex: "expert", key: "expert" },
    {
      title: "Experience of Teaching",
      dataIndex: "experienceofteaching",
      key: "experienceofteaching",
    },
    { title: "Degree", dataIndex: "degree", key: "degree" },
    { title: "Country", dataIndex: "country", key: "country" },
    { title: "City", dataIndex: "city", key: "city" },
    {
      title: "university graduated from",
      dataIndex: "graduated",
      key: "graduated",
    },
    { title: "Student Id", dataIndex: "studentid", key: "studentid" },
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
          <Button onClick={() => DeleteTeachersbyId(record.id)}>reject</Button>
          <Button onClick={() => handleApprove(record)}>approve</Button>
        </>
      ),
    },
  ];

  var column = [
    { title: "Teacher Name", dataIndex: "teachername", key: "teachername" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Expert", dataIndex: "expert", key: "expert" },
    {
      title: "Experience of Teaching",
      dataIndex: "experienceofteaching",
      key: "experienceofteaching",
    },
    { title: "Degree", dataIndex: "degree", key: "degree" },
    { title: "Country", dataIndex: "country", key: "country" },
    { title: "City", dataIndex: "city", key: "city" },
    {
      title: "university graduated from",
      dataIndex: "graduated",
      key: "graduated",
    },
    { title: "Student Id", dataIndex: "studentid", key: "studentid" },
    {
      title: "Certification Number",
      dataIndex: "certification",
      key: "certification",
    },
    {
      title: "Action",
      key: "action",
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

  var colum = [
    { title: "Student Name", dataIndex: "studentname", key: "studentname" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Country", dataIndex: "country", key: "country" },
    { title: "City", dataIndex: "city", key: "city" },
    { title: "Where do you read", dataIndex: "read", key: "read" },
    {
      title: "In which school or university",
      dataIndex: "readss",
      key: "readss",
    },
    { title: "Class Level", dataIndex: "class", key: "class" },
    { title: "Student id", dataIndex: "ids", key: "ids" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Button
            onClick={() => DeleteStudentsbyId(record.id)}
            type="dashed"
            danger
            style={{ marginRight: 8 }}
          >
            Reject
          </Button>
          <Button
            onClick={() => handleApproves(record)}
            type="dashed"
            style={{ borderColor: "green" }}
          >
            Approve
          </Button>
        </>
      ),
    },
  ];

  var colm = [
    { title: "Student Name", dataIndex: "studentname", key: "studentname" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Country", dataIndex: "country", key: "country" },
    { title: "City", dataIndex: "city", key: "city" },
    { title: "Where do you read", dataIndex: "read", key: "read" },
    {
      title: "In which school or university",
      dataIndex: "readss",
      key: "readss",
    },
    { title: "Class Level", dataIndex: "class", key: "class" },
    { title: "Student id", dataIndex: "ids", key: "ids" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button
          onClick={() => DeletestudentsbyIds(record.id)}
          type="dashed"
          danger
        >
          Ban
        </Button>
      ),
    },
  ];

  const handleApprove = (record) => {
    const newApproved = [...approvedTeachers, record];
    setApprovedTeachers(newApproved);
    localStorage.setItem("approvedTeachers", JSON.stringify(newApproved));

    const remainingTeachers = teachers.filter((t) => t.key !== record.key);
    setTeachers(remainingTeachers);
    localStorage.setItem("teachers", JSON.stringify(remainingTeachers));
  };
  const handleApproves = (record) => {
    const newApproved = [...approvedStudents, record];
    setApprovedStudents(newApproved);
    localStorage.setItem("approvedStudents", JSON.stringify(newApproved));

    const remainingstudents = students.filter((t) => t.key !== record.key);
    setStudents(remainingstudents);
    localStorage.setItem("students", JSON.stringify(remainingstudents));
  };
  const handleApprovess = (record) => {
    const newApproved = [...approvedMessages, record];
    setApprovedMessages(newApproved);
    localStorage.setItem("approvedMessages", JSON.stringify(newApproved));

    const remainingmessages = messages.filter((t) => t.key !== record.key);
    setMessages(remainingmessages);
    localStorage.setItem("messages", JSON.stringify(remainingmessages));
  };
  const handleWhereDoYouLive = (field, value) => {
    if (field === "read") {
      setRead(value);
    }
    if (field === "live") {
      setLive(value);
    }

    // After updating, decide which schools to show
    const nextRead = field === "read" ? value : read;
    const nextLive = field === "live" ? value : live;

    if (nextRead === "School" && nextLive === "Punjab") {
      setSchool([
        "Army Public School and College[1]",
        "Cadet College Hasan Abdal",
        "The City School",
        "Smart School Systems",
        "Modern Public Schools, Shinbagh",
        "Dar-e-Arqam Schools",
        "The Hazro City Girls Higher Secondary School, Hazro",
        "Sir Syed School, Sanjwal Cantt",
        "FG Boys High School, Sanjwal Cantt",
        "FG Girls High School, Sanjwal Cantt",
        "Ranger Public School",
        "Spring Tide English Immersion School",
        "The Core Schools",
        "The Educators",
        "Government High School",
        "International School of Cordoba",
        "National Garrison Secondary School (RYK)",
        "Army Public School & College",
        "Beaconhouse School System, Model Town",
        "Sadiq Public School",
        "The Protestant Biblical Institute",
        "Alpina School BWP",
        "Dominican Convent Higher Secondary School",
        "The Central School",
        "The Educators School",
        "The Allied School",
        "Saint Dominic Convent Higher Secondary School",
        "Government High School for Boys Bhakkar",
        "The Eaglets School - Piala Chowk Bhakkar",
        "AL Rehman Public ElemeCampus",
        "School Thattha Loona",
        "Government High School for Boys Chiniot",
        "Government High School for Girls Chiniot",
        "Chenab School",
        "GHS CHAK NO 241 JB (BHOWANA)",
        "Meraaj School (Chiniot)",
        "Abdalian Science Higher Secendory School (ASHSS)",
        "Bloomfield Hall School (BHS)",
        "The City School (TCS)",
        "Lyceum High School",
        "Garrison Public School and College",
        "KIPS",
        "Pearl Grammar Public School, Taunsa",
        "DG School & College",
        "Government High School for Boys Dera Ghazi Khan",
        "Government High School for Girls Dera Ghazi Khan",
        "Modern Education School System, Dramah",
      ]);
    }
    if (nextRead === "University" && nextLive === "Punjab") {
      setSchool([
        "University of the Punjab",
        "King Edward Medical University",
        "University of Engineering and Technology, Lahore",
        "Forman Christian College University",
        "National College of Arts",
        "University of Veterinary and Animal Sciences",
        "Punjab Tianjin University of Technology",
        "Kinnaird College for Women University",
        "Government College University, Lahore",
        "Lahore College for Women University",
        "Fatima Jinnah Medical University",
        "Lahore University of Management Sciences",
        "Institute of Management Sciences, Lahore",
        "University of Management and Technology, Lahore",
        "National College of Business Administration and Economics",
        "University of Central Punjab",
        "University of Health Sciences, Lahore",
        "University of Education",
        "University of Lahore",
        "Beaconhouse National University",
        "University of South Asia",
        "Superior University",
        "Pakistan Institute of Fashion and Design",
        "Information Technology University of the Punjab",
        "Lahore School of Economics",
        "University of Home Economics Lahore",
        "NUR International University",
        "Qarshi University",
        "Hajvery University",
        "Institute for Art and Culture[3]",
        "Green International University[4]",
        "Lahore Institute of Science and Technology[5]",
        "Rashid Latif Khan University",
        "Ali Institute of Education[6]",
        "Global Institute [HEC-NOC SUSPENDED] (ADMISSIONS HAVE BEEN STOPPED BY HEC FROM FALL 2016)",
        "Imperial College of Business Studies[7]",
        "Lahore Leads University[8]",
        "Lahore University of Biological and Applied Sciences[9]",
        "University of Child Health Sciences[10]",
      ]);
    }
    if (nextRead === "School" && nextLive === "Sindh") {
      setSchool(["asger"]);
    }
    if (nextRead === "School") {
      setCla([
        "Class 4",
        "class 6",
        "Class 7",
        "Class 8",
        "Class 9",
        "class 10",
      ]);
    }
    if (nextRead === "Collage") {
      setCla(["1st year", "2nd year"]);
    }
    if (nextRead === "University") {
      setCla(["first year", "second year", "third year", "forth year"]);
    }
  };

  const handleCityChange = (value) => {
    if (value === "Punjab") {
      setUniversities([
        "University of the Punjab",
        "King Edward Medical University",
        "University of Engineering and Technology, Lahore",
        "Forman Christian College University",
        "National College of Arts",
        "University of Veterinary and Animal Sciences",
        "Punjab Tianjin University of Technology",
        "Kinnaird College for Women University",
        "Government College University, Lahore",
        "Lahore College for Women University",
        "Fatima Jinnah Medical University",
        "Institute of Management Sciences, Lahore",
        "University of Management and Technology, Lahore",
        "National College of Business Administration and Economics",
        "University of Central Punjab",
        "University of Health Sciences, Lahore",
        "University of Education",
        "University of Lahore",
        "Beaconhouse National University",
        "University of South Asia",
        "Superior University",
        "Minhaj University, Lahore",
        "Pakistan Institute of Fashion and Design",
        "Information Technology University of the Punjab",
        "Lahore School of Economics",
        "University of Home Economics Lahore",
        "NUR International University",
        "Qarshi University",
        "Hajvery University",
        "Institute for Art and Culture[9]",
        "Green International University[10]",
        "Lahore Institute of Science and Technology[11]",
        "Institute of Management & Applied Sciences[31]",
        "Ghazi National Institute of Engineering & Sciences[26]",
        "Mir Chakar Khan Rind University of Technology",
        "Nishtar Medical University",
        "Khawaja Fareed University of Engineering and Information Technology",
        "Muhammad Nawaz Sharif University of Engineering and Technology",
      ]);
    } else if (value === "Sindh") {
      setUniversities([
        "KASB Institute of Technology",
        "Sindh Madressatul Islam University",
        "NED University of Engineering and Technology",
        "Dow University of Health Sciences",
        "University of Karachi",
        "Institute of Business Administration, Karachi",
        "Dawood University of Engineering and Technology",
        "Pakistan Naval Academy",
        "Indus Valley School of Art and Architecture",
        "Commecs institute of business and emerging sciences",
        "Sir Syed University of Engineering and Technology",
        "Shaheed Zulfiqar Ali Bhutto Institute of Science and Technology",
        "Karachi Institute of Economics and Technology",
        "Dadabhoy Institute of Higher Education",
        "Qalandar Shahbaz University of Modern Sciences",
        "Millennium Institute of Technology and Entrepreneurship",
        "Karachi Institute of Technology & Entrepreneurship",
        "Emaan Institute of Management and Sciences",
        "Emaan Institute of Management and Sciences",
        "Malir University of Science and Technology",
        "Liaquat University of Medical and Health Sciences",
        "Mehran University of Engineering and Technology",
        "Quaid-e-Awam University of Engineering, Science and Technology",
      ]);
    }
  };

  const DeleteTeachersbyId = (id) => {
    const filterData = teachers.filter((item) => item.id !== id);
    setTeachers(filterData);
    localStorage.setItem("teachers", JSON.stringify(filterData));
  };
  const DeleteStudentsbyId = (id) => {
    const filterData = students.filter((item) => item.id !== id);
    setStudents(filterData);
    localStorage.setItem("Students", JSON.stringify(filterData));
  };
  const DeleteMessagesbyId = (id) => {
    const filterData = messages.filter((item) => item.id !== id);
    setMessages(filterData);
    localStorage.setItem("messages", JSON.stringify(filterData));
  };

  const DeleteTeachersbyIds = (id) => {
    const filterData = approvedTeachers.filter((item) => item.id !== id);
    setApprovedTeachers(filterData);
    localStorage.setItem("approvedTeachers", JSON.stringify(filterData));
  };
  const DeletestudentsbyIds = (id) => {
    const filterData = approvedStudents.filter((item) => item.id !== id);
    setApprovedStudents(filterData);
    localStorage.setItem("approvedStudents", JSON.stringify(filterData));
  };
  const DeleteMessagesbyIds = (id) => {
    const filterData = approvedMessages.filter((item) => item.id !== id);
    setApprovedMessages(filterData);
    localStorage.setItem("approvedMessages", JSON.stringify(filterData));
  };
  var column = [
    { title: "Teacher Name", dataIndex: "teachername", key: "teachername" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Expert", dataIndex: "expert", key: "expert" },
    {
      title: "Experience of Teaching",
      dataIndex: "experienceofteaching",
      key: "experienceofteaching",
    },
    { title: "Degree", dataIndex: "degree", key: "degree" },
    { title: "Country", dataIndex: "country", key: "country" },
    { title: "City", dataIndex: "city", key: "city" },
    {
      title: "university graduated from",
      dataIndex: "graduated",
      key: "graduated",
    },
    { title: "Student Id", dataIndex: "studentid", key: "studentid" },
    {
      title: "Certification Number",
      dataIndex: "certification",
      key: "certification",
    },
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
  var colum = [
    { title: "Student Name", dataIndex: "studentname", key: "studentname" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Country", dataIndex: "country", key: "country" },
    { title: "City", dataIndex: "city", key: "city" },
    { title: "Where do you read", dataIndex: "read", key: "read" },
    {
      title: "In which school or university",
      dataIndex: "readss",
      key: "readss",
    },
    { title: "Class Level", dataIndex: "class", key: "class" },
    { title: "Student id", dataIndex: "ids", key: "ids" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Button
            onClick={() => DeleteStudentsbyId(record.id)}
            style={{ marginBottom: "5px" }}
            variant="dashed"
            color="volcano"
          >
            Reject
          </Button>
          <Button
            onClick={() => handleApproves(record)}
            variant="dashed"
            color="green"
          >
            Approve
          </Button>
        </>
      ),
    },
  ];
  var colm = [
    { title: "Student Name", dataIndex: "studentname", key: "studentname" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Country", dataIndex: "country", key: "country" },
    { title: "City", dataIndex: "city", key: "city" },
    { title: "Where do you read", dataIndex: "read", key: "read" },
    {
      title: "In which school or university",
      dataIndex: "readss",
      key: "readss",
    },
    { title: "Class Level", dataIndex: "class", key: "class" },
    { title: "Student id", dataIndex: "ids", key: "ids" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button
          onClick={() => DeletestudentsbyIds(record.id)}
          style={{ marginBottom: "5px" }}
          variant="dashed"
          color="volcano"
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
  const messageData = JSON.parse(localStorage.getItem("messages")) || [];
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
            dataSource={messageData.map((d, i) => ({
              ...d,
              key: d.key ?? d.id ?? i,
            }))}
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
            dataSource={approvedMessages.map((d, i) => ({
              ...d,
              key: d.key ?? d.id ?? i,
            }))}
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
            extra={
              <Button onClick={() => setTeacherModalVisible(true)}>
                Create teacher
              </Button>
            }
          >
            <Table
              dataSource={teachers.map((d, i) => ({
                ...d,
                key: d.key ?? d.id ?? i,
              }))}
              scroll={true}
              bordered
              sticky
              columns={columns}
            />
          </Card>
          <Modal
            title="Create teacher"
            open={teacherModalVisible}
            onCancel={() => setTeacherModalVisible(false)}
            footer={false}
          >
            <Form onFinish={handleTeachers} layout="vertical">
              <Form.Item
                label="Teacher name"
                name="teachername"
                rules={[
                  { required: true, message: "please enter teacher name" },
                ]}
              >
                <Input placeholder="please enter teacher name" />
              </Form.Item>
              <Form.Item
                label="Age"
                name="age"
                rules={[
                  { required: true, message: "please select teacher age" },
                ]}
              >
                <Select placeholder="please select teacher age">
                  <Select.Option key="20" value="20">
                    20
                  </Select.Option>
                  <Select.Option key="25" value="25">
                    25
                  </Select.Option>
                  <Select.Option key="28" value="28">
                    28
                  </Select.Option>
                  <Select.Option key="30" value="30">
                    30
                  </Select.Option>
                  <Select.Option key="35" value="35">
                    35
                  </Select.Option>
                  <Select.Option key="38" value="38">
                    38
                  </Select.Option>
                  <Select.Option key="40" value="40">
                    40
                  </Select.Option>
                  <Select.Option key="45" value="45">
                    45
                  </Select.Option>
                  <Select.Option key="48" value="48">
                    48
                  </Select.Option>
                  <Select.Option key="50" value="50">
                    50
                  </Select.Option>
                  <Select.Option key="55" value="55">
                    55
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Gender"
                name="gender"
                rules={[
                  { required: true, message: "please select teacher gender" },
                ]}
              >
                <Select placeholder="please select teacher gender">
                  <Select.Option key="Male" value="Male">
                    Male
                  </Select.Option>
                  <Select.Option key="Women" value="Women">
                    Women
                  </Select.Option>
                  <Select.Option key="Others" value="Others">
                    Others
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Expert"
                name="expert"
                rules={[
                  {
                    required: true,
                    message: "please select teacher expertise",
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  placeholder="please select teacher expertise"
                >
                  <OptGroup
                    label={<span style={{ color: "blue" }}>Subject List</span>}
                  >
                    <Option key="Mathematics" value="Mathematics">
                      Mathematics
                    </Option>
                    <Option key="Science" value="Science">
                      Science
                    </Option>
                    <Option key="History" value="History">
                      History
                    </Option>
                    <Option key="English" value="English">
                      English
                    </Option>
                    <Option key="Urdu" value="Urdu">
                      Urdu
                    </Option>
                    <Option key="Physical" value="Physical">
                      Physical
                    </Option>
                    <Option key="Chemistry" value="Chemistry">
                      Chemistry
                    </Option>
                    <Option key="Biology" value="Biology">
                      Biology
                    </Option>
                    <Option key="Geography" value="Geography">
                      Geography
                    </Option>
                    <Option key="Computer" value="Computer">
                      Computer
                    </Option>
                  </OptGroup>
                  <OptGroup
                    label={
                      <span style={{ color: "yellow" }}>Language List</span>
                    }
                  >
                    <Option key="Englishs" value="Englishs">
                      Englishs
                    </Option>
                    <Option key="Urdus" value="Urdus">
                      Urdus
                    </Option>
                    <Option key="Spanish" value="Spanish">
                      Spanish
                    </Option>
                    <Option key="French" value="French">
                      French
                    </Option>
                    <Option key="German" value="German">
                      German
                    </Option>
                    <Option key="Arabic" value="Arabic">
                      Arabic
                    </Option>
                    <Option key="Balochi" value="Balochi">
                      Balochi
                    </Option>
                    <Option key="Panjabi" value="Panjabi">
                      Panjabi
                    </Option>
                    <Option key="Chinese" value="Chinese">
                      Chinese
                    </Option>
                    <Option key="Russian" value="Russian">
                      Russian
                    </Option>
                  </OptGroup>
                  <OptGroup
                    label={<span style={{ color: "gold" }}>Coureses List</span>}
                  >
                    <Option key="Frontend" value="Frontend">
                      Frontend
                    </Option>
                    <Option key="Backend" value="Backend">
                      Backend
                    </Option>
                    <Option key="Full Stack" value="Full Stack">
                      Full Stack
                    </Option>
                    <Option key="Mobile Development" value="Mobile Development">
                      Mobile Development
                    </Option>
                    <Option key="Data Science" value="Data Science">
                      Data Science
                    </Option>
                    <Option key="DevOps" value="DevOps">
                      DevOps
                    </Option>
                    <Option key="Cloud Computing" value="Cloud Computing">
                      Cloud Computing
                    </Option>
                    <Option key="Cyber Security" value="Cyber Security">
                      Cyber Security
                    </Option>
                    <Option key="Machine Learning" value="Machine Learning">
                      Machine Learning
                    </Option>
                    <Option
                      key="Artificial Intelligence"
                      value="Artificial Intelligence"
                    >
                      Artificial Intelligence
                    </Option>
                    <Option key="Blockchain" value="Blockchain">
                      Blockchain
                    </Option>
                    <Option key="Internet of Things" value="Internet of Things">
                      Internet of Things
                    </Option>
                    <Option key="Augmented Reality" value="Augmented Reality">
                      Augmented Reality
                    </Option>
                    <Option key="Virtual Reality" value="Virtual Reality">
                      Virtual Reality
                    </Option>
                    <Option key="Python" value="Python">
                      Python
                    </Option>
                    <Option key="Java" value="Java">
                      Java
                    </Option>
                    <Option key="JavaScript" value="JavaScript">
                      JavaScript
                    </Option>
                    <Option key="C++" value="C++">
                      C++
                    </Option>
                    <Option key="C#" value="C#">
                      C#
                    </Option>
                    <Option key="PHP" value="PHP">
                      PHP
                    </Option>
                    <Option key="React" value="React">
                      React
                    </Option>
                    <Option key="Vue" value="Vue">
                      Vue
                    </Option>
                    <Option key="Angular" value="Angular">
                      Angular
                    </Option>
                    <Option key="Node.js" value="Node.js">
                      Node.js
                    </Option>
                    <Option key="Express.js" value="Express.js">
                      Express.js
                    </Option>
                    <Option key="MongoDB" value="MongoDB">
                      MongoDB
                    </Option>
                    <Option key="PostgreSQL" value="PostgreSQL">
                      PostgreSQL
                    </Option>
                  </OptGroup>
                </Select>
              </Form.Item>
              <Form.Item
                label="Experience of Teaching"
                name="experienceofteaching"
                rules={[
                  {
                    required: true,
                    message: "please select teacher experience of teaching",
                  },
                ]}
              >
                <Select placeholder="please select teacher experience of teaching">
                  <Option key="2 month" value="2 month">
                    2 months
                  </Option>
                  <Option key="5 month" value="5 month">
                    5 months
                  </Option>
                  <Option key="8 month" value="8 month">
                    8 months
                  </Option>
                  <Option key="12 months" value="12 months">
                    12 months
                  </Option>
                  <Option key="1 year" value="1 year">
                    1 year
                  </Option>
                  <Option key="2 years" value="2 years">
                    2 years
                  </Option>
                  <Option key="3 years" value="3 years">
                    3 years
                  </Option>
                  <Option key="4 years" value="4 years">
                    4 years
                  </Option>
                  <Option key="5 years" value="5 years">
                    5 years
                  </Option>
                  <Option key="6 years" value="6 years">
                    6 years
                  </Option>
                  <Option key="7 years" value="7 years">
                    7 years
                  </Option>
                  <Option key="8 years" value="8 years">
                    8 years
                  </Option>
                  <Option key="9 years" value="9 years">
                    9 years
                  </Option>
                  <Option key="10+ years" value="10+ years">
                    10+ year
                  </Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Degree"
                name="degree"
                rules={[
                  { required: true, message: "please select teachers degree" },
                ]}
              >
                <Select
                  mode="multiple"
                  placeholder="Please select teacher degree"
                >
                  <Option key="B.A" value="B.A">
                    B.A
                  </Option>
                  <Option key="B.Sc" value="B.Sc">
                    B.Sc
                  </Option>
                  <Option key="B.Comp" value="B.Comp">
                    B.Comp
                  </Option>
                  <Option key="BBA" value="BBA">
                    BBA
                  </Option>
                  <Option key="BCS" value="BCS">
                    BCS
                  </Option>
                  <Option key="B.E" value="B.E">
                    B.E
                  </Option>
                  <Option key="B.Tech" value="B.Tech">
                    B.Tech
                  </Option>
                  <Option key="LL.B" value="LL.B">
                    LL.B
                  </Option>
                  <Option key="MBBS" value="MBBS">
                    MBBS
                  </Option>
                  <Option key="BDS" value="BDS">
                    BDS
                  </Option>
                  <Option key="Pharm.D" value="Pharm.D">
                    Pharm.D
                  </Option>
                  <Option key="B.Ed" value="B.Ed">
                    B.Ed
                  </Option>
                  <Option key="ADE" value="ADE">
                    ADE
                  </Option>
                  <Option key="M.A" value="M.A">
                    M.A
                  </Option>
                  <Option key="M.Sc" value="M.Sc">
                    M.Sc
                  </Option>
                  <Option key="M.Comp" value="M.Comp">
                    M.Comp
                  </Option>
                  <Option key="MBA" value="MBA">
                    MBA
                  </Option>
                  <Option key="MCS" value="MCS">
                    MCS
                  </Option>
                  <Option key="M.E" value="M.E">
                    M.E
                  </Option>
                  <Option key="LL.M" value="LL.M">
                    LL.M
                  </Option>
                  <Option key="M.Ed" value="M.Ed">
                    M.Ed
                  </Option>
                  <Option key="M.Phil" value="M.Phil">
                    M.Phil
                  </Option>
                  <Option key="PH.D" value="PH.D">
                    Ph.D
                  </Option>
                  <Option key="MD" value="MD">
                    MD
                  </Option>
                  <Option key="Pharm.D (advanced)" value="Pharm.D (advanced)">
                    Pharm.D (advanced)
                  </Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Country"
                name="country"
                rules={[
                  {
                    required: true,
                    message: "please select in which country teacher lives",
                  },
                ]}
              >
                <Select
                  onChange={() => handleCountryChange(values)}
                  placeholder="please select in country the teacher lives"
                >
                  <Option key="Pakistan" value="Pakistan">
                    Pakistan
                  </Option>
                  <Option key="USA" value="USA">
                    USA
                  </Option>
                  <Option key="Germany" value="Germany">
                    Germany
                  </Option>
                  <Option key="UK" value="UK">
                    UK
                  </Option>
                  <Option key="China" value="China">
                    China
                  </Option>
                  <Option key="Russia" value="Russia">
                    Russia
                  </Option>
                  <Option key="Canada" value="Canada">
                    Canada
                  </Option>
                  <Option key="Maxico" value="Maxico">
                    Maxico
                  </Option>
                  <Option key="France" value="France">
                    France
                  </Option>
                  <Option key="Italy" value="Italy">
                    Italy
                  </Option>
                  <Option key="Japan" value="Japan">
                    Japan
                  </Option>
                  <Option key="South Korea" value="South Korea">
                    South Korea
                  </Option>
                  <Option key="Indonesia" value="Indonesia">
                    Indonasia
                  </Option>
                  <Option key="Ukrian" value="Ukrian">
                    Ukrian
                  </Option>
                  <Option key="Soudi arabia" value="Soudi arabia">
                    Soudi arabia
                  </Option>
                  <Option key="Malesia" value="Malesia">
                    Malesia
                  </Option>
                  <Option key="Australia" value="Australia">
                    Australia
                  </Option>
                  <Option key="Azerbaijan" value="Azerbaijan">
                    Azerbaijan
                  </Option>
                  <Option key="Denmark" value="Denmark">
                    Denmark
                  </Option>
                  <Option key="Egypt" value="Egypt">
                    Egypt
                  </Option>
                  <Option key="Hong Kong" value="Hong Kong">
                    Hong Kong
                  </Option>
                  <Option key="Turkey" value="Turkey">
                    Turkey
                  </Option>
                  <Option key="Philippines" value="Philippines">
                    Philippines
                  </Option>
                  <Option key="Portugal" value="Portugal">
                    Portugal
                  </Option>
                  <Option key="Qatar" value="Qatar">
                    Qatar
                  </Option>
                  <Option key="Poland" value="Poland">
                    Poland
                  </Option>

                  <Option
                    key="United Arab Emirates"
                    value="United Arab Emirates"
                  >
                    United Arab Emirates
                  </Option>
                  <Option key="Switzerland" value="Switzerland">
                    Switzerland
                  </Option>
                  <Option key="Sri Lanka" value="Sri Lanka">
                    Sri Lanka
                  </Option>
                  <Option key="Spain" value="Spain">
                    Spain
                  </Option>
                  <Option key="Singapore" value="Singapore">
                    Singapore
                  </Option>
                  <Option key="Norway" value="Norway">
                    Norway
                  </Option>
                  <Option key="Cambodia" value="Cambodia">
                    Cambodia
                  </Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="City"
                name="city"
                rules={[
                  {
                    required: true,
                    message: "please select in which city does teacher live",
                  },
                ]}
              >
                <Select
                  onChange={handleCityChange}
                  placeholder="please select in which city does teacher live"
                >
                  {cities.map((city) => (
                    <Option key={city} value={city}>
                      {city}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="From which university have teacher graduated from"
                name="graduated"
                rules={[
                  {
                    required: true,
                    message:
                      "please select from which university have teacher graduated from",
                  },
                ]}
              >
                <Select placeholder="Please slect from which university teacher have graduated">
                  {universities.map((universities) => (
                    <Option key={universities} value={universities}>
                      {universities}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="Student Id"
                name="studentid"
                rules={[
                  {
                    required: true,
                    message: "please enter teacher student id",
                  },
                ]}
              >
                <Input placeholder="please enter teacher student id" />
              </Form.Item>
              <Form.Item
                label="Certification number"
                name="certification"
                rules={[
                  {
                    required: true,
                    message: "please enter teacher certification number",
                  },
                ]}
              >
                <Input placeholder="please enter certification number" />
              </Form.Item>
              <Button htmlType="submit">Submit</Button>
            </Form>
          </Modal>
        </>
      ),
    },
    {
      key: "2",
      label: "Approved Teachers",
      children: (
        <Card style={{ width: "100%" }} title="Approved Teachers">
          <Table
            dataSource={approvedTeachers.map((d, i) => ({
              ...d,
              key: d.key ?? d.id ?? i,
            }))}
            scroll={true}
            bordered
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
            extra={
              <Button onClick={() => setStudentModalVisible(true)}>
                Create Student
              </Button>
            }
          >
            <Table
              bordered
              dataSource={students.map((d, i) => ({
                ...d,
                key: d.key ?? d.id ?? i,
              }))}
              columns={colum}
            />
          </Card>
          <Modal
            title="Create Student"
            open={studentModalVisible}
            onCancel={() => setStudentModalVisible(false)}
            footer={false}
          >
            <Form onFinish={handleStudent} layout="vertical">
              <Form.Item
                label="Student name"
                name="studentname"
                rules={[
                  { required: true, message: "please enter student name" },
                ]}
              >
                <Input placeholder="please enter student name" />
              </Form.Item>
              <Form.Item
                label="Age"
                name="age"
                rules={[
                  { required: true, message: "please select student age" },
                ]}
              >
                <Select placeholder="please select student age">
                  <Select.Option key="8" value="8">
                    8
                  </Select.Option>
                  <Select.Option key="10" value="10">
                    10
                  </Select.Option>
                  <Select.Option key="11" value="11">
                    11
                  </Select.Option>
                  <Select.Option key="12" value="12">
                    12
                  </Select.Option>
                  <Select.Option key="13" value="13">
                    13
                  </Select.Option>
                  <Select.Option key="14" value="14">
                    14
                  </Select.Option>
                  <Select.Option key="15" value="15">
                    15
                  </Select.Option>
                  <Select.Option key="16" value="16">
                    16
                  </Select.Option>
                  <Select.Option key="17" value="17">
                    17
                  </Select.Option>
                  <Select.Option key="18" value="18">
                    18
                  </Select.Option>
                  <Select.Option key="19" value="19">
                    19
                  </Select.Option>
                  <Select.Option key="20" value="20">
                    20
                  </Select.Option>
                  <Select.Option key="21" value="21">
                    21
                  </Select.Option>
                  <Select.Option key="22" value="22">
                    22
                  </Select.Option>
                  <Select.Option key="23" value="23">
                    23
                  </Select.Option>
                  <Select.Option key="24" value="24">
                    24
                  </Select.Option>
                  <Select.Option key="25" value="25">
                    25
                  </Select.Option>
                  <Select.Option key="26" value="26">
                    26
                  </Select.Option>
                  <Select.Option key="27" value="27">
                    27
                  </Select.Option>
                  <Select.Option key="28" value="28">
                    28
                  </Select.Option>
                  <Select.Option key="29" value="29">
                    29
                  </Select.Option>
                  <Select.Option key="30" value="30">
                    30
                  </Select.Option>
                  <Select.Option key="31" value="31">
                    31
                  </Select.Option>
                  <Select.Option key="32" value="32">
                    32
                  </Select.Option>
                  <Select.Option key="33" value="33">
                    33
                  </Select.Option>
                  <Select.Option key="34" value="34">
                    34
                  </Select.Option>
                  <Select.Option key="35" value="35">
                    35
                  </Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Gender"
                name="gender"
                rules={[
                  { required: true, message: "please select Student gender" },
                ]}
              >
                <Select placeholder="please select Student gender">
                  <Select.Option key="Male" value="Male">
                    Male
                  </Select.Option>
                  <Select.Option key="Women" value="Women">
                    Women
                  </Select.Option>
                  <Select.Option key="Others" value="Others">
                    Others
                  </Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Country"
                name="country"
                rules={[
                  {
                    required: true,
                    message: "please select in which country student lives",
                  },
                ]}
              >
                <Select
                  onChange={handleCountryChange}
                  placeholder="please select in country the student lives"
                >
                  <Option key="Pakistan" value="Pakistan">
                    Pakistan
                  </Option>
                  <Option key="USA" value="USA">
                    USA
                  </Option>
                  <Option key="Germany" value="Germany">
                    Germany
                  </Option>
                  <Option key="UK" value="UK">
                    UK
                  </Option>
                  <Option key="China" value="China">
                    China
                  </Option>
                  <Option key="Russia" value="Russia">
                    Russia
                  </Option>
                  <Option key="Canada" value="Canada">
                    Canada
                  </Option>
                  <Option key="Maxico" value="Maxico">
                    Maxico
                  </Option>
                  <Option key="France" value="France">
                    France
                  </Option>
                  <Option key="Italy" value="Italy">
                    Italy
                  </Option>
                  <Option key="Japan" value="Japan">
                    Japan
                  </Option>
                  <Option key="South Korea" value="South Korea">
                    South Korea
                  </Option>
                  <Option key="Indonesia" value="Indonesia">
                    Indonasia
                  </Option>
                  <Option key="Ukrian" value="Ukrian">
                    Ukrian
                  </Option>
                  <Option key="Soudi arabia" value="Soudi arabia">
                    Soudi arabia
                  </Option>
                  <Option key="Malesia" value="Malesia">
                    Malesia
                  </Option>
                  <Option key="Australia" value="Australia">
                    Australia
                  </Option>
                  <Option key="Azerbaijan" value="Azerbaijan">
                    Azerbaijan
                  </Option>
                  <Option key="Denmark" value="Denmark">
                    Denmark
                  </Option>
                  <Option key="Egypt" value="Egypt">
                    Egypt
                  </Option>
                  <Option key="Hong Kong" value="Hong Kong">
                    Hong Kong
                  </Option>
                  <Option key="Turkey" value="Turkey">
                    Turkey
                  </Option>
                  <Option key="Philippines" value="Philippines">
                    Philippines
                  </Option>
                  <Option key="Portugal" value="Portugal">
                    Portugal
                  </Option>
                  <Option key="Qatar" value="Qatar">
                    Qatar
                  </Option>
                  <Option key="Poland" value="Poland">
                    Poland
                  </Option>

                  <Option
                    key="United Arab Emirates"
                    value="United Arab Emirates"
                  >
                    United Arab Emirates
                  </Option>
                  <Option key="Switzerland" value="Switzerland">
                    Switzerland
                  </Option>
                  <Option key="Sri Lanka" value="Sri Lanka">
                    Sri Lanka
                  </Option>
                  <Option key="Spain" value="Spain">
                    Spain
                  </Option>
                  <Option key="Singapore" value="Singapore">
                    Singapore
                  </Option>
                  <Option key="Norway" value="Norway">
                    Norway
                  </Option>
                  <Option key="Cambodia" value="Cambodia">
                    Cambodia
                  </Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="City"
                name="city"
                rules={[
                  {
                    required: true,
                    message: "please select in which city does student live",
                  },
                ]}
              >
                <Select
                  placeholder="please select in which city does student live"
                  onChange={(value) => handleWhereDoYouLive("live", value)}
                >
                  {cities.map((city) => (
                    <Option key={city} value={city}>
                      {city}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="where do you read"
                name="read"
                rules={[
                  { required: true, message: "please select where you read" },
                ]}
              >
                <Select
                  style={{ width: "70%" }}
                  placeholder="please select where you read"
                  onChange={(value) => handleWhereDoYouLive("read", value)}
                >
                  <Option key="School" value="School">
                    School
                  </Option>
                  <Option key="Collage" value="Collage">
                    Collage
                  </Option>
                  <Option key="University" value="University">
                    University
                  </Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="in which school or university do you read"
                name="readss"
                rules={[
                  {
                    required: true,
                    message:
                      "please select in which school or university do you read",
                  },
                ]}
              >
                <Select
                  style={{ width: "70%" }}
                  placeholder="please select in which school or university do you read"
                >
                  {school.map((school) => (
                    <Option key={school} value={school}>
                      {school}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="Class Level"
                name="class"
                rules={[
                  {
                    required: true,
                    message:
                      "please select in which class level do you read in",
                  },
                ]}
              >
                <Select
                  style={{ width: "70%" }}
                  placeholder="please select in which class do you read in"
                >
                  {cla.map((cla) => (
                    <Option key={cla} value={cla}>
                      {cla}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Button htmlType="submit">Submit</Button>
            </Form>
          </Modal>
        </>
      ),
    },
    {
      key: "2",
      label: "Approved Student",
      children: (
        <Card style={{ width: "100%" }} title="Approved students">
          <Table
            bordered
            dataSource={approvedStudents.map((d, i) => ({
              ...d,
              key: d.key ?? d.id ?? i,
            }))}
            columns={colm}
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
          <p>Approved Teachers:{approvedTeachers.length}</p>
          <p>Teachers to be Approved:{teachers.length}</p>
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
          <p>Approved Students:{approvedStudents.length}</p>
          <p>Students to be Approved:{students.length}</p>
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
