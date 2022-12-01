import React, { useState } from "react";
import styled from "styled-components";
import QuestionForm from "../components/questionForm";
import GenderForm from '../components/genderForm';
import DetailTest from "./DetailTest";

function Test({setJson, json, progress, setProgress}) {
  const [gender, setGender] = useState("")
  const [isNext, setIsNext] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const testData = [
    {
      name: "q1",
      question: [
        "여행을 갈 때,",
        <br />,
        "관광지보다 휴양지를 선호하는 편이다.",
      ],
    },
    {
      name: "q2",
      question: [
        "여행 계획을 세울 때, 온라인 검색보다",
        <br />,
        "사람에게 직접 듣는 후기를 선호한다.",
      ],
    },
    {
      name: "q3",
      question: [
        "누군가와 함께 여행을 갈 때,",
        <br />,
        "주도해서 계획을 짜기보다",
        <br />,
        "상대방을 믿고 따라가는 편이다.",
      ],
    },
    {
      name: "q4",
      question: [
        "교환학생을 간다면, 학업 성과보다",
        <br />,
        "추억을 더 중요하게 여길 것이다.",
      ],
    },
    {
      name: "q5",
      question: [
        "여행에서 혼자 다니는 것이",
        <br />,
        "함께 다니는 것보다 편하다.",
      ],
    },
    {
      name: "q6",
      question: [
        "여행에 다녀온 후, 기억에 남는 것은",
        <br />,
        "자연환경의 아름다움보다",
        <br />,
        "인간이 만든 문화재이다.",
      ],
    },
  ];

  return (
    <>
      {isNext 
      ? 
        ( isDetail 
        ? 
            <DetailTest json={json} setProgress={setProgress} progress={progress}/>
        :
          <StyledTest >
              <h2>왓욜넴</h2>
              <QuestionForm data={testData} gender={gender} setIsDetail={setIsDetail} setJson={setJson} setProgress={setProgress} progress={progress}/>
          </StyledTest>
          )
      :
        <GenderForm setGender={setGender} setIsNext={setIsNext} setProgress={setProgress}/>
        }
    </>
    
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
`;
