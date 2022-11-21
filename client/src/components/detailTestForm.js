import React from "react";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import traffic from "../assets/icons/traffic_light.png";
import arrow from "../assets/icons/arrow_right.png";

function DetailTestForm({question, answer}) {

    return(
        <StyledDetailTestForm>
            <div className="questionWrap">
                <img src={traffic} alt="" />
                <span>{question}</span>
            </div>

                <ul className="answerWrap">
                    <li className="first"></li>
                    <li className="second"></li>
                    <li className="third"></li>
                    <li className="fourth"></li>
                </ul>    
            
            
        </StyledDetailTestForm>
    )
};

export default DetailTestForm;

const StyledDetailTestForm = styled.div`
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
  & li {
    width: 13rem;
    height: 17vh;
    margin: 0.5rem;
    background: #FFFFFF;
    box-shadow: 0px 3px 5px rgba(152, 152, 152, 0.24);
    border-radius: 15px;
  }

  & li.first {
    margin-top: 0;
  }
  & li.second {
    margin-top: 0;
  }
`;