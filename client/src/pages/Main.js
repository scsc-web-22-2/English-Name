import React from 'react';
import styled from 'styled-components';
import main1 from '../assets/images/main1.png';
import arrow from '../assets/icons/arrow_right.png'

function Main() {
    return(
        <StyledMain>
            <h1>
               What’s 
                <br/>
                your
                <br/> 
                English name?
            </h1>

            <img src={main1} alt="" />

            <h3>당신과<span> 잘 어울리는 <br/> 영어 이름</span>을 찾아보세요!</h3>
             
            <button>
                <span>테스트 시작하기</span><img src={arrow} alt="" />
            </button>
            
            
        </StyledMain>
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
        top: 48rem;
        text-align: center;
        line-height: 2.2rem;


    }

    h3 span {
        color: ${(props) => props.theme.colors.Engblue1};
        
    }

    button {
        position: absolute;
        width: 30rem;
        height: 6rem;
        left: 50%;
        top: 65rem;
        transform: translate(-50%, -50%);

        background-color: ${(props) => props.theme.colors.Engblue1};
        box-shadow: 0px 3px 8px 2px rgba(166, 221, 255, 0.63);
        border-radius: 30px;

    }

    button span {
        color: ${(props) => props.theme.colors.Engwhite};
        font-size: 1.5rem;
    }


    button img {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 50%;
        left: 90%;
    }


    /* #arrow {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 65rem;
        left: 30.5rem;
        cursor: pointer;
        
    
    
    } */

`;

export default Main;