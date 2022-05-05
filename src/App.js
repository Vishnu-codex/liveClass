import React, { useState } from "react";
import "./App.css";
import SideBar from "./components/sidebar";
import VideoClass from "./components/videoClass";
import FooterLayout from "./components/footLayout";
import { Row, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function App() {
  const [child, setChild] = useState(false);
  // useEffect(()=> {
    
  // },[child]);
  // const toggleClass = () => {

  // }
  return (
    <div className="App">
      <Row className="grid-header">
        <Col span={10} className="container">
          <div className="avatar-grid">
            <Avatar shape="square" size={64} icon={<UserOutlined />} />
            </div>
            <div className="title-grid">
            <h3>Course Title</h3>
            <p>Video title</p>
          </div>
        </Col>
        <Col span={10} className="container">
        <div className="avatar-grid">
          <Avatar shape="circle" size={64} icon={<UserOutlined />} />
          </div>
          <div className="title-grid">
          <h3>Faculty Name</h3>
          <p>Watch Time</p>
          </div>
        </Col>
        <Col span={4}>
          <SideBar setChild={setChild} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <VideoClass smallLayout={child}/>
        </Col>
      </Row>
      <Row>
        <Col span={child? 20: 24}>
          <FooterLayout smallLayout={child}/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
