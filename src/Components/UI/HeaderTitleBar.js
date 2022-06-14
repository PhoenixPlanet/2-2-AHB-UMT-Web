import React from "react";
import styled from "styled-components"

const StyledHeaderTitleBar = styled.div`
	/* layout settings */
	display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

	height: var(--header-size);
	
	/* font settings */

	/* design */
	    
	/* animation */
	
	/* extra */
`

const StyledHeaderTitle = styled.p`
	all: unset;
	
	/* layout settings */
	display: block;
	margin-left: 5px;

	/* font settings */
	font-size: 30px;
	font-family: "BMDOHYEON";

	/* design */
	color: black;
    /* background-color: rgba(var(--primary-color), 1); */
	    
	/* animation */
	
	/* extra */
`

const StyledLogoDiv = styled.div`
	width: var(--header-logo-size);
  	height: var(--header-logo-size);
	padding-top: var(--header-logo-padding);
	padding-bottom: var(--header-logo-padding);

	background-image: ${ props => props.img || "url('image/chapel_logo.png')" };
  	background-size: contain;
  	background-position: center;
  	background-repeat: no-repeat;
	background-origin: content-box;
`

function HeaderTitleBar(props) {
    return (
        <StyledHeaderTitleBar>
			<StyledLogoDiv/>
            <StyledHeaderTitle>
                {props.children}
            </StyledHeaderTitle>
        </StyledHeaderTitleBar>
    );
}

export default HeaderTitleBar;