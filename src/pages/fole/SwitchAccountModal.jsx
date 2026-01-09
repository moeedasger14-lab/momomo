import { Modal, Card , Form, Select, Input, Button, Row, Col, Radio, message } from 'antd';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
 
const SwitchAccountModal = ({ open, setOpen }) => {
 
    const navigate = useNavigate();
    const [form]= Form.useForm();
    
    const [selectedRole, setSelectedRole] = React.useState(null);

const [cities, setCities] = useState([]);
  const [universities, setUniversities] = useState([]);
 const [school, setSchool] = useState([]);
  const [read, setRead] = useState("");
  const [live, setLive] = useState("");

 const admin = JSON.parse(localStorage.getItem("currentUser"));
  const signups = JSON.parse(localStorage.getItem("signupdata")) || [];

 const handleSubmit = (values) => {
    const pending =
      JSON.parse(localStorage.getItem("pendingTeacherSignupData")) || [];

    // 🔹 CHANGE: admin-created teacher
    pending.push({
      id: Date.now(),
      ...values,
      role: 2,
      status: "pending",
      createdByAdmin: true,
    });

    localStorage.setItem(
      "pendingTeacherSignupData",
      JSON.stringify(pending)
    );

    message.success("Teacher created and sent for approval");
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
  
destroyOnHidden
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
          <Form.Item label="Who are, you?">
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
                      setSelectedRole(role.id);
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
           <Select placeholder="Please select your gender">
            <Select.Option key="Male" value="Male">Male</Select.Option>
            <Select.Option key="woman" value="woman">woman</Select.Option>
           
           </Select>
          </Form.Item>

          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true }]}
          >
            <Select onChange={handleCountryChange}>
              <Select.Option value="Pakistan">Pakistan</Select.Option>
              <Select.Option value="USA">USA</Select.Option>
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
                  <Select.Option value="School">School</Select.Option>
                  <Select.Option value="Collage">College</Select.Option>
                  <Select.Option value="University">University</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="live"
                label="Where do you live?"
                rules={[{ required: true }]}
              >
                <Select onChange={(v) => handleWhereDoYouLive("live", v)}>
                  {cities.map((c) => (
                    <Select.Option key={c}>{c}</Select.Option>
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
                    <Select.Option key={c}>{c}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </>
          )}
{selectedRole === 2 && (
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
                  <Select.OptGroup
                    label={<span style={{ color: "blue" }}>Subject List</span>}
                  >
                    <Select.Option value="Mathematics">Mathematics</Select.Option>
                    <Select.Option value="Science">Science</Select.Option>
                    <Select.Option value="History">History</Select.Option>
                    <Select.Option value="English">English</Select.Option>
                    <Select.Option value="Urdu">Urdu</Select.Option>
                    <Select.Option value="Physical">Physical</Select.Option>
                    <Select.Option value="Chemistry">Chemistry</Select.Option>
                    <Select.Option value="Biology">Biology</Select.Option>
                    <Select.Option value="Geography">Geography</Select.Option>
                    <Select.Option value="Computer">Computer</Select.Option>
                  </Select.OptGroup>
                  <Select.OptGroup label="Language List">
                    <Select.Option value="Englishs">Englishs</Select.Option>
                    <Select.Option value="Urdus">Urdus</Select.Option>
                    <Select.Option value="Spanish">Spanish</Select.Option>
                    <Select.Option value="French">French</Select.Option>
                    <Select.Option value="German">German</Select.Option>
                    <Select.Option value="Arabic">Arabic</Select.Option>
                    <Select.Option value="Balochi">Balochi</Select.Option>
                    <Select.Option value="Panjabi">Panjabi</Select.Option>
                    <Select.Option value="Chinese">Chinese</Select.Option>
                    <Select.Option value="Russian">Russian</Select.Option>
                  </Select.OptGroup>
                  <Select.OptGroup label="Course related List">
                    <Select.Option value="Frontend">Frontend</Select.Option>
                    <Select.Option value="Backend">Backend</Select.Option>
                    <Select.Option value="Full Stack">Full Stack</Select.Option>
                    <Select.Option value="Mobile Development">
                      Mobile Development
                    </Select.Option>
                    <Select.Option value="Data Science">Data Science</Select.Option>
                    <Select.Option value="DevOps">DevOps</Select.Option>
                    <Select.Option value="Cloud Computing">Cloud Computing</Select.Option>
                    <Select.Option value="Cyber Security">Cyber Security</Select.Option>
                    <Select.Option value="Machine Learning">Machine Learning</Select.Option>
                    <Select.Option value="Artificial Intelligence">
                      Artificial Intelligence
                    </Select.Option>
                    <Select.Option value="Blockchain">Blockchain</Select.Option>
                    <Select.Option value="Internet of Things">
                      Internet of Things
                    </Select.Option>
                    <Select.Option value="Augmented Reality">Augmented Reality</Select.Option>
                    <Select.Option value="Virtual Reality">Virtual Reality</Select.Option>
                    <Select.Option value="Python">Python</Select.Option>
                    <Select.Option value="Java">Java</Select.Option>
                    <Select.Option value="JavaScript">JavaScript</Select.Option>
                    <Select.Option value="C++">C++</Select.Option>
                    <Select.Option value="C#">C#</Select.Option>
                    <Select.Option value="PHP">PHP</Select.Option>
                    <Select.Option value="React">React</Select.Option>
                    <Select.Option value="Vue">Vue</Select.Option>
                    <Select.Option value="Angular">Angular</Select.Option>
                    <Select.Option value="Node.js">Node.js</Select.Option>
                    <Select.Option value="Express.js">Express.js</Select.Option>
                    <Select.Option value="MongoDB">MongoDB</Select.Option>
                    <Select.Option value="PostgreSQL">PostgreSQL</Select.Option>
                  </Select.OptGroup>
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
                  <Select.Option value="2 month">2 months</Select.Option>
                  <Select.Option value="5 month">5 months</Select.Option>
                  <Select.Option value="8 month">8 months</Select.Option>
                  <Select.Option value="12 months">12 months</Select.Option>
                  <Select.Option value="1 year">1 year</Select.Option>
                  <Select.Option value="2 years">2 years</Select.Option>
                  <Select.Option value="3 years">3 years</Select.Option>
                  <Select.Option value="4 years">4 years</Select.Option>
                  <Select.Option value="5 years">5 years</Select.Option>
                  <Select.Option value="6 years">6 years</Select.Option>
                  <Select.Option value="7 years">7 years</Select.Option>
                  <Select.Option value="8 years">8 years</Select.Option>
                  <Select.Option value="9 years">9 years</Select.Option>
                  <Select.Option value="10+ years">10+ year</Select.Option>
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
                  <Select.Option value="B.A">B.A</Select.Option>
                  <Select.Option value="B.Sc">B.Sc</Select.Option>
                  <Select.Option value="B.Comp">B.Comp</Select.Option>
                  <Select.Option value="BBA">BBA</Select.Option>
                  <Select.Option value="BCS">BCS</Select.Option>
                  <Select.Option value="B.E">B.E</Select.Option>
                  <Select.Option value="B.Tech">B.Tech</Select.Option>
                  <Select.Option value="LL.B">LL.B</Select.Option>
                  <Select.Option value="MBBS">MBBS</Select.Option>
                  <Select.Option value="BDS">BDS</Select.Option>
                  <Select.Option value="Pharm.D">Pharm.D</Select.Option>
                  <Select.Option value="B.Ed">B.Ed</Select.Option>
                  <Select.Option value="ADE">ADE</Select.Option>
                  <Select.Option value="M.A">M.A</Select.Option>
                  <Select.Option value="M.Sc">M.Sc</Select.Option>
                  <Select.Option value="M.Comp">M.Comp</Select.Option>
                  <Select.Option value="MBA">MBA</Select.Option>
                  <Select.Option value="MCS">MCS</Select.Option>
                  <Select.Option value="M.E">M.E</Select.Option>
                  <Select.Option value="LL.M">LL.M</Select.Option>
                  <Select.Option value="M.Ed">M.Ed</Select.Option>
                  <Select.Option value="M.Phil">M.Phil</Select.Option>
                  <Select.Option value="PH.D">Ph.D</Select.Option>
                  <Select.Option value="MD">MD</Select.Option>
                  <Select.Option value="Pharm.D (advanced)">Pharm.D (advanced)</Select.Option>
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
                    <Select.Option key={city} value={city}>
                      {city}
                    </Select.Option>
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
                    <Select.Option key={universities} value={universities}>
                      {universities}
                    </Select.Option>
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
          <Button block type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
</Modal>
   </>
  )
}

export default SwitchAccountModal;