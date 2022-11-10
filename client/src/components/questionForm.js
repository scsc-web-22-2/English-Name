import React, { useState } from "react";
import styled from "styled-components";
import traffic from "../assets/icons/traffic_light.png";
import check from "../assets/icons/check.png";

function QuestionForm({ question, name, setIsChecked }) {
  const checkRadio = (e) => {
    e.target.defaultValue && setIsChecked(true);
  };
  return (
    <StyledQuestionForm>
      <form
        onChange={checkRadio}
        id="category"
        action="http://127.0.0.1:8000/api/v1/category"
        method="post"
      >
        <fieldset>
          <legend>
            <img src={traffic} alt="" />
            <span>{question}</span>
          </legend>
          <div className="radiowrap">
            <label className="first">
              <input className="first" type="radio" name={name} value="-2" />
              비동의<span></span>
            </label>
            <label>
              <input className="second" type="radio" name={name} value="-1" />
              <span></span>
            </label>
            <label>
              <input className="third" type="radio" name={name} value="0" />
              <span></span>
            </label>
            <label>
              <input className="fourth" type="radio" name={name} value="1" />
              <span></span>
            </label>
            <label className="fifth">
              <input className="fifth" type="radio" name={name} value="2" />
              <span></span>동의
            </label>
          </div>
        </fieldset>
      </form>
    </StyledQuestionForm>
  );
}

export default QuestionForm;

const StyledQuestionForm = styled.div`
  & form {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & legend {
    position: absolute;
    width: 27rem;
    height: 13rem;
    left: 50%;
    transform: translate(-50%, 50%);
    top: -5rem;
    background: #ffffff;
    box-shadow: 0px 3px 5px rgba(152, 152, 152, 0.24);
    border-radius: 15px;
    text-align: center;
    color: ${(props) => props.theme.colors.Engblue3};
    font-size: 1.5rem;
    font-family: "Pretendard-SemiBold";
  }

  & legend img {
    position: absolute;
    width: 29px;
    height: 7px;
    top: 1.4rem;
    left: 2rem;
  }
  & legend span {
    position: absolute;
    left: 50%;
    top: 54%;
    height: fit-content;
    transform: translate(-50%, -50%);
    line-height: 2.5rem;
    width: 25rem;
  }
  & .radiowrap {
    position: absolute;
    top: 15.5rem;
    left: -1rem;
    transform: translate(-50%, 50%);
    width: 30rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: "Pretendard-SemiBold";
  }
  & .radiowrap label.first {
    color: ${(props) => props.theme.colors.Engpink};
    font-size: 1.5rem;
  }
  & .radiowrap label.fifth {
    color: ${(props) => props.theme.colors.Enggreen};
    font-size: 1.5rem;
  }

  & input[type="radio"] {
    appearance: none;
  }

  & input[type="radio"] + span {
    display: inline-block;
    width: 37px;
    height: 37px;
    border: 2px solid ${(props) => props.theme.colors.Engpink};
    border-radius: 50%;
    cursor: pointer;
    vertical-align: middle;
  }
  & input[type="radio"].first + span {
    margin-left: 10px;
  }
  & input[type="radio"].first:checked + span {
    background-color: ${(props) => props.theme.colors.Engpink};
    background-image: url(${check});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 18px 18px;
  }
  & input[type="radio"].second + span {
    width: 27px;
    height: 27px;
  }
  & input[type="radio"].second:checked + span {
    background-color: ${(props) => props.theme.colors.Engpink};
    background-image: url(${check});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 16px 16px;
  }
  & input[type="radio"].third + span {
    width: 22px;
    height: 22px;
    border-color: ${(props) => props.theme.colors.Enggray2};
  }
  & input[type="radio"].third:checked + span {
    background-color: ${(props) => props.theme.colors.Enggray2};
    background-image: url(${check});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 14px 14px;
  }
  & input[type="radio"].fourth + span {
    width: 27px;
    height: 27px;
    border-color: ${(props) => props.theme.colors.Enggreen};
  }
  & input[type="radio"].fourth:checked + span {
    background-color: ${(props) => props.theme.colors.Enggreen};
    background-image: url(${check});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 16px 16px;
  }

  & input[type="radio"].fifth + span {
    width: 37px;
    height: 37px;
    border-color: ${(props) => props.theme.colors.Enggreen};
    margin-right: 10px;
  }
  & input[type="radio"].fifth:checked + span {
    background-color: ${(props) => props.theme.colors.Enggreen};
    background-image: url(${check});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 18px 18px;
  }
`;
