import React from "react";
import Styles from "./Card.module.css"

function Card({children, cardLayout, cardStyle}) {
    return (
        <div className={`${Styles.Card} ${cardLayout}`}>
            {children}
        </div>
    );
}

export default Card;