import React from "react";
import styled from "styled-components";

function ProgressBar({progress}){
    return(
        <StyledContainerBar>
            <StyledProgressBar width={Math.round(progress/8*100) + "%"}/>
        </StyledContainerBar>
    )
};

export default ProgressBar;

const StyledContainerBar = styled.div`
    background-color: ${(props) => props.theme.colors.Enggray1};
    width: 24rem;
    height: 0.6rem;
    border-radius: 10px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 7rem;
`;

const StyledProgressBar = styled.div`
    background-color: ${(props) => props.theme.colors.Engblue3};
    width: ${props => props.width};
    height: 100%;
    transition: width 1s;
    border-radius: 10px;
    text-align: left;
`;