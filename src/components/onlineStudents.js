import React from "react";
import '../App.css';
import './footLayout';

function OnlineStudents (props) {

    return(
        <div>
        <div className={`onlinePop ${props.toggleList ? "pop" : "hide"}`}>
            <p>Student 1</p>
        </div> 
        </div>
    )
}

export default OnlineStudents;