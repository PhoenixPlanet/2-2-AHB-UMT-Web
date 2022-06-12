import React from "react";
import styled from "styled-components"

const StyledButton = styled.div`
    all:unset;
    
	/* layout settings */
	display: flex;
	justify-content: center;
	align-items: center;
	
    width: 6rem;
    height: 2rem;
	
    padding: 0px;
    margin: 10px;
	
	/* font settings */
    font-size: 1.3rem;
    /* line-height: 1.2rem; */
	/* font-family: 'GmarketSansMedium'; */
	
	/* design */
	color: ${ props => props.style.color || "#41403E" };
    border: 2px solid ${ props => props.style.color || "#41403E" };
    border-radius: 0.7rem;
	/* color: rgba(var(--a), 1); */
    /* border: 2px solid rgba(var(--a), 1); */
    /* border-radius: 5px; */
	    
	/* animation */
    transition: background-color 0.3s ease, border-radius 0.3s ease;
	
	/* extra */
    cursor: pointer;

    &:hover {
        background-color: ${ props => props.style.color || "#41403E" };
        border-radius: 35px 225px;
        color: white;
    }
`

function Button({ children, style = {}, onClickEvent }) {
    function onClick() {
        onClickEvent();
    }

    return (
        <StyledButton onClick={onClick} style={style}>
            {children}
        </StyledButton>
    );
}

export default Button;