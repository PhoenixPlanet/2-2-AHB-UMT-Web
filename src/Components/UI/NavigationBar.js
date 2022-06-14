import React from "react";
import styled from "styled-components"

const StyledNavigationBar = styled.div`
	/* layout settings */
	display: flex;
	flex-flow: row wrap;
	justify-content: center;

    height: 60px;
	
	/* font settings */
	font-size: 1.5rem;
	
	/* design */
	/* background-color: rgba(var(--secondary-color), 1); */

    border-top: 1px solid rgba(0, 0, 0, 1);
	border-bottom: 1px solid rgba(0, 0, 0, 1);
	    
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