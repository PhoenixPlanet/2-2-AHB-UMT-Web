import React from "react";
import styled from "styled-components"

const StyledCard = styled.div`
    /* layout settings */
    display: grid;

    width: 250px;
    min-height: 350px;

    margin: 20px;

    ${(props) => props.cardLayout};

    /* font settings */
    word-wrap: break-word;

    /* design */
    background-color: white;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2), 0.5px 0 5px rgba(0, 0, 0, 0.1);

    border-radius: 10px;
        
    /* animation */
    transition: box-shadow 0.2s ease;

    /* extra */
    &:hover {
        box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2), 0.5px 0 5px rgba(0, 0, 0, 0.1);
    }
`;

function Card({children, cardLayout, ...cardStyle}) {
    return (
        <StyledCard cardLayout={cardLayout} cardStyle={cardStyle}>
            {children}
        </StyledCard>   
    );
}

export default Card;