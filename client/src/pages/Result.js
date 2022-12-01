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
    const [desc, setDesc] = useState("");
    const [mean, setMean] = useState("");

  
    
    const getResult = (json) => {
        for(let i = 0; i < json.length; i++){
            if(json[i].category === Number(location.state.id)){
                setName(json[i].name);
                setResultId(String(json[i].category));
                setIsLoading(false);
                setDesc(json[i].result);
                setMean(json[i].meaning);
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
                <div className="desc">
                  <h3>테스트 결과</h3>
                  <div className="desc_text">
                    {desc.split('\\n').map(line => {
                    return(<span>{line}<br/></span>)
                  })}
                  </div>
                </div>
                <div className="mean">
                  <h3>이름 뜻</h3>
                  <div className="mean_text">
                    {mean.split('\\n').map(line => {
                    return(<span>{line}<br/></span>)
                  })}
                  </div>
                </div>
                
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
    margin-bottom: 1.8vh;
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
    width: 15.4rem;
    height: 20rem;
  }

  & img.traffic {
    
    width: 29px;
    height: 7px;
    margin: 1vh 0;
  }

  & div.desc {
    width: 27rem;
    height: 10rem;
    background: #ffffff;
    box-shadow: 0px 3px 5px rgba(152, 152, 152, 0.24);
    border-radius: 15px;
    text-align: center;
    position: relative;
    margin-bottom: 2vh;
  }

  & div.desc h3 {
    font-family: "Pretendard-SemiBold";
    color: ${(props) => props.theme.colors.Engblue1};
    font-size: 1.5rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 2.1rem;
    text-align: center;
  }

  & div.desc_text {
    color: ${(props) => props.theme.colors.Engblue3};
    font-size: 1.5rem;
    position: absolute;
    left: 50%;
    width: 100%;
    top: 6rem;
    line-height: 2.2rem;
    transform: translate(-50%, -50%);
  }

  & div.mean {
    width: 27rem;
    height: 14rem;
    background: #ffffff;
    box-shadow: 0px 3px 5px rgba(152, 152, 152, 0.24);
    border-radius: 15px;
    text-align: center;
    position: relative;
  }

  & div.mean h3 {
    font-family: "Pretendard-SemiBold";
    color: ${(props) => props.theme.colors.Engblue1};
    font-size: 1.5rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 2.1rem;
    text-align: center;
  }

  & div.mean_text {
    color: ${(props) => props.theme.colors.Engblue3};
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.Engblue3};
    font-size: 1.5rem;
    position: absolute;
    left: 50%;
    width: 100%;
    top: 7.6rem;
    line-height: 2.7rem;
    transform: translate(-50%, -50%);
    text-align: left;
    padding-left: 1.6rem;
  }

`;