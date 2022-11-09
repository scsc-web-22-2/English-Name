import React, { useState } from 'react';
import styled from 'styled-components';
import arrow from '../assets/icons/arrow_right.png';
import QuestionForm from '../components/questionForm';


function Test() {
  const [num, setnum] = useState(1);
  const incrementNum = () => {
    setnum(prev => prev + 1 );
  };
  
    return(
        <StyledTest>
        <h2>왓욜넴</h2>
        
        <div className={num === 1 ? "topQuestion" : "topQuestion inactive"}>
          <QuestionForm question='질문1' name='q1' />
        </div>
        <div className={num === 1 ? "bottomQuestion" : "bottomQuestion inactive"}>
          <QuestionForm question='질문2' name='q2'/>
        </div>
        <div className={num === 2 ? "topQuestion" : "topQuestion inactive"}>
          <QuestionForm question='질문3' name='q3' />
        </div>
        <div className={num === 2 ? "bottomQuestion" : "bottomQuestion inactive"}>
          <QuestionForm question='질문4' name='q4'/>
        </div>
        <div className={num === 3 ? "topQuestion" : "topQuestion inactive"}>
          <QuestionForm question='질문5' name='q5' />
        </div>
        <div className={num === 3 ? "bottomQuestion" : "bottomQuestion inactive"}>
          <QuestionForm question='질문6' name='q6'/>
        </div>
        <button type={num === 4 ? "submit" : "button"} onClick={incrementNum} form='category'>
          <span>다음으로</span>
          <img src={arrow} alt="" />
        </button>
      </StyledTest>
    );
}

export default Test;

const StyledTest = styled.div`
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

& .inactive{
  display: none;
}
& .topQuestion {
  position: absolute;
  top: 12vh;
}

  & .bottomQuestion {
    position: absolute;
    top: 48vh;
  }

  & button[type="button"] {
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

& button[type="button"] span {
    color: ${(props) => props.theme.colors.Engwhite};
    font-size: 1.5rem;
    font-family: 'Pretendard-SemiBold';
    
}


& button[type="button"] img {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 82%;
}

& button[type="submit"] {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}


`;
