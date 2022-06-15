import React from "react";
import HeaderTitleBar from "../UI/HeaderTitleBar";
import NavigationBar from "../UI/NavigationBar";
import styled from "styled-components";

const StyledHeader = styled.header`
	/* layout settings */
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;

	width: 100%;
	height: fit-content;
	
	/* font settings */
	
	/* design */
	/* background-color: rgba(var(--primary-color), 1); */
	    
	/* animation */
	
	/* extra */
`

function Header(props) {
	return (
		<StyledHeader>
			<HeaderTitleBar>
				2-2 AHB UMT
			</HeaderTitleBar>
			<NavigationBar>

			</NavigationBar>
		</StyledHeader>
	);
}

export default Header;