import React from "react";
import { useNavigate } from "react-router-dom";
import "./subjects.css";
import Title from "antd/es/typography/Title";
import Link from "antd/es/typography/Link";
import { Affix, Button } from "antd";
const Subject = () => {
  const navigate = useNavigate();
  return (
    <div className="bd">
        <Affix offsetTop={5}>
        <Button style={{ background: "linear-gradient(to right, #1890ff, #52c41a)", /* two colors */
  border:" 2px solid #1890ff",
  color: "white",
 marginLeft:"1100px",
  marginTop:"30px"
}} variant="outlined" onClick={() => navigate("/home")}>Lets go Back</Button>
</Affix>
      <Title style={{ color: "white", fontFamily: "serif" }} level={3}>
        Here You Can Choose what Subject or Language you want to learn.
      </Title>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",marginRight:"1000px"}}>
        <Title
          level={3}
          style={{
            background:
              "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
            fontFamily: "serif",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginLeft:"30px"
          }}
        >
          Subjects
        </Title>
     <Link style={{ color: "white", fontFamily: "serif" }}>English</Link>
     <Link style={{ color: "white", fontFamily: "serif" }}>Mathematics</Link>
     <Link style={{ color: "white", fontFamily: "serif" }}>Science</Link>
     <Link style={{ color: "white", fontFamily: "serif" }}>Social Studies</Link>
     <Link style={{ color: "white", fontFamily: "serif" }}>History</Link>
     <Link style={{ color: "white", fontFamily: "serif" }}>Geography</Link>
     <Link style={{ color: "white", fontFamily: "serif" }}>Physics</Link>
     <Link style={{ color: "white", fontFamily: "serif" }}>Chemistry</Link>
     <Link style={{ color: "white", fontFamily: "serif" }}>Biology</Link>
     <Link style={{ color: "white", fontFamily: "serif" }}>Computer Science</Link>

      </div>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",marginRight:"1000px"}}>
         <Title
          level={3}
          style={{
            background:
              "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
            fontFamily: "serif",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginLeft:"30px"
          }}
        >
          Languages
        </Title>
        <Link style={{ color: "white", fontFamily: "serif" }}>English</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>Hindi</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>French</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>Spanish</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>German</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>Japanese</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>Urdu</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>Arabic</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>Chinese</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>Korean</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>Russian</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>Turkish</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>Punjabi</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>Portuguese</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>Italian</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>Dutch</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>Swedish</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>Norwegian</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>Finnish</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>Pathani</Link>
        <Link style={{ color: "white", fontFamily: "serif" }}>English(UK)</Link>
       
        </div>
    </div>
  );
};

export default Subject;
