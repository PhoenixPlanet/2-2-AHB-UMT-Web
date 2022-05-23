import React from "react";
import Styles from "./EditableTitle.module.css"

class EditableTitle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editable: false,
        };
    }

    render() {
        return (
            <div>
                <p contentEditable='true' className=""></p>
            </div>
        );
    } 
}

export default EditableTitle;