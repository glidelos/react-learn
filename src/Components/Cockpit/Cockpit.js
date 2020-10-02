import React from "react";

const cockpit = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>This is my react lesson!</p>
            <button
                onClick={props.clicked} >
                {props.text}
            </button>
        </div>
    );
};

export default cockpit;