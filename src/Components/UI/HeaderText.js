import React from "react";
import Styles from "./HeaderText.module.css"

function HeaderText(props) {
    return (
        <div className={Styles.HeaderTextDiv}>
            <p className={Styles.HeaderText}>
                {props.children}
            </p>
        </div>
    );
}

export default HeaderText;