import React from "react";
import '../App.css';

function VideoClass (props){

    return(
        <div  className={`${props.smallLayout ? "small-vid" : "videoLayout"}`}>
            <h1>Demo</h1>
        </div>
    )
}

export default VideoClass;