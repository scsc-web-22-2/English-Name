import React, { useState } from 'react';
import styled from 'styled-components';
import main1 from '../assets/images/main1.png';
import main2 from '../assets/images/main2.png';
import main3 from '../assets/images/main3.png';
import main4 from '../assets/images/main4.png';
import arrow from '../assets/icons/arrow_right.png'
import GenderForm from '../components/genderForm';

function Main() {
    const [isStart, setIsStart] = useState(false);
    const [isNext, setIsNext] = useState(false);
    const onStart = () => {
        setIsStart(true);
    }
    const onNext = () => {
        setIsNext(true);
    }
    return(
        <>
            {isStart ? 
            (isNext ? <GenderForm/> :<StyledMainStory>
                <h2>왓욜넴</h2>
                <img src={main2} alt=""/>
                <div id="story1">
                    <span><img src={main3} alt=""/>영어 이름 뭘로 짓지..?</span>
                </div>
                <div id="story2">
                    <span><img src={main4} alt=""/>나와 잘 어울리는 영어 이름을<br/>찾으러 떠나볼까요?</span>
                </div>
                

                <button onClick={onNext}>
                    <span>다음으로</span><img src={arrow} alt="" />
                </button>
                
            </StyledMainStory>)
            :  <StyledMain>
                <h1>
                What’s 
                    <br/>
                    your
                    <br/> 
                    English name?
                </h1>

                <img src={main1} alt="" />

                <h3>당신과<span> 잘 어울리는 <br/> 영어 이름</span>을 찾아보세요!</h3>
                
                <button onClick={onStart}>
                    <span>테스트 시작하기</span><img src={arrow} alt="" />
                </button>
                </StyledMain>
            }
            
        </>
        
        
    );
}


const StyledMain = styled.div`
    h1 {
        font-family: 'Pretendard-ExtraBold';
        color: ${(props) => props.theme.colors.Engblue3};
        position: absolute;
        width: 25rem;
        height: 2rem;
        left: 5.4rem;
        top: 5.5rem;
        font-size: 3rem;
        line-height: 4rem;
    }

    img {
        position: absolute;
        top: 32rem;
        left: 50%;
        width: 17.3rem;
        height: 23rem;
        transform: translate(-50%, -50%);
    }

    h3 {
        font-family: 'Pretendard-SemiBold';
        color: ${(props) => props.theme.colors.Engblue2};
        font-size: 1.5rem;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 48.5rem;
        text-align: center;
        line-height: 2.2rem;


    }

    h3 span {
        color: ${(props) => props.theme.colors.Engblue1};
        
    }

    button {
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

    button span {
        color: ${(props) => props.theme.colors.Engwhite};
        font-size: 1.5rem;
        font-family: 'Pretendard-SemiBold';
    }


    button img {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 50%;
        left: 90%;
    }


`;


const StyledMainStory = styled.div`
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

    img{
        position: absolute;
        top: 19rem;
        left: 50%;
        width: 17.3rem;
        height: 23rem;
        transform: translate(-50%, -50%);
    }

    div#story1{
        position: absolute;
        display: inline;
        height: 50px;
        line-height: 50px;
        left: 50%;
        top: 37rem;
    }
    #story1 span{
        font-family: 'Pretendard-SemiBold';
        color: ${(props) => props.theme.colors.Engblue2};
        font-size: 1.5rem;
        position: absolute;
        width: 28rem;
        
        transform: translate(-50%, -50%);
        text-align: center;
        padding: 12px;
        line-height: 2.5rem;
        background: #FFFFFF;
        box-shadow: 0px 3px 5px rgba(152, 152, 152, 0.24);
        border-radius: 15px;
        
        
    }


    #story1 span img{
        position: absolute;
        width: 28px;
        height: 28px;
        top: 50%;
        left: 3.5rem;
        
    }

    div#story2{
        line-height: 100px;
        height: 100px;
    }

    #story2 span{
        font-family: 'Pretendard-SemiBold';
        color: ${(props) => props.theme.colors.Engblue1};
        font-size: 1.5rem;
        position: absolute;
        width: 28rem;
        left: 50%;
        top: 44rem;
        transform: translate(-50%, -50%);
        text-align: right;
        padding: 12px 34px 12px 12px;
        line-height: 2.5rem;
        background: #FFFFFF;
        box-shadow: 0px 3px 5px rgba(152, 152, 152, 0.24);
        border-radius: 15px;
    }

    #story2 span img{
        position: absolute;
        width: 33px;
        height: 33px;
        top: 50%;
        left: 3.5rem;
    }


    button {
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

    button span {
        color: ${(props) => props.theme.colors.Engwhite};
        font-size: 1.5rem;
        font-family: 'Pretendard-SemiBold';
    }


    button img {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 50%;
        left: 90%;
    }
`;

export default Main;