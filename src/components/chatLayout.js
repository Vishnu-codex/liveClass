import React, { useEffect, useState } from "react";
import '../App.css';
import { Button,Input} from "antd";
import { SendOutlined } from '@ant-design/icons';
import axios from "./axios";

function ChatLayout (props){

    const [messages, setMessage] = useState(["Demo message"]);
    //const dummy = useRef();
    const [Name , setName] = useState(() => "");

    useEffect(() => {
        setInterval(()=> {
            axios.get("/chats")
            .then((res) =>{
                setMessage(res.data);
                // dummy.current.scrollIntoView({ behavior: "smooth"});
            });
        }, 1000);
    },[]);

    const onSendMessage = async (e) => {
        e.preventDefault();
        await axios.post("/chats", {
            text:Name,
            meetingId: "id",
            senderId:"0"
        })
        .then((res) => {
            setName("");
        });
    };


    return(
        <div className="chat-body">
         <div className="chatBubble-body">{messages.map((data) => (
             <p className="chatBubble tri-right left-in" isYours={data.senderId === "0"}>
                 <p key={data.id} isYours={data.senderId === "0"}>
                    <h6>
                            {data.senderId === "0"
                            ? "(admin)"
                            :`(${data.senderId})`}
                        </h6> 
                        <h6>{data.dateTime}</h6>
                        <p>{data.text}</p>
                 </p>
             </p>
         ))}
            </div>
            <div className="chatInput">
            <Input type="text" placeholder="Type here" value={Name} onChange={(event) =>{
                setName(event.target.value)
            }} />
             <Button shape="circle" type="primary" size="large" onClick={onSendMessage} icon={<SendOutlined />} />
            </div>
     </div>
    )
}

export default ChatLayout;