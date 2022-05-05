import React, { useState } from "react";
import { Button, Space} from "antd";
import SideNavLayout from './sideNavLayout';
import "../App.css"
import {MessageOutlined,
  QuestionCircleOutlined,
        ExportOutlined,
        CommentOutlined,
        SettingOutlined } from '@ant-design/icons';


const SideBar = (props) => {
  const [toggleNav,setToggleNav] = useState(false);
  const [buttonName, setButtonName] = useState('chat');
  const toggleClassName= () => {
    setToggleNav(!toggleNav);
  }
  return (
    <div >
      {props.setChild(toggleNav)}
      <div className="nav-button-group">
        <Button className="nav-button" shape="circle" size="large" icon={toggleNav?<ExportOutlined />:<MessageOutlined />} onClick={toggleClassName}/>
      </div>
      <div className={`side-bar ${toggleNav ? "visible" : "hidden"}`}>
        <Space className="sidebar-buttons">
         <Button shape="circle" size="large" onClick={()=>setButtonName('chat')} icon={<MessageOutlined />}></Button>
         <Button shape="circle" size="large" onClick={()=>setButtonName('quest')} icon={<QuestionCircleOutlined />}></Button>
         <Button shape="circle" size="large" onClick={()=>setButtonName('hand-rise')} icon={<CommentOutlined />}></Button>
         <Button shape="circle" size="large" onClick={()=>setButtonName('setting')} icon={<SettingOutlined />}></Button>
         </Space>
         <SideNavLayout buttonName={buttonName}/>
      </div>
    </div>
   );
};
export default SideBar;