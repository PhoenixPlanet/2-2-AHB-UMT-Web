import React from "react";
import styled from "styled-components"

const StyledHeaderTitle = styled.p`
	/* layout settings */
	margin: 0px 10px;

	/* font settings */
	font-size: 20px;

	/* design */
	color: white;
    background-color: rgba(var(--primary-color), 1);
	    
	/* animation */
	
	/* extra */
`

const StyledHeaderTitleBar = styled.div`
	/* layout settings */
	display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

	height: 60px;
	
	/* font settings */
	font-size: 20px;

	/* design */
	color: white;
    background-color: rgba(var(--primary-color), 1);
	    
	/* animation */
	
	/* extra */
`

function HeaderTitleBar(props) {
    return (
        <StyledHeaderTitleBar>
            <StyledHeaderTitle>
                {props.children}
            </StyledHeaderTitle>
        </StyledHeaderTitleBar>
    );
}

export default HeaderTitleBar;