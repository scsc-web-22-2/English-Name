import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/common/loading";
import traffic from "../assets/icons/traffic_light.png";

function Result() {
    const location = useLocation();
    const [resultId, setResultId] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState("");
    
    const getResult = (json) => {
        for(let i = 0; i < json.length; i++){
            if(json[i].category === Number(location.state.id)){
                setName(json[i].name);
                setResultId(String(json[i].category));
                setIsLoading(false);
                // console.log(i)
                // console.log(json[i].name)
            }
        }
    }
    useEffect(() => {
        getResult(location.state.json);
    },[])
    return(
        <StyledResult>
            <h2>왓욜넴</h2>
            {isLoading ? <Loading/> :
            <div className="resultWrap">
                <h1>{name}</h1>
                <img className="main" src={require(`../assets/images/result${resultId}.png`)} alt=""/>
                <img className="traffic" src={traffic} alt=""/>
                <span></span>
            </div>
            }
            
        </StyledResult>
    )
};

export default Result;

const StyledResult = styled.div`
    
    & h2 {      
    font-family: "Pretendard-ExtraBold";
    color: ${(props) => props.theme.colors.Engblue3};
    font-size: 1.5rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 4rem;
    text-align: center;
  }

  & h1 {
    font-family: "Pretendard-ExtraBold";
    color: ${(props) => props.theme.colors.Engblue3};
    font-size: 2.4rem;
    width: 100%;
    text-align: center;
  }

  & div.resultWrap {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 80%;
    width: 100%;
    justify-items: center;
    align-items: center;
  }

  & img.main {
    width: 17.3rem;
    height: 23rem;
  }

  & img.traffic {
    
    width: 29px;
    height: 7px;
    
  }
`;