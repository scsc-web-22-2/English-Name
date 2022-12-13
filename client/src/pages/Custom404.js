import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Custom404() {
    return(
        <Styled404>
            <h2 className="title">왓욜넴</h2>
            <div className="icons">
                <span id="first">4</span>
                <span id="second">0</span>
                <span id="third">4</span>
            </div>
            <StyledText>
            죄송합니다.<br/>
            페이지를 찾지 못했어요.
            <br/>
            url를 확인해주세요!
            </StyledText>
            <Link to="/">
        
                <button type="button">
                    <span>처음 화면으로</span>
                </button>
            
            </Link>
            
        </Styled404>
    );
}
export default Custom404;



const Styled404 = styled.div`


     h2.title {
    font-family: 'Pretendard-ExtraBold';
    color: ${(props) => props.theme.colors.Engblue3};
    font-size: 1.5rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 4rem;
    text-align: center;
    }

& .icons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 45%;
}

& span {
    font-size: 2rem;
    font-weight: 700;
}

& span#first{
    color: ${(props) => props.theme.colors.Engpink};
;
}
& span#second{
    color: ${(props) => props.theme.colors.Engyellow};

}
& span#third{
    color: ${(props) => props.theme.colors.Enggreen};
}

& button {
    position: absolute;
    width: 16.8rem;
    height: 10rem;
    max-width: 303px;
    max-height: 60px;
    left: 50%;
    top: 93vh;
    transform: translate(-50%, -50%);

    background-color: ${(props) => props.theme.colors.Engblue1};
    box-shadow: 0px 3px 8px 2px rgba(166, 221, 255, 0.63);
    border-radius: 30px;
  }

  & button span {
    color: ${(props) => props.theme.colors.Engwhite};
    font-size: 1.5rem;
    font-family: "Pretendard-SemiBold";
  }
`;

const StyledText = styled.h2`
font-family: 'Pretendard-ExtraBold';
    color: ${(props) => props.theme.colors.Engblue3};
    font-size: 1.5rem;
position: absolute;
width: 100%;
left: 50%;
transform: translate(-50%, -50%);
top: 50%;
text-align: center;
line-height: 2rem;
margin-top: 2rem;
`