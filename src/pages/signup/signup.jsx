import {
  Card,
  Form,
  Input,
  message,
  Row,
  Col,
  Radio,
  Button,
  Select,
  Tag,
  ColorPicker,
} from "antd";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const { OptGroup, Option } = Select;
const Signup = () => {
  const navigate = useNavigate();
      

const API = import.meta.env.VITE_API_URL;
  const [selectedRole, setSelectedRole] = useState(null);
const [classs, setClasss] = useState([]);
  const [form] = Form.useForm();
 
  const [cities, setCities] = useState([]);
  const [universities, setUniversities] = useState([]);
 const [school, setSchool] = useState([]);
  const [read, setRead] = useState("");
  const [live, setLive] = useState("");



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

  // Custom tag renderer
  

   
  const roles = [
    {
      id: "admin",
      name: "Admin",
      description: "Full access to all features",
      image: "/images/human.png",
    },
    {
      id: "teacher",
      name: "Teacher",
      description: "can manage courses and students",
      image: "/images/chart.png",
    },
   
    {
      id: "student",
      name: "Student",
      description: "can access learning materials",
      image: "/images/graduation.png",
    },
  ];
const handleSignup = async (values) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
       body: JSON.stringify(values),

      }
    );

    const data = await res.json();

   if (res.ok) {
  const data = await res.json();

  // store user id + role
  localStorage.setItem("pendingUserId", data.user.id);
  localStorage.setItem("role", data.user.role);

  message.success(data.message);

  if (data.user.role === "admin") {
    navigate("/home");
  }
}
  } catch (err) {
    console.error("FETCH ERROR:", err);
    message.error("Server not reachable");
  }
};


useEffect(() => {
  const userId = localStorage.getItem("pendingUserId");

  if (!userId) return;

  const interval = setInterval(async () => {
    try {
      const res = await fetch(
        `http://localhost:60977/api/admin/users/status/${userId}`
      );

      const data = await res.json();

      if (data.status === "approved") {
        localStorage.removeItem("pendingUserId");
        navigate("/home");
      }

      if (data.status === "rejected") {
        localStorage.removeItem("pendingUserId");
        message.error("Your signup was rejected");
      }
    } catch (err) {
      console.error(err);
    }
  }, 3000); // every 3 seconds

  return () => clearInterval(interval);
}, []);












  return (
     <div style={{ display: "flex", justifyContent: "center" }}>
      <Card title="Signup" style={{ width: "80%" }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSignup}
          onFinishFailed={(e) => console.log("FAILED:", e)}
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
            name="phone"
            label="Phone"
            rules={[{ required: true }]}
          >
            <Input autoComplete="tel" />
          </Form.Item>

          {/* ROLE SELECTION */}
          <Form.Item label="Who are you?">
  <Row gutter={[24, 24]} justify="center">
    {roles.map((role) => (
      <Col xs={24} sm={12} md={8} lg={6} key={role.id}>
        <Card
          hoverable
          cover={
            <img
              alt={role.name}
              src={role.image}
              style={{ height: 150, objectFit: "cover" }}
            />
          }
          onClick={() => {
            setSelectedRole(role.id);          // "admin" | "teacher" | "student"
            form.setFieldsValue({ role: role.id });
          }}
          style={{
            borderColor:
              selectedRole === role.id ? "#1890ff" : "#f0f0f0",
            backgroundColor:
              selectedRole === role.id ? "#e6f7ff" : "#fff",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          <Card.Meta
            title={role.name}
            description={role.description}
          />
        </Card>
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
          {selectedRole === "admin" && (
            <Form.Item
              name="adminVerify"
              label="Admin Verification Code"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          )}
          {selectedRole === "teacher" && (
            <>
              <Form.Item
                label="SubjectExpertise"
                name="expertise"
                rules={[
                  { required: true, message: "Please select your expertise" },
                ]}
              >
                <Select
                  mode="multiple"
                  placeholder="Please select your expertise"
                  style={{ width: "70%" }}
                 
                >
                  <OptGroup
                    label={<span style={{ color: "blue" }}>Subject List</span>}
                  >
                    <Option value="Mathematics">Mathematics</Option>
                    <Option value="Science">Science</Option>
                    <Option value="History">History</Option>
                    <Option value="English">English</Option>
                    <Option value="Urdu">Urdu</Option>
                    <Option value="Physical">Physical</Option>
                    <Option value="Chemistry">Chemistry</Option>
                    <Option value="Biology">Biology</Option>
                    <Option value="Geography">Geography</Option>
                    <Option value="Computer">Computer</Option>
                  </OptGroup>
                  <OptGroup label="Language List">
                    <Option value="Englishs">Englishs</Option>
                    <Option value="Urdus">Urdus</Option>
                    <Option value="Spanish">Spanish</Option>
                    <Option value="French">French</Option>
                    <Option value="German">German</Option>
                    <Option value="Arabic">Arabic</Option>
                    <Option value="Balochi">Balochi</Option>
                    <Option value="Panjabi">Panjabi</Option>
                    <Option value="Chinese">Chinese</Option>
                    <Option value="Russian">Russian</Option>
                  </OptGroup>
                  <OptGroup label="Course related List">
                    <Option value="Frontend">Frontend</Option>
                    <Option value="Backend">Backend</Option>
                    <Option value="Full Stack">Full Stack</Option>
                    <Option value="Mobile Development">
                      Mobile Development
                    </Option>
                    <Option value="Data Science">Data Science</Option>
                    <Option value="DevOps">DevOps</Option>
                    <Option value="Cloud Computing">Cloud Computing</Option>
                    <Option value="Cyber Security">Cyber Security</Option>
                    <Option value="Machine Learning">Machine Learning</Option>
                    <Option value="Artificial Intelligence">
                      Artificial Intelligence
                    </Option>
                    <Option value="Blockchain">Blockchain</Option>
                    <Option value="Internet of Things">
                      Internet of Things
                    </Option>
                    <Option value="Augmented Reality">Augmented Reality</Option>
                    <Option value="Virtual Reality">Virtual Reality</Option>
                    <Option value="Python">Python</Option>
                    <Option value="Java">Java</Option>
                    <Option value="JavaScript">JavaScript</Option>
                    <Option value="C++">C++</Option>
                    <Option value="C#">C#</Option>
                    <Option value="PHP">PHP</Option>
                    <Option value="React">React</Option>
                    <Option value="Vue">Vue</Option>
                    <Option value="Angular">Angular</Option>
                    <Option value="Node.js">Node.js</Option>
                    <Option value="Express.js">Express.js</Option>
                    <Option value="MongoDB">MongoDB</Option>
                    <Option value="PostgreSQL">PostgreSQL</Option>
                  </OptGroup>
                </Select>
              </Form.Item>
              <Form.Item
                label="ExperieanceOfTeaching"
                name="teachingExperience"
                rules={[
                  { required: true, message: "please select expirence year" },
                ]}
              >
                <Select
                  placeholder="please select expirence year"
                  style={{ height: "35px", width: "70%" }}
                >
                  <Option value="2 month">2 months</Option>
                  <Option value="5 month">5 months</Option>
                  <Option value="8 month">8 months</Option>
                  <Option value="12 months">12 months</Option>
                  <Option value="1 year">1 year</Option>
                  <Option value="2 years">2 years</Option>
                  <Option value="3 years">3 years</Option>
                  <Option value="4 years">4 years</Option>
                  <Option value="5 years">5 years</Option>
                  <Option value="6 years">6 years</Option>
                  <Option value="7 years">7 years</Option>
                  <Option value="8 years">8 years</Option>
                  <Option value="9 years">9 years</Option>
                  <Option value="10+ years">10+ year</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Digree"
                name="degree"
                rules={[
                  {
                    required: true,
                    message: "please select your degree",
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  style={{ width: "70%" }}
                  placeholder="please select your degree"
                >
                  <Option value="B.A">B.A</Option>
                  <Option value="B.Sc">B.Sc</Option>
                  <Option value="B.Comp">B.Comp</Option>
                  <Option value="BBA">BBA</Option>
                  <Option value="BCS">BCS</Option>
                  <Option value="B.E">B.E</Option>
                  <Option value="B.Tech">B.Tech</Option>
                  <Option value="LL.B">LL.B</Option>
                  <Option value="MBBS">MBBS</Option>
                  <Option value="BDS">BDS</Option>
                  <Option value="Pharm.D">Pharm.D</Option>
                  <Option value="B.Ed">B.Ed</Option>
                  <Option value="ADE">ADE</Option>
                  <Option value="M.A">M.A</Option>
                  <Option value="M.Sc">M.Sc</Option>
                  <Option value="M.Comp">M.Comp</Option>
                  <Option value="MBA">MBA</Option>
                  <Option value="MCS">MCS</Option>
                  <Option value="M.E">M.E</Option>
                  <Option value="LL.M">LL.M</Option>
                  <Option value="M.Ed">M.Ed</Option>
                  <Option value="M.Phil">M.Phil</Option>
                  <Option value="PH.D">Ph.D</Option>
                  <Option value="MD">MD</Option>
                  <Option value="Pharm.D (advanced)">Pharm.D (advanced)</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="From which city have you Graduated"
                name="graduation"
                rules={[
                  { required: true, message: "please enter your graduation" },
                ]}
              >
                <Select
                  style={{ width: "70%", height: "35px" }}
                  placeholder="please select in which city have your graduation"
                  onChange={handleCityChange}
                >
                  {cities.map((city) => (
                    <Option key={city} value={city}>
                      {city}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="from which university have you graduated"
                name="university"
                rules={[
                  {
                    required: true,
                    message:
                      "please selest from which university have you graduated",
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  style={{ width: "70%" }}
                  placeholder="please select from which university have you graduated"
                
                >
                  {universities.map((universities) => (
                    <Option key={universities} value={universities}>
                      {universities}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="Student Id"
                name="ids"
                rules={[
                  { required: true, message: "please enter your student id" },
                ]}
              >
                <Input
                  style={{ width: "70%" }}
                  placeholder="please enter your student id"
                />
              </Form.Item>
              <Form.Item
                label="certification number"
                name="certification"
                rules={[
                  {
                    required: true,
                    message: "please enter your certication number",
                  },
                ]}
              >
                <Input
                  style={{ width: "70%" }}
                  placeholder="please enter your certification number"
                />
              </Form.Item>
            </>
          )}
          {/* STUDENT */}
          {selectedRole === "student" && (
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

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Signup;
