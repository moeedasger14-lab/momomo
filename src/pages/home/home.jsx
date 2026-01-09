import React, { useEffect, useRef } from "react";
import {
  Affix,
  Button,
  Divider,
  Form,
  Input,
  Layout,
  Tabs,
  Tag,
  Card,
  Typography,
  message,
} from "antd";
import TweenOne from "rc-tween-one";

import { useNavigate } from "react-router-dom";
import {
  ArrowRightOutlined,
  CheckCircleOutlined,
  ClockCircleFilled,
  ClockCircleOutlined,
  ContactsOutlined,
  EditOutlined,
  PoundCircleOutlined,
  SendOutlined,
  SettingOutlined,
  SolutionOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import "./homes.css";
import Footercomponent from "../../component/footer/Footer";

const { Content } = Layout;
const { Text, Title } = Typography;
const planets = [
  { name: "Mercury", color: "#b1b1b1", size: 20, orbit: 60, moons: [] },
  { name: "Venus", color: "#e0b95d", size: 30, orbit: 100, moons: [] },
  { name: "Earth", color: "#4a90e2", size: 35, orbit: 140 },
  { name: "Mars", color: "#d14b3f", size: 25, orbit: 180 },
];

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));
 const shown = useRef(false);
  const handleMessage = (values) => {
    const lastSent = localStorage.getItem("lastMessageTime");
    const now = Date.now();

    // Check if last message was sent within the past hour (3600000 ms)
    if (lastSent && now - parseInt(lastSent, 10) < 3600000) {
      alert("You can only send a message once every hour.");
      return;
    }

    if (values.emails === signup?.email && values.name === signup?.fullName) {
      const existing = JSON.parse(localStorage.getItem("messages") || "[]");
      existing.push({ ...values, time: Date.now() });
      localStorage.setItem("messages", JSON.stringify(existing));

      alert("Thanks for contacting us, we will get back to you soon!");

      navigate("/home");
    } else {
      alert("please enter valid details");
      localStorage.removeItem("contactdata");
    }
  };

  useEffect(() => {
    if (!user || shown.current) return;
    shown.current = true;

    const messages = {
      1: `Welcome Admin! ${user.fullName}`,
      2: `Welcome Teacher! ${user.fullName}`,
      3: `Welcome User ${user.fullName}`,
      4: `Welcome Student ${user.fullName}`,
    };

    message.success(messages[user.role]);
  }, [user]);

 
  const baseItems = [
    {
      key: "1",
      label: "Home",
      children: (
        <>
          <Content
            style={{
              height: "550px",
              width: "99%",
              backgroundColor: "transparent",
              border: "1px solid grey",
              borderRadius: "8px",
              boxShadow: "1px 4px 6px grey",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: "300px",
                width: "45%",
                backgroundColor: "transparent",
                border: "1px solid grey",
                boxShadow: "1px 4px 6px grey",
                display: "flex",
                flexDirection: "column",
                marginRight: "20px",
                marginLeft: "40px",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                padding: "10px",
              }}
            >
              <Title>Welcome to Web assistance</Title>
              <Text style={{ marginLeft: "5px" }} strong>
                We are here to help you with your web development needs.and
                other subjects you want to learn like Math,Science,Boilogy and
                you want to learn any language we got your back . Here you can
                learn your subjects easily with the help of expert tutors . So
                what are you waiting for ? Lets gets started!
              </Text>
              {[4].includes(user?.role) && (
                <Button
                  className="btn"
                  id="mod"
                  style={{ marginTop: "10px" }}
                  type="primary"
                >
                  Get Started
                </Button>
              )}
            </div>
            <img
              src="/images/OIP (6).webp"
              style={{
                height: "550px",
                width: "50%",
                paddingLeft: "40px",
                borderRadius: "8px",
              }}
            />
          </Content>
         

        </>
      ),
    },
    {
      key: "2",
      label: "About us",
      children: (
        <>
          <Content
            style={{
              height: "950px",
              width: "100%",
              border: "1px solid gray",
              borderRadius: "8px",
              boxShadow: "1px 4px 6px grey",
            }}
          >
            <Divider
              titlePlacement="left"
              style={{ color: "#1890ff", fontSize: "18px", fontWeight: "bold" }}
            >
              🎓 Who We Are
            </Divider>
            <p style={{ fontSize: "16px", color: "#555" }}>
              We are a passionate team of educators and technologists committed
              to making learning accessible, personalized, and effective for
              every student.
            </p>

            <Divider
              titlePlacement="left"
              style={{ color: "#722ed1", fontSize: "18px", fontWeight: "bold" }}
            >
              📜 Our History
            </Divider>
            <p style={{ fontSize: "16px", color: "#555" }}>
              Starting as a small group of tutors helping local students, we
              have grown into a platform that connects learners with expert
              guidance worldwide.
            </p>

            <Divider
              titlePlacement="left"
              style={{ color: "#fa8c16", fontSize: "18px", fontWeight: "bold" }}
            >
              🎯 Our Goal
            </Divider>
            <p style={{ fontSize: "16px", color: "#555" }}>
              Our goal is to empower students to master concepts, build
              confidence, and achieve academic success through personalized
              tutoring and smart learning tools.
            </p>

            <Divider
              titlePlacement="left"
              style={{ color: "#13c2c2", fontSize: "18px", fontWeight: "bold" }}
            >
              ⭐ Our Priority
            </Divider>
            <p style={{ fontSize: "16px", color: "#555" }}>
              Student success is our top priority. We focus on clear
              explanations, adaptive practice, and supportive mentorship to
              ensure every learner thrives.
            </p>

            <Divider
              titlePlacement="left"
              style={{ color: "#eb2f96", fontSize: "18px", fontWeight: "bold" }}
            >
              🏆 Our Achievements
            </Divider>
            <p style={{ fontSize: "16px", color: "#555" }}>
              Over the years, our students have improved grades, cracked
              competitive exams, and earned scholarships, while our tutors have
              been recognized for excellence in teaching and mentorship.
            </p>

            <Divider
              titlePlacement="left"
              style={{ color: "#52c41a", fontSize: "18px", fontWeight: "bold" }}
            >
              🌟 Our Vision
            </Divider>
            <p style={{ fontSize: "16px", color: "#555" }}>
              We envision a world where every learner has access to high-quality
              education, regardless of location or background.
            </p>

            <Divider
              titlePlacement="left"
              style={{ color: "#ff4d4f", fontSize: "18px", fontWeight: "bold" }}
            >
              💡 Our Values
            </Divider>
            <p style={{ fontSize: "16px", color: "#555" }}>
              Integrity, innovation, and inclusivity guide everything we do. We
              believe in fostering curiosity and lifelong learning.
            </p>

            <Divider
              titlePlacement="left"
              style={{ color: "#096dd9", fontSize: "18px", fontWeight: "bold" }}
            >
              📚 Our Services
            </Divider>
            <p style={{ fontSize: "16px", color: "#555" }}>
              We offer one-on-one tutoring, group sessions, exam preparation,
              and interactive online resources tailored to each student’s needs.
            </p>

            <Divider
              titlePlacement="left"
              style={{ color: "#d46b08", fontSize: "18px", fontWeight: "bold" }}
            >
              🤝 Our Community
            </Divider>
            <p style={{ fontSize: "16px", color: "#555" }}>
              Our platform thrives on collaboration between students, tutors,
              and parents, creating a supportive learning environment.
            </p>
            <Divider
              titlePlacement="left"
              style={{ color: "#531dab", fontSize: "18px", fontWeight: "bold" }}
            >
              🚀 Our Future Plans
            </Divider>
            <p style={{ fontSize: "16px", color: "#555" }}>
              We aim to expand globally, integrate AI-driven learning tools, and
              continue building a platform that adapts to the evolving needs of
              education.
            </p>
          </Content>
       
        </>
      ),
    },
    {
      key: "3",
      label: "Contact us",
      children: (
        <>
          <Content
            style={{
              height: "950px",
              width: "95%",
              border: "1px solid grey",
              borderRadius: "8px",
              boxShadow: "1px 4px 6px grey",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: 16,
            }}
          >
            <img
              style={{
                width: "100%",
                height: "400px",
                borderRadius: "8px",
                marginBottom: "30px",
              }}
              src="/images/aboutus.jpg"
              alt="aboutus"
            />
            <div
              style={{
                height: "500px",
                width: "90%",
                border: "1px solid grey",
                borderRadius: "8px",
                boxShadow: "1px 4px 6px grey",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginBottom: "40px",
                padding: 16,
              }}
            >
              <Title>Contact us for more details</Title>
              <Form
                onFinish={handleMessage}
                layout="vertical"
                style={{ width: "70%" }}
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "please enter your name" },
                  ]}
                >
                  <Input placeholder="Enter your name" />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="emails"
                  rules={[
                    { required: true, message: "please enter your email" },
                  ]}
                >
                  <Input placeholder="Enter your email" />
                </Form.Item>
                <Form.Item
                  label="Message"
                  name="message"
                  rules={[
                    { required: true, message: "please enter your message" },
                  ]}
                >
                  <Input.TextArea placeholder="Enter your message" rows={4} />
                </Form.Item>
                <Button className="btn" htmlType="submit" type="primary">
                  Submit
                </Button>
              </Form>
            </div>
          </Content>
        
        </>
      ),
    },
    {
      key: "4",
      label: "Choosing Tutor",
      children: (
        <>
          <Content
            style={{
              height: "550px",
              width: "95%",
              border: "1px solid grey",
              borderRadius: "8px",
              boxShadow: "1px 4px 6px grey",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: 16,
            }}
          >
            <Title>
              Choosing a tutor is <span style={{ color: "blue" }}>simple</span>.
            </Title>
            <div
              style={{
                height: "450px",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 15,
              }}
            >
              <div
                style={{
                  height: "390px",
                  width: "25%",
                  borderRadius: "8px",
                  boxShadow: "0px 5px 9px grey",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: 16,
                }}
              >
                <EditOutlined
                  className="btn"
                  style={{ fontSize: "40px", borderRadius: "10px" }}
                />
                <Title level={3}>Get Started</Title>
                <Tag
                  className="btn"
                  icon={<ClockCircleOutlined />}
                  style={{ borderRadius: "10px", marginTop: "100px" }}
                >
                  it will take few Seconds
                </Tag>
              </div>
              <div
                style={{
                  height: "390px",
                  width: "25%",
                  borderRadius: "8px",
                  boxShadow: "0px 5px 9px grey",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: 16,
                }}
              >
                <SendOutlined
                  className="btn"
                  style={{ fontSize: "40px", borderRadius: "10px" }}
                />
                <Title level={3}>Create Request</Title>
                <Text strong>
                  Write what you want to learn so the relevant tutor(s) can
                  contact you within the platform. Your contact details remain
                  private at all times.
                </Text>
                <Tag
                  style={{ marginTop: "10px", borderRadius: "10px" }}
                  className="btn"
                  icon={<ClockCircleOutlined />}
                >
                  Takes 1 minte
                </Tag>
              </div>
              <div
                style={{
                  height: "390px",
                  width: "25%",
                  borderRadius: "8px",
                  boxShadow: "0px 5px 9px grey",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: 16,
                }}
              >
                <ContactsOutlined
                  className="btn"
                  style={{ fontSize: "40px", borderRadius: "10px" }}
                />
                <Title level={3}>Start Tuition</Title>
                <Text strong>
                  Pay your fee to start classes. Classes are auto-recorded for
                  transparency and are available on your dashboard. Payment is
                  calculated per hour.
                </Text>
                <Tag
                  style={{ borderRadius: "10px", marginTop: "10px" }}
                  icon={<CheckCircleOutlined />}
                  className="btn"
                >
                  Congratulation
                </Tag>
              </div>
            </div>
          </Content>
         
        </>
      ),
    },
    {
      key: "5",
      label: "Most Popular Courses",
    },
    {
      key: "6",
      label: "Most Popular Subjects",
    },
    {
      key: "7",
      label: "Comments and Reviews",
    },
    {
      key: "8",
      label: "Why choose web assistance?",
      children: (
        <>
          <Content className="momo8">
            <div className="momo81">
              <Title level={2}>why choose web assistance</Title>
              <Divider titlePlacement="left">Innovative Technology: </Divider>
              <Text strong>
                Use our fully online, tech-savvy platform with robust tools for
                learning and monitoring. Built-in virtual classroom, integrated
                chat room, AI courses for kids and more.
              </Text>
              <Divider titlePlacement="left">Personalized Learning:</Divider>
              <Text strong>
                Choose from a diverse, global tutor pool. Tutors tailor their
                methods to your child’s unique learning style.
              </Text>
              <Divider titlePlacement="left">Flexible Pricing:</Divider>
              <Text strong>
                Decide your fee according to your budget. No hidden charges. Try
                a demo class before you buy.
              </Text>
              <Divider titlePlacement="left">
                Excellent Customer Support:
              </Divider>
              <Text strong>
                Our team is always here to help you find the right tutors.
              </Text>
              <Divider titlePlacement="left">Safety:</Divider>
              <Text strong>
                Opt for our safe online classes and a seamless, secure payment
                system for your peace of mind.
              </Text>
            </div>
            <div className="momo82">
              <div className="bts">
                <div className="btnn">
                  <UserAddOutlined
                    className="btn"
                    style={{ fontSize: "40px", borderRadius: "8px" }}
                  />
                  <Title level={3}>Expert Tutors</Title>
                  <Text strong>
                    Find expert tutors specialising in the subject matter & well
                    versed with online teaching.
                  </Text>
                </div>
                <div className="btnnn">
                  <SolutionOutlined
                    style={{ fontSize: "40px", borderRadius: "8px" }}
                    className="btn"
                  />
                  <Title level={3}>Verified profiles</Title>
                  <Text strong>
                    We thoroughly check the educational credentials & teaching
                    experience of all tutors to get the best.
                  </Text>
                </div>
              </div>
              <div className="bte">
                <div className="btnns">
                  <ClockCircleFilled
                    className="btn"
                    style={{ fontSize: "40px", borderRadius: "8px" }}
                  />
                  <Title level={3}>Learn Anytime Anywhere</Title>
                  <Text strong>
                    With the freedom to choose the tuition time, you can learn
                    at any time & anywhere & get expert help when you need it.
                  </Text>
                </div>
                <div className="btnne">
                  <PoundCircleOutlined
                    style={{ fontSize: "40px", borderRadius: "8px" }}
                    className="btn"
                  />
                  <Title level={3}>Your Price</Title>
                  <Text strong>
                    Negotiate the price with your tutor that suits your budget.
                  </Text>
                </div>
              </div>
            </div>
          </Content>
         
        </>
      ),
    },
    {
      key: "9",
      label: "what sets our tutor Apart",
      children: (
        <>
          <Content className="momomo">
            <Title level={2}>
              We connect you with{" "}
              <span style={{ color: "blue" }}>
                the best tutors in Pakistan and beyond.
              </span>
            </Title>
            <div className="mpm">
              <div className="bbb">
                <Title level={3}>What sets our tutors apart?</Title>
                <Divider titlePlacement="left">
                  <ArrowRightOutlined
                    className="btn"
                    style={{ border: "1px solid black", borderRadius: "8px" }}
                  />{" "}
                  Experience & Qualifications:{" "}
                </Divider>
                <Text strong>
                  University graduates, verified credentials, experienced
                  educators.
                </Text>
                <Divider titlePlacement="left">
                  {" "}
                  <ArrowRightOutlined
                    className="btn"
                    style={{ border: "1px solid black", borderRadius: "8px" }}
                  />{" "}
                  Selection Process:{" "}
                </Divider>
                <Text strong>
                  {"   "} Not everyone can teach on Tutorbees.net now. There’s
                  an Assessment, an in-person review of each tutor application,
                  an automated onboarding course for tutors, and an in-person
                  verification for teaching in English language for our tutors.
                  We make your job of tutor-selection much easier for you!
                </Text>
                <Divider titlePlacement="left">
                  <ArrowRightOutlined
                    className="btn"
                    style={{ border: "1px solid black", borderRadius: "8px" }}
                  />{" "}
                  Personalized Experience:{" "}
                </Divider>
                <Text strong>
                  Tutors use tailored methods, they give one-on-one attention,
                  and they are flexible with their schedules and pricing.
                </Text>
                <Divider titlePlacement="left">
                  <ArrowRightOutlined
                    className="btn"
                    style={{ border: "1px solid black", borderRadius: "8px" }}
                  />{" "}
                  Customized Demo Class:{" "}
                </Divider>
                <Text strong>
                  Tutors will give you a demo class on your topic, if you share
                  it with them beforehand. Ask your questions in the live class
                  before you pay.
                </Text>
                <Divider titlePlacement="left">
                  <ArrowRightOutlined
                    className="btn"
                    style={{ border: "1px solid black", borderRadius: "8px" }}
                  />{" "}
                  Quality Assurance:{" "}
                </Divider>
                <Text strong>
                  We go the extra mile and do regular class audits, you can see
                  session recordings for transparency within the current billing
                  cycle.
                </Text>
                <Divider titlePlacement="left">
                  <ArrowRightOutlined
                    className="btn"
                    style={{ border: "1px solid black", borderRadius: "8px" }}
                  />{" "}
                  Diverse Pool:{" "}
                </Divider>
                <Text strong>
                  {" "}
                  Parents can use the same platform and the same process for all
                  tutoring needs of their children: academic classes, coding
                  classes, language classes etc.
                </Text>
              </div>
              <div className="bbbb">
                {" "}
                <img className="brbb" src="./images/A clean and modern t.png" />
              </div>
            </div>
          </Content>
         
        </>
      ),
    },
    {
      key: "10",
      label: "Hand Made Codes",
      children: (
        <>
          <Card
            style={{
              backgroundColor: "transparent",
              border: "1 px solid grey",
            }}
            title="Want Hand Maded code here are some examples "
          >
            <div className="body">
              <div className="container">
                <div className="sun"></div>
                <div className="earth">
                  <div className="moon"></div>
                </div>
              </div>
            </div>
            <br />
            <div className="banner">
              <div className="slider" style={{ "--quantity": 6 }}>
                <div style={{ "--position": 1 }} className="item">
                  <img
                    src="./images/anime-dragon-character-illustration (1).jpg"
                    alt="lolo"
                  />
                </div>
                <div style={{ "--position": 2 }} className="item">
                  {" "}
                  <img
                    src="./images/anime-dragon-character-illustration (2).jpg"
                    alt="lol"
                  />
                </div>
                <div style={{ "--position": 3 }} className="item">
                  <img
                    src="./images/anime-dragon-character-illustration.jpg"
                    alt="loo"
                  />
                </div>
                <div style={{ "--position": 4 }} className="item">
                  {" "}
                  <img
                    src="./images/anime-dragon-illustration (1).jpg"
                    alt="llo"
                  />
                </div>
                <div style={{ "--position": 5 }} className="item">
                  {" "}
                  <img
                    src="./images/anime-dragon-illustration (2).jpg"
                    alt="olo"
                  />
                </div>
                <div style={{ "--position": 6 }} className="item">
                  <img src="./images/anime-dragon-illustration.jpg" alt="lo" />
                </div>
              </div>
              <div className="contain">
                <h1 data-content="CSS only">CSS only</h1>
                <div className="modal"></div>
              </div>
            </div>
            <h1>
              You want hand made code visit our site <a>Hand Made Code.com</a>
            </h1>
          </Card>
         
        </>
      ),
    },
  ];

  // ✅ Role-based filtering
  let items = baseItems;

  if (user?.role === 1) {
    // Example: Admin should NOT see "Contact us"
    items = baseItems.filter((tab) => tab.key !== "3");
  }
  if (user?.role === 2) {
    items = baseItems.filter((tab) => tab.key !== "3");
  }

  if (user?.role === 3) {
    // Example: Student should ONLY see "Home" and "Contact us"
    items = baseItems.filter((tab) => tab.key !== "3");
  }

  return (
    <>
      <style>{`.btn {   
     cursor: pointer;   
   background: linear-gradient(45deg,
    #ff416c, #ff4b2b,
    #1e90ff, #32cd32, #ffcc00, #ff00ff,orange,lime);
   background-size: 400% 400%;
   animation: gradientMove 8s ease infinite;    
   transition: transform 0.2s ease, box-shadow 0.2s ease;      }

      .btn:hover {        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);  
                     }
         @keyframes gradientMove {   
           0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }   
        100% { background-position: 0% 50%; }       }  
        
                                                                      `}</style>

      <Tabs
        centered
        style={{ marginTop: "20px" }}
        defaultActiveKey="1"
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

export default Home;
