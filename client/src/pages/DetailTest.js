import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DetailTestForm from "../components/detailTestForm";
import answer1 from "../assets/images/1.jpg";
import answer2 from "../assets/images/1.jpg";
import answer3 from "../assets/images/1.jpg";
import answer4 from "../assets/images/1.jpg";
import answer5 from "../assets/images/1.jpg";
import answer6 from "../assets/images/1.jpg";
import answer7 from "../assets/images/1.jpg";
import answer8 from "../assets/images/1.jpg";
import answer9 from "../assets/images/1.jpg";
import answer10 from "../assets/images/1.jpg";
import answer11 from "../assets/images/1.jpg";
import answer12 from "../assets/images/1.jpg";

function DetailTest({json}){
    const [question, setQuestion] = useState("");
    const [answerArray, SetAnswerArray] = useState([]);
    const getDetail = () => {
        if(json[1].category >= 1 && json[1].category <=5){
                        setQuestion([
                            "여유를 찾아 떠나려는 당신,",<br/>,
                            "어떤 곳으로 떠나고 싶나요?"]);
                        SetAnswerArray([
                            {answer:"꽃이 만발한 곳", img:{answer1}},
                            {answer:"나무와 새들의 숲", img:{answer2}},
                            {answer:"나무와 새들의 숲", img:{answer3}},
                            {answer:"나무와 새들의 숲", img:{answer4}},
                        ]);
                    } else if(json[1].category >= 6 && json[1].category <=8){
                        setQuestion([
                            "여행을 떠나 유명한 공원에 갔습니다.",<br/>,
                            "어떤 사람들이 보이나요?"]);
                        SetAnswerArray([
                            {answer:"꽃이 만발한 곳", img:{answer5}},
                            {answer:"나무와 새들의 숲", img:{answer6}},
                            {answer:"나무와 새들의 숲", img:{answer7}},
                            {answer:"나무와 새들의 숲", img:{answer8}},
                        ]);
                    } else{
                        setQuestion([
                            "외국에서 소매치기를 만나",<br/>,
                            "전재산을 잃었다,",<br/>,
                            "어떻게 해결하실건가요?"]);
                        SetAnswerArray([
                            {answer:"꽃이 만발한 곳", img:{answer9}},
                            {answer:"나무와 새들의 숲", img:{answer10}},
                            {answer:"나무와 새들의 숲", img:{answer11}},
                            {answer:"나무와 새들의 숲", img:{answer12}},
                        ]);
                    };
    }
    
   useEffect(() => {
    getDetail();
   },[])
    return(
        <StyledDetailTest>
            <h2>왓욜넴</h2>
            
            <DetailTestForm question={question} answer={answerArray}/>
        </StyledDetailTest>
    )
};

export default DetailTest;

const StyledDetailTest = styled.div`
    & h2 {
    font-family: 'Pretendard-ExtraBold';
    color: ${(props) => props.theme.colors.Engblue3};
    font-size: 1.5rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 4rem;
    text-align: center;
    }

   
`;