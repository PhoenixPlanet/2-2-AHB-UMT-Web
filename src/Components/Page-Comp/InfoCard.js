import React from "react";
import Styles from "./InfoCard.module.css"
import styled, { css } from "styled-components"

import Card from "../UI/Card";
import Button from "../UI/Button"
import Gap from "../UI/Gap";

import { IoCall } from "react-icons/io5"

const InfoCardLayout = css`
	/* layout settings */
	display: grid;
	grid-template-rows: 150px minmax(50px, auto) minmax(130px, auto) minmax(40px, auto);
	overflow: hidden;
`

function InfoCard(props) {
    return (
        <Card cardLayout={InfoCardLayout}>
			<img className={Styles.Image} src="image/k16umt.jpg" alt="K16 UMT"/>
			<div className={Styles.Title}>{props.title}</div>
			<div className={Styles.Info}>
				{props.content}
			</div>
			<div className={Styles.Actions}>
				<Button>
					<IoCall></IoCall>
				</Button>
			</div>
		</Card>
    );
}

export default InfoCard;