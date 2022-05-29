import React from "react";
import Styles from "./Button.module.css"

function Button(props) {
    return (
        <div className={Styles.Button}>
            {props.children}
        </div>
    );
}

export default Button;