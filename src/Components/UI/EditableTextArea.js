import React from "react";
//import Styles from "./EditableTextArea.module.css"

class EditableTextArea extends React.Component {
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