import React from "react";
import Styles from "./InfoCard.module.css"
import styled, { css } from "styled-components"

import Card from "../UI/Card";
import Button from "../UI/Button"

const InfoCardLayout = css`
	/* layout settings */
	display: grid;
	grid-template-rows: 150px minmax(50px, auto) minmax(150px, auto) minmax(40px, auto);
	overflow: hidden;
`

const Gap = styled.br`
	display: block;
	margin-top: 5px;
	content: " ";
`

function InfoCard(props) {
    return (
        <Card cardLayout={InfoCardLayout}>
			<img className={Styles.Image} src="image/k16umt.jpg" alt="K16 UMT"/>
			<div className={Styles.Title}>2-2 UMT</div>
			<div className={Styles.Info}>
				2-2 Unit Ministry team
				<Gap/>
				<b>Office Call(DSN)</b> 
				<br/>
				722-8508
				<Gap/>
				<b>Office Call(Comm)</b>
				<br/>
				0503-322-8508
			</div>
			<div className={Styles.Actions}>
				<Button>
					Call
				</Button>
			</div>
		</Card>
    );
}

export default InfoCard;