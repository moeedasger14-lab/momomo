import { Affix, Card, Layout, Typography } from "antd";
import React from "react";
import "./footer.css";
import Link from "antd/es/typography/Link";
const { Footer } = Layout;
const { Text, Title } = Typography;
const Footercomponent = () => {
  return (
    <>
     
      <Footer className="bbss">
           <Title style={{color:"white"}}>Made With <span>❤️</span> By Community</Title>
        <div className="bbsc">
           
            <div className="b">
                <Title   style={{color:"white",fontFamily:"math"}} level={3}>Resources</Title>
                <Link href="https://4x.ant.design/components/overview/" style={{color:"white",fontFamily:"math"}}>AntD Button</Link>
                <Link href="https://4x.ant.design/components/card/" style={{color:"white",fontFamily:"math"}}>AntD Card</Link>
                <Link href="https://4x.ant.design/components/layout/" style={{color:"white",fontFamily:"math"}}>AntD Layout</Link>
                <Link href="https://4x.ant.design/components/typography/" style={{color:"white",fontFamily:"math"}}>AntD Typography</Link>
                <Link href="https://4x.ant.design/components/affix/" style={{color:"white",fontFamily:"math"}}>AntD Affix</Link>
                <Link href="https://4x.ant.design/components/modal/" style={{color:"white",fontFamily:"math"}}>AntD Modal</Link>
                <Link href="https://4x.ant.design/components/icon/" style={{color:"white",fontFamily:"math"}}>AntD Icon</Link>
                <Link href="https://4x.ant.design/components/tabs/" style={{color:"white",fontFamily:"math"}}>AntD Tabs</Link>
                <Link href="https://4x.ant.design/components/table/" style={{color:"white",fontFamily:"math"}}>Antd Tables</Link> 
                <Link href="https://4x.ant.design/components/tag/" style={{color:"white",fontFamily:"math"}}>AntD Tags</Link>
                <Link href="https://4x.ant.design/components/input/" style={{color:"white",fontFamily:"math"}}>AntD Inputs</Link>
                  <Link href="https://4x.ant.design/components/form/" style={{color:"white",fontFamily:"math"}}>AntD Forms</Link>
                    <Link href="https://4x.ant.design/components/select/" style={{color:"white",fontFamily:"math"}}>AntD Select</Link>
                      <Link href="https://4x.ant.design/components/message/" style={{color:"white",fontFamily:"math"}}>AntD Message</Link>
                        <Link href="https://4x.ant.design/components/comment/" style={{color:"white",fontFamily:"math"}}>Antd Comment</Link>
                <Link href="https://reactrouter.com/en/main" style={{color:"white",fontFamily:"math"}}>React Router Dom</Link>
              
            </div>
            <div className="b">
              <Title style={{color:"white",fontFamily:"math"}} level={3}>Community</Title>
              <Link style={{color:"white",fontFamily:"math"}}>Web Assistance</Link>
              <Link style={{color:"white",fontFamily:"math"}}>Ant Design</Link>
              <Link style={{color:"white",fontFamily:"math"}}>Ant Design Pro Components</Link>
              <Link style={{color:"white",fontFamily:"math"}}>Ant Motion</Link>
              <Link style={{color:"white",fontFamily:"math",marginBottom:"220px"}}>Ant Visualization</Link>


            </div>
            <div className="b">
              <Title style={{color:"white",fontFamily:"math"}} level={3}>Help</Title>
              <Link style={{color:"white",fontFamily:"math"}}>GitHub</Link>
              <Link style={{color:"white",fontFamily:"math"}}>Co Pilot</Link>
              <Link style={{color:"white",fontFamily:"math"}}>StackFlow</Link>
              <Link style={{color:"white",fontFamily:"math"}}>Discord</Link>
              <Link style={{color:"white",fontFamily:"math",marginBottom:"190px"}}>Web Assistance <br/> Community</Link>
            </div>
            <div className="b">
              <Title style={{color:"white",fontFamily:"math"}} level={3}>Product Used</Title>
                <Link href="https://4x.ant.design/components/" style={{color:"white",fontFamily:"math"}}>Ant Design</Link>
                <Link href="https://4x.ant.design/components/pro-components/" style={{color:"white",fontFamily:"math"}}>Ant Design Pro Components</Link>
                <Link href="https://4x.ant.design/components/motion/" style={{color:"white",fontFamily:"math"}}>Ant Motion</Link>
                <Link href="https://4x.ant.design/components/visualization/" style={{color:"white",fontFamily:"math"}}>Ant Visualization</Link>
                <Link href="https://reactrouter.com/en/main" style={{color:"white",fontFamily:"math",marginBottom:"190px"}}>React Router Dom</Link>
            </div>
           
        </div>
         <div className="bbsss">
        <Title level={3}>
          All Right's are Reserved by Web Assistance{" "}
          <img
            src="/images/OIP (5).webp"
            alt="logo"
            style={{
              height: "35px",
              width: "35px",
              borderRadius: "50%",
              marginLeft: "5px",
            }}
          />
        </Title>
      </div>
      </Footer>
    </>
  );
};

export default Footercomponent;
