import React from "react";
import HeaderText from "../UI/HeaderText";
import Styles from "./Header.module.css"

function Header(props) {
	return (
		<header className={Styles.Header}>
			<HeaderText>
				hello
			</HeaderText>
		</header>
	);
}

export default Header;