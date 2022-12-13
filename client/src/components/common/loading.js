import React from "react";
import styled, {keyframes} from "styled-components";

function Loading () {
    return(
        <StyledLoading>
            <h2>왓욜넴</h2>
            <div className="animation">
                <span id="first"></span>
                <span id="second"></span>
                <span id="third"></span>
            </div>
            <h2 className="context">로딩중</h2>
        </StyledLoading>
    )
};

export default Loading;

const shade1 = keyframes`
    0%{background-color: rgba(255, 175, 137, 0.25);}
    20%{background-color: rgba(255, 175, 137, 1);}
    40%{background-color: rgba(255, 175, 137, 0.25);}
    60%{background-color: rgba(255, 175, 137, 0.25);}
    80%{background-color: rgba(255, 175, 137, 0.25);}
    100%{background-color: rgba(255, 175, 137, 0.25);}
`;
const shade2 = keyframes`
    0%{background-color: rgba(255, 221, 103, 0.25);}
    20%{background-color: rgba(255, 221, 103, 0.25);}
    40%{background-color: rgba(255, 221, 103, 1);}
    60%{background-color: rgba(255, 221, 103, 0.25);}
    80%{background-color: rgba(255, 221, 103, 0.25);}
    100%{background-color: rgba(255, 221, 103, 0.25);}
`;
const shade3 = keyframes`
    0%{background-color: rgba(143, 228, 151, 0.25);}
    20%{background-color: rgba(143, 228, 151, 0.25);}
    40%{background-color: rgba(143, 228, 151, 0.25);}
    60%{background-color: rgba(143, 228, 151, 1);}
    80%{background-color: rgba(143, 228, 151, 0.25);}
    100%{background-color: rgba(143, 228, 151, 0.25);}
`;

const StyledLoading = styled.div`
 h2 {
    font-family: 'Pretendard-ExtraBold';
    color: ${(props) => props.theme.colors.Engblue3};
    font-size: 1.5rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 4rem;
    text-align: center;
    }
& h2.context {
    font-family: 'Pretendard-ExtraBold';
    color: ${(props) => props.theme.colors.Engblue3};
    font-size: 1.5rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    text-align: center;
}

& .animation{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top:45%;
    width: 4.8rem;
}

& span {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
}

& span#first{
    background-color: ${(props) => props.theme.colors.Engpink};
    animation-name: ${shade1};
    animation-duration: 3s;
    animation-delay: 0;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
& span#second{
    background-color: ${(props) => props.theme.colors.Engyellow};
    animation-name: ${shade2};
    animation-duration: 3s;
    animation-delay: 0s;
    animation-iteration-count: infinite;
}
& span#third{
    background-color: ${(props) => props.theme.colors.Enggreen};
    animation-name: ${shade3};
    animation-duration: 3s;
    animation-delay: 0s;
    animation-iteration-count: infinite;
}

`;