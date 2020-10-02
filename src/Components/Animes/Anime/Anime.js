import React from "react";

const anime = (props)=>{
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} of: <span><b>{props.anime}</b></span></p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
}

export default anime;