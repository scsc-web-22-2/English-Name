import React from "react";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import traffic from "../assets/icons/traffic_light.png";
import arrow from "../assets/icons/arrow_right.png";
import { useNavigate } from "react-router-dom";

function DetailTestForm({question, answer, json}) {
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const goToResult = () => {
    navigate(`/result/${id}`,{
      state: {id:id, json: json}
    });
  }
    return(
        <StyledDetailTestForm>
            <div className="questionWrap">
                <img src={traffic} alt="" />
                <span>{question}</span>
            </div>

            <ul className="answerWrap">
                <li>
                  <button className={answer[0].img === "9" ? "answer first br" : "answer first"} 
                  value={`${answer[0].img}`}
                  onClick={() => {
                    setId(answer[0].img);
                    }}>
                    <img src={require(`../assets/images/${answer[0].img}.jpg`)} alt=""/>
                    <span>{answer[0].answer}</span>
                  </button>
                </li>
                <li>
                  <button className={answer[1].img === "10" ? "answer second br" : "answer second"} 
                  value={`${answer[1].img}`}
                  onClick={() => {
                    setId(answer[1].img);
                    }}>
                    <img src={require(`../assets/images/${answer[1].img}.jpg`)} alt=""/>
                    <span>{answer[1].answer}</span>
                    </button>
                </li>
                <li>
                  <button className={answer[2].img === "11" ? "answer third br" : "answer third"} 
                  value={`${answer[2].img}`}
                  onClick={() => {
                    setId(answer[2].img);
                    }}>
                    <img src={require(`../assets/images/${answer[2].img}.jpg`)} alt=""/>
                    <span>{answer[2].answer}</span>
                  </button>
                </li>
                <li>
                  <button className={answer[3].img === "12" ? "answer fourth br" : "answer fourth"} 
                  value={`${answer[3].img}`}
                  onClick={() => {
                    setId(answer[3].img);
                    }}>
                    <img src={require(`../assets/images/${answer[3].img}.jpg`)} alt=""/>
                    <span>{answer[3].answer}</span>
                  </button>
                </li>
            </ul>    
            <button className={(id !== "") ? "finish": "inactive"} onClick={goToResult}>
                <span>결과 보러 가기</span><img src={arrow} alt="" />
            </button>
            
        </StyledDetailTestForm>
    )
};

export default DetailTestForm;

const StyledDetailTestForm = styled.div`
    & .inactive {
    display: none;
  }
    
    & div.questionWrap{
    position: absolute;
    width: 27rem;
    height: 13rem;
    left: 50%;
    transform: translate(-50%, 50%);
    top: 6rem;
    background: #ffffff;
    box-shadow: 0px 3px 5px rgba(152, 152, 152, 0.24);
    border-radius: 15px;
    text-align: center;
    color: ${(props) => props.theme.colors.Engblue3};
    font-size: 1.5rem;
    font-family: "Pretendard-SemiBold";
  }

  & div.questionWrap img {
    position: absolute;
    width: 29px;
    height: 7px;
    top: 1.4rem;
    left: 2rem;
  }

  & div.questionWrap span {
    position: absolute;
    left: 50%;
    top: 54%;
    height: fit-content;
    transform: translate(-50%, -50%);
    line-height: 2.5rem;
    width: 25rem;
  }

  & ul {
    display: flex;
    width: 30rem;
    height: 30rem;
    align-content: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 44rem;
    transform: translate(-50%, -50%);
  }
  & button.answer {
    width: 13rem;
    height: 17vh;
    margin: 0.5rem;
    background: #FFFFFF;
    box-shadow: 0px 3px 5px rgba(152, 152, 152, 0.24);
    border-radius: 15px;
    padding: 0;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  & button.answer.first, button.answer.second {
    margin-top: 0;
  }
 

  & button.answer img {
    width: 100%;
    border-radius: 15px;
    height: 100%;
    
   
  }
  & button.answer span {
    font-size: 1.3rem;
    font-family: "Pretendard-SemiBold";
    position: absolute;
    bottom: 0; 
    width: 100%;
    background-color: #FFFFFF;
    vertical-align: middle;
    height: 3rem;
    
    line-height: 3rem;
    border-radius: 0 0 15px 15px;
    z-index: 1;
    
  }

  & button.answer.br span {
    height: 4rem;
    line-height: 2rem;
  } 

  & button.answer.br.second span {
    line-height: 4rem;
  }

  & button.finish {
    position: absolute;
        width: 80.8vw;
        height: 16vw;
        max-width: 303px;
        max-height: 60px;
        left: 50%;
        top: 93vh;
        transform: translate(-50%, -50%);

        background-color: ${(props) => props.theme.colors.Engblue1};
        box-shadow: 0px 3px 8px 2px rgba(166, 221, 255, 0.63);
        border-radius: 30px;

  }

  & button.finish span {
    color: ${(props) => props.theme.colors.Engwhite};
        font-size: 1.5rem;
        font-family: 'Pretendard-SemiBold';
  }

  & button.finish img {
        position: absolute;
        width: 20px;
        height: 20px;
        left: 90%;
    }
`;