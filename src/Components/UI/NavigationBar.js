import React from "react";
import styled from "styled-components"

const StyledNavigationBar = styled.div`
	/* layout settings */
	display: flex;
	flex-flow: row wrap;
	justify-content: center;

    height: 40px;
	
	/* font settings */
	font-size: 1.5rem;
	
	/* design */
	background-color: rgba(var(--secondary-color), 1);

    border-top: 1px solid rgba(255, 255, 255, 0.3);
	    
	/* animation */
	
	/* extra */
`

function NavigationBar(props) {
    return (
        <StyledNavigationBar>
            
        </StyledNavigationBar>
    );
}

export default NavigationBar;