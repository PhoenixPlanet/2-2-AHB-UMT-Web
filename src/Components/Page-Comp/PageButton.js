import React from "react";
import Styles from "./PageButton.module.css"

function PageButton(props) {
    return (
        <div className={Styles.Button}>
            {props.children}
        </div>
    );
}

export default PageButton;