import { Modal, Form, Select, Input, Button, Row, Col, Radio, message } from 'antd';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SwitchAccountModal = ({ open, setOpen }) => {
    const navigate = useNavigate();
    const [form]= Form.useForm();
    const {Option} =Select;
    const [selectedRole, setSelectedRole] = React.useState(null);

const [cities, setCities] = useState([]);
  const [universities, setUniversities] = useState([]);
 const [school, setSchool] = useState([]);
  const [read, setRead] = useState("");
  const [live, setLive] = useState("");

 const admin = JSON.parse(localStorage.getItem("currentUser"));
  const signups = JSON.parse(localStorage.getItem("signupdata")) || [];

  const handleSubmit = (values) => {
    console.log("FORM SUBMITTED:", values); // ✅ DEBUG (you WILL see this)

    const exists = signups.some((u) => u.email === values.email);
    if (exists) {
      message.error("Account already exists");
      return;
    }

    const newAccount = {
      id: Date.now(),
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      role: values.role,
      createdBy: admin.id,
    };

    localStorage.setItem(
      "signupdata",
      JSON.stringify([...signups, newAccount])
    );

    message.success("Account created successfully");
    form.resetFields();
    setOpen(false);
  };

const roles = [
    {
      id: 1,
      name: "Admin",
      description: "Full access to all features",
      image: "/images/human.png",
    },
    {
      id: 2,
      name: "Teacher",
      description: "can manage courses and students",
      image: "/images/chart.png",
    },
    {
      id: 3,
      name: "Viewer",
      description: "Read-only access",
      image: "/images/accountply.jpg",
    },
    {
      id: 4,
      name: "Student",
      description: "can access learning materials",
      image: "/images/graduation.png",
    },
  ];
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
      setClasss(["Class 4","class 6","Class 7","Class 8","Class 9","class 10"]);
    }
    if (nextRead === "Collage") {
      setClasss(["1st year","2nd year"]);
    }
    if (nextRead === "University") {
      setClasss(["first year","second year","third year","forth year"])
    }
  };

  const handleCountryChange = (value) => {
    if (value === "Pakistan") {
      setCities(["Punjab", "Sindh", "Islamabad", "Balochistan"]);
    } else if (value === "USA") {
      setCities(["New York", "Los Angeles", "Chicago", "Houston"]);
    } else {
      setCities([]);
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
  return (
   <>
<Modal
  title="Switch Account"
  open={open}
  onCancel={() => setOpen(false)}
  footer={null}
  
destroyOnClose
>
     <Form
     onFinish={handleSubmit}
          form={form}
          layout="vertical"
         
        >
          {/* REQUIRED hidden role field */}
          <Form.Item name="role" hidden rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[{ required: true }]}
          >
            <Input autoComplete="name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true }]}
          >
            <Input autoComplete="username" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input.Password autoComplete="new-password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            rules={[{ required: true }]}
          >
            <Input.Password autoComplete="new-password" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone"
            rules={[{ required: true }]}
          >
            <Input autoComplete="tel" />
          </Form.Item>

          {/* ROLE SELECTION */}
          <Form.Item label="Who are you?">
            <Row gutter={12}>
              {roles.map((r) => (
                <Col key={r.id}>
                  <Button
                    type={selectedRole === r.id ? "primary" : "default"}
                    onClick={() => {
                      setSelectedRole(r.id);
                      form.setFieldsValue({ role: r.id });
                    }}
                  >
                    {r.name}
                  </Button>
                </Col>
              ))}
            </Row>
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true }]}
          >
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="other">Other</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true }]}
          >
            <Select onChange={handleCountryChange}>
              <Option value="Pakistan">Pakistan</Option>
              <Option value="USA">USA</Option>
            </Select>
          </Form.Item>

          {/* ADMIN */}
          {selectedRole === 1 && (
            <Form.Item
              name="adminVerify"
              label="Admin Verification Code"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          )}

          {/* STUDENT */}
          {selectedRole === 4 && (
            <>
              <Form.Item
                name="read"
                label="Where do you study?"
                rules={[{ required: true }]}
              >
                <Select onChange={(v) => handleWhereDoYouLive("read", v)}>
                  <Option value="School">School</Option>
                  <Option value="Collage">College</Option>
                  <Option value="University">University</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="live"
                label="Where do you live?"
                rules={[{ required: true }]}
              >
                <Select onChange={(v) => handleWhereDoYouLive("live", v)}>
                  {cities.map((c) => (
                    <Option key={c}>{c}</Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="class"
                label="Class Level"
                rules={[{ required: true }]}
              >
                <Select>
                  {classs.map((c) => (
                    <Option key={c}>{c}</Option>
                  ))}
                </Select>
              </Form.Item>
            </>
          )}

          <Button block type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
</Modal>
   </>
  )
}

export default SwitchAccountModal;