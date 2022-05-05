import React, {useState} from "react";
import "../App.css";
import OnlineStudents from "./onlineStudents";
import  "./videoClass";
import {Button,
        Space,
        Badge} from 'antd';
import {AudioOutlined,
    VideoCameraOutlined,
    ArrowUpOutlined,
    DesktopOutlined ,
    EllipsisOutlined,
    TeamOutlined  } from '@ant-design/icons';

function FooterLayout(props) {

  const[toggleList, setToggleList] = useState(false);
  const toggleListName = () =>{
      setToggleList(!toggleList)
}

  return (
    <div className="grid-footer">
      <Space className="button-array">
        <Button shape="circle" size="large" icon={<AudioOutlined />} />
        <Button shape="circle" size="large" icon={<VideoCameraOutlined />} />
        <Button shape="circle" size="large" icon={<ArrowUpOutlined />} />
        <Button shape="circle" size="large" icon={<EllipsisOutlined />} />
        <Button shape="circle" size="large" icon={<DesktopOutlined />} />
      </Space>
      <Space className={`${props.smallLayout ? "live-center-button" : "button-live"}`}>
        <Button shape="circle" size="large" icon={toggleList?<TeamOutlined />:<Badge count={1}><TeamOutlined /></Badge>} onClick={toggleListName}/>
        <OnlineStudents />
      </Space>
    </div>
  );
}

export default FooterLayout;