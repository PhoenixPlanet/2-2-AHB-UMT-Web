import React from "react";
import Button from "../UI/Button";
import Styles from "./PageButton.module.css"

function PageButton(props) {
    return (
        <Button className={Styles.PageButton}>
            <div>
                Hello
            </div>
            <div>
                119
            </div>
        </Button>
    );
}

export default PageButton;