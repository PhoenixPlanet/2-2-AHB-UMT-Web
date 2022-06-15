import React from "react";
import styled from "styled-components"

const StyledNavigationBar = styled.div`
	/* layout settings */
	display: flex;
	flex-flow: row wrap;
	justify-content: center;

    height: 60px;
	width: 100%;
	
	/* font settings */
	font-size: 1.5rem;
	
	/* design */
	/* background-color: rgba(var(--secondary-color), 1); */
	    
	/* animation */
	
	/* extra */
`

const StyledNavigationBarBorder = styled.div`
	/* layout settings */
	box-sizing: border-box;
	
	height: 100%;
	width: 100%;
	
	margin: 0 60px 0 60px;
	
	/* design */
    border-top: 1px solid rgba(0, 0, 0, 1);
	border-bottom: 1px solid rgba(0, 0, 0, 1);
` 

function NavigationBar(props) {
    return (
        <StyledNavigationBar>
            <StyledNavigationBarBorder>
			</StyledNavigationBarBorder>
        </StyledNavigationBar>
    );
}

export default NavigationBar;