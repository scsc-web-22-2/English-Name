import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DetailTestForm from "../components/detailTestForm";
import Loading from "../components/common/loading";

function DetailTest({json}){
    const [isLoading, setIsLoading] = useState(true);
    const [question, setQuestion] = useState("");
    const [answerArray, SetAnswerArray] = useState([]);
    const getDetail = () => {
        if(json[1].category >= 1 && json[1].category <=4){
                        setQuestion([
                            "여유를 찾아 떠나려는 당신,",<br/>,
                            "어떤 곳으로 떠나고 싶나요?"]);
                        SetAnswerArray([
                            {answer:"꽃이 만발한 곳", img:"1"},
                            {answer:"나무와 새들의 숲", img:"2"},
                            {answer:"시원한 바다", img:"3"},
                            {answer:"달이 비추는 도시", img:"4"},
                        ]);
                    } else if(json[1].category >= 5 && json[1].category <=8){
                        setQuestion([
                            "여행을 떠나 유명한 공원에 갔습니다.",<br/>,
                            "어떤 사람들이 보이나요?"]);
                        SetAnswerArray([
                            {answer:"나들이 온 가족", img:"5"},
                            {answer:"데이트 하는 연인", img:"6"},
                            {answer:"놀러온 친구들", img:"7"},
                            {answer:"강아지와 행인", img:"8"},
                        ]);
                    } else{
                        setQuestion([
                            "외국에서 소매치기를 만나",<br/>,
                            "전재산을 잃었다,",<br/>,
                            "어떻게 해결하실건가요?"]);
                        SetAnswerArray([
                            {answer:["뭐든 배워서",<br/>, 
                            "직장을 잡는다"], img:"9"},
                            {answer:"대사관에 연락한다", img:"10"},
                            {answer:["길거리 공연에",<br/>, 
                            "합류해 돈을 번다"], img:"11"},
                            {answer:["신중히 더 좋은",<br/>, 
                            "방법을 고민한다"], img:"12"},
                        ]);
                    };
                setIsLoading(false);
    }
    
   useEffect(() => {
    getDetail();
   },[])
    return(
        <StyledDetailTest>
            <h2>왓욜넴</h2>
            {isLoading ? <Loading/> :
            <>
            <DetailTestForm question={question} answer={answerArray} json={json}/>
            </>
            }
            
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