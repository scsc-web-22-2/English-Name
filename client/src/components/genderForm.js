import React from "react";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import arrow from "../assets/icons/arrow_right.png";
import updown from "../assets/icons/updown.png";
import exit from "../assets/icons/bottomsheet_exit.png";
import { useNavigate } from "react-router-dom";

function GenderForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gender, setGender] = useState("성별");
  const navigate = useNavigate();
  const onNext = () => {
    navigate("/Test");
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const showCheckedGender = (e) => {
    switch (e.target.defaultValue) {
      case "woman":
        setGender("여자");
        break;
      case "man":
        setGender("남자");
        break;
      default:
        setGender("관계없음");
        break;
    }
    closeModal();
  };
  return (
    <StyledGenderForm isModalOpen={isModalOpen}>
      <h2>왓욜넴</h2>
      <h3>성별을 선택해주세요.</h3>
      <button type="button" onClick={openModal}>
        <span>{gender}</span>
        <img src={updown} alt="" />
      </button>

      {gender !== "성별" && (
        <button type="submit" form="gender" onClick={onNext}>
          <span>다음으로</span>
          <img src={arrow} alt="" />
        </button>
      )}
      {isModalOpen && (
        <>
          <StyledModalBackground />
          <StyledBottomSheet>
            <img src={exit} alt="" onClick={closeModal} />

            <form
              id="gender"
              action="http://127.0.0.1:8000/api/v1/category"
              method="get"
              onChange={showCheckedGender}
            >
              <fieldset>
                <legend>성별을 선택해주세요.</legend>
                <label>
                  <input type="radio" name="gender" value="woman" />
                  <span>여</span>
                </label>
                <br />
                <label>
                  <input type="radio" name="gender" value="man" />
                  <span>남</span>
                </label>
                <br />
                <label>
                  <input type="radio" name="gender" value="etc" />
                  <span>관계없음</span>
                </label>
              </fieldset>
            </form>
          </StyledBottomSheet>
        </>
      )}
    </StyledGenderForm>
  );
}

export default GenderForm;

const StyledGenderForm = styled.div`
  h2 {
    font-family: "Pretendard-ExtraBold";
    color: ${(props) => props.theme.colors.Engblue3};
    font-size: 1.5rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 4rem;
    text-align: center;
  }

  h3 {
    color: ${(props) => props.theme.colors.Engblue3};
    font-size: 1.5rem;
    font-family: "Pretendard-SemiBold";
    position: absolute;
    left: 40%;
    top: 27vh;
    transform: translate(-50%, -50%);
  }

  button[type="button"] {
    position: absolute;
    width: 241px;
    height: 54px;
    left: 50%;
    top: 35vh;
    transform: translate(-50%, -50%);

    background: #ffffff;
    border: 2px solid;
    border-color: ${(props) => (props.isModalOpen ? "#0EA2FD" : "#003F96")};
    box-shadow: 0px 4px 10px 3px rgba(0, 63, 150, 0.12);
    border-radius: 30px;
    display: inline-block;
    text-align: left;
    padding-left: 20px;
  }

  button[type="button"] span {
    color: ${(props) => props.theme.colors.Engblue3};
    font-size: 1.5rem;
    font-family: "Pretendard-SemiBold";
  }

  button[type="button"] img {
    position: absolute;
    width: 16px;
    height: 16px;
    left: 85%;
  }

  button[type="submit"] {
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

  button[type="submit"] span {
    color: ${(props) => props.theme.colors.Engwhite};
    font-size: 1.5rem;
    font-family: "Pretendard-SemiBold";
  }

  button[type="submit"] img {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 87%;
  }
`;

const slidein = keyframes`
  from {
    top: 100%;
  }
  to {
    top: 50vh;
  }
  
`;

const StyledModalBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.72);
  z-index: 1;
`;

const StyledBottomSheet = styled.div`
  z-index: 2;
  position: absolute;
  transform: translate(-50%, 0);
  width: 100%;
  height: 50vh;
  bottom: 0;
  border-radius: 40px 40px 0px 0px;
  background-color: white;
  animation: ${slidein} 0.5s 0s;

  & > form {
    color: #646464;
    font-size: 1.5rem;
    font-family: "Pretendard-SemiBold";
    position: absolute;
    left: 12%;
    top: 15%;
    line-height: 6vh;
  }

  input[type="radio"] {
    appearance: none;
  }

  input[type="radio"] + span {
    color: ${(props) => props.theme.colors.Engblue3};
    font-size: 1.5rem;
    font-family: "Pretendard-SemiBold";
    cursor: pointer;
  }
  input[type="radio"]:checked + span {
    color: ${(props) => props.theme.colors.Engblue1};
  }
  input[type="radio"]:hover + span {
    color: ${(props) => props.theme.colors.Engblue1};
  }

  & > img {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 85%;
    top: 8%;
    cursor: pointer;
  }
`;
