import React from "react";
import Styles from "./InfoCard.module.css"

import Card from "../UI/Card";

function InfoCard(props) {
	
    return (
        <Card cardLayout={Styles.InfoCard}>
			<img className={Styles.Image} src="image/k16umt.jpg" alt="K16 UMT"/>
			<div className={Styles.Title}>2-2 UMT</div>
			<div className={Styles.Info}></div>
			<div className={Styles.Actions}></div>
		</Card>
    );
}

export default InfoCard;