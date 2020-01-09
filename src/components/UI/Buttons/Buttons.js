import React from 'react';
import './Button.css'

const Buttons = (props) => {
    return (
        <div onClick={props.onclick} className="boxBtn">{props.children}</div>
    )
};

export default Buttons;