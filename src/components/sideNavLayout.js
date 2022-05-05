import React from "react";
import '../App.css';
import ChatLayout from './chatLayout';
import QuestionLayout from './questionLayout'
import Handrise from "./handrise";
import FaculitySettings from "./settings";

function SideNavLayout (props){
    return(
     <div>
        {(() => {
        switch (props.buttonName) {
          case 'chat':
            return <ChatLayout />
          case 'quest':
            return <QuestionLayout />
          case 'hand-rise':
            return <Handrise/>
          case 'setting':
            return <FaculitySettings />
          default:
            return null
        }
      })()}
     </div>
    )
}

export default SideNavLayout;