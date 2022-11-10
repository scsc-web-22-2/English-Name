import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../assets/icons/arrow_right.png";
import QuestionForm from "../components/questionForm";

function Test() {
  const [num, setnum] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const incrementNum = () => {
    setnum((prev) => prev + 1);
    setIsChecked(false);
  };

  return (
    <StyledTest>
      <h2>왓욜넴</h2>

      <div className={num === 1 ? "topQuestion" : "topQuestion inactive"}>
        <QuestionForm
          question={[
            "여행을 갈 때,",
            <br />,
            "관광지보다 휴양지를 선호하는 편이다.",
          ]}
          name="q1"
        />
      </div>
      <div className={num === 1 ? "bottomQuestion" : "bottomQuestion inactive"}>
        <QuestionForm
          question={[
            "여행 계획을 세울 때, 온라인 검색보다",
            <br />,
            "사람에게 직접 듣는 후기를 선호한다.",
          ]}
          name="q2"
          setIsChecked={setIsChecked}
        />
        <button
          type="button"
          onClick={incrementNum}
          className={!isChecked && "inactive"}
        >
          <span>다음으로</span>
          <img src={arrow} alt="" />
        </button>
      </div>
      <div className={num === 2 ? "topQuestion" : "topQuestion inactive"}>
        <QuestionForm
          question={[
            "누군가와 함께 여행을 갈 때,",
            <br />,
            "주도해서 계획을 짜기보다",
            <br />,
            "상대방을 믿고 따라가는 편이다.",
          ]}
          name="q3"
        />
      </div>
      <div className={num === 2 ? "bottomQuestion" : "bottomQuestion inactive"}>
        <QuestionForm
          question={[
            "교환학생을 간다면, 학업 성과보다",
            <br />,
            "추억을 더 중요하게 여길 것이다.",
          ]}
          name="q4"
          setIsChecked={setIsChecked}
        />
        <button
          type="button"
          onClick={incrementNum}
          className={!isChecked && "inactive"}
        >
          <span>다음으로</span>
          <img src={arrow} alt="" />
        </button>
      </div>
      <div className={num === 3 ? "topQuestion" : "topQuestion inactive"}>
        <QuestionForm
          question={[
            "여행에서 혼자 다니는 것이",
            <br />,
            "함께 다니는 것보다 편하다.",
          ]}
          name="q5"
        />
      </div>
      <div className={num === 3 ? "bottomQuestion" : "bottomQuestion inactive"}>
        <QuestionForm
          question={[
            "여행에 다녀온 후, 기억에 남는 것은",
            <br />,
            "자연환경의 아름다움보다",
            <br />,
            "인간이 만든 문화재이다.",
          ]}
          name="q6"
          setIsChecked={setIsChecked}
        />
        <button
          type="submit"
          form="category"
          className={!isChecked && "inactive"}
        >
          <span>다음으로</span>
          <img src={arrow} alt="" />
        </button>
      </div>
    </StyledTest>
  );
}

export default Test;

const StyledTest = styled.div`
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

  & .inactive {
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

  & .bottomQuestion button {
    position: absolute;
    width: 16.8rem;
    height: 10rem;
    max-width: 303px;
    max-height: 60px;
    left: 50%;
    top: 45vh;
    transform: translate(-50%, -50%);

    background-color: ${(props) => props.theme.colors.Engblue1};
    box-shadow: 0px 3px 8px 2px rgba(166, 221, 255, 0.63);
    border-radius: 30px;
  }

  & .bottomQuestion button span {
    color: ${(props) => props.theme.colors.Engwhite};
    font-size: 1.5rem;
    font-family: "Pretendard-SemiBold";
  }

  & .bottomQuestion button img {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 82%;
  }
`;
