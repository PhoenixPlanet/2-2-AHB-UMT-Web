import React from "react";
import Styles from "./HeaderTitleBar.module.css"

function HeaderTitleBar(props) {
    return (
        <div className={Styles.HeaderTitleBarDiv}>
            <p className={Styles.HeaderTitleBar}>
                {props.children}
            </p>
        </div>
    );
}

export default HeaderTitleBar;