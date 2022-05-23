import React from "react";
import Styles from "./Button.module.css"

class Button extends React.Component {
    render() {
        return (
            <div className={Styles.Button}>
                {this.props.children}
            </div>
        );
    } 
}

export default Button;