import React from "react";
import HeaderTitleBar from "../UI/HeaderTitleBar";
import NavigationBar from "../UI/NavigationBar";
import Styles from "./Header.module.css"

function Header(props) {
	return (
		<header className={Styles.Header}>
			<HeaderTitleBar>
				2-2 AHB UMT
			</HeaderTitleBar>
			<NavigationBar>

			</NavigationBar>
		</header>
	);
}

export default Header;