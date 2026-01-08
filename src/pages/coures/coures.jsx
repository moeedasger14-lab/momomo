import Title from 'antd/es/typography/Title';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Affix, Button} from 'antd';
    import { formatCounter } from 'antd/es/statistic/utils';
import Link from 'antd/es/typography/Link';
const Coures = () => {
    const navigate= useNavigate();
  return (
   <div style={{
    width:"100%",
    height:"auto",
    border:"1px solid grey",
    borderRadius:"8px",
    backgroundColor:"black",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    boxShadow:"1px 4px 5px lightgrey",
   }}>
     <Affix offsetTop={5}>
            <Button style={{ background: "linear-gradient(to right, #1890ff, #52c41a)", /* two colors */
      border:" 2px solid #1890ff",
      color: "white",
     marginLeft:"1100px",
      marginTop:"30px"
    }} variant="outlined" onClick={() => navigate("/home")}>Lets go Back</Button>
    </Affix>
<Title style={{color:"white",fontFamily:"serif"}} level={3}>Here are Catogrized Courses you want to learn.</Title>
<div style={{
    width:"100%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
   
}}>
    <Title
     level={3}
          style={{
            background:
              "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
            fontFamily: "serif",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          marginLeft:"60px"
          }}
    >Web Development Courses:</Title>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Front End</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Back End</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Full Stack</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Mobile Development</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Database Management</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>DevOps</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>UI/UX Design</Link>
   <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Web Security</Link>
   <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Web Accessibility</Link>

   <Title
     level={3}
          style={{
            background:
              "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
            fontFamily: "serif",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          marginLeft:"60px"
          }}
    >Data Protection Courses:</Title>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Cybersecurity</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Data Privacy</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Compliance</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Risk Management</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Incident Response</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Threat Intelligence</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Digital Forensics</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Network Security</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Cloud Security</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Security Architecture</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Security Operations</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Security Engineering</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Security Testing</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Security Auditing</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Security Compliance</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Security Monitoring</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Security Incident Management</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Security Policy Development</Link>
<Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>BlockChain</Link>
     <Title
     level={3}
          style={{
            background:
              "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
            fontFamily: "serif",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          marginLeft:"60px"
          }}
    >AI Based Courses:</Title>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Machine Learning</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Deep Learning</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Natural Language Processing</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Computer Vision</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Robotics</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Data Science</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Data Analysis</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Data Visualization</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Predictive Analytics</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Statistical Analysis</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Time Series Analysis</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>Regression Analysis</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Classification Analysis</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Neural Networks</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Reinforcement Learning</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Supervised Learning</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Unsupervised Learning</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Transfer Learning</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Feature Engineering</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Model Evaluation</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Model Selection</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Hyperparameter Tuning</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Ensemble Methods</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Dimensional Analysis</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Big Data Analysis</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Data Mining</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Data Wrangling</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft:"30px"}}>BlockChain</Link>
     <Title
     level={3}
          style={{
            background:
              "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
            fontFamily: "serif",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          marginLeft:"60px"
          }}
    >Code Language  Courses:</Title>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Python</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Java</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>JavaScript</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>C++</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>C#</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Go</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Rust</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Swift</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Kotlin</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Ruby</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>PHP</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>TypeScript</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>SQL</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>HTML</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>CSS</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>GraphQL</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Docker</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Kubernetes</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>TailWind CSS</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Extended JavaScript</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>React</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Vue.js</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Angular</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Node.js</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>MongoDB</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>PostgreSQL</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>MySQL</Link>
    <Link style={{color:"white",fontFamily:"serif",marginLeft: "30px"}}>Redis</Link>
    </div>

   </div>
  )
}

export default Coures;