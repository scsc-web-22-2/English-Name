import React, { useEffect, useState } from "react";
import styled from "styled-components";
import traffic from "../assets/icons/traffic_light.png";
import check from "../assets/icons/check.png";
import arrow from "../assets/icons/arrow_right.png";
import Loading from "./common/loading";
import ProgressBar from "../components/common/progressBar";
import { useNavigate } from "react-router-dom";

function QuestionForm({
  data,
  gender,
  setJson,
  setIsDetail,
  setProgress,
  progress,
}) {
  const [num, setnum] = useState(1);
  const [checkedValue, setCheckedValue] = useState({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null,
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const incrementNum = () => {
    setnum((prev) => prev + 1);
    setIsChecked(false);
  };
  const checkRadio = (e) => {
    switch (e.target.name) {
      case "q1":
        if(checkedValue.q2 != null){setIsChecked(true)};
        setCheckedValue((prev) => ({ ...prev, q1: e.target.value }));
        break;
      case "q2":
        if(checkedValue.q1 != null){setIsChecked(true)};
        setCheckedValue((prev) => ({ ...prev, q2: e.target.value }));
        break;
      case "q3":
        if(checkedValue.q4 != null){setIsChecked(true)};
        setCheckedValue((prev) => ({ ...prev, q3: e.target.value }));
        break;
      case "q4":
        if(checkedValue.q3 != null){setIsChecked(true)};
        setCheckedValue((prev) => ({ ...prev, q4: e.target.value }));
        break;
      case "q5":
        if(checkedValue.q6 != null){setIsAllChecked(true)};
        setCheckedValue((prev) => ({ ...prev, q5: e.target.value }));
        break;
      default:
        if(checkedValue.q5 != null){setIsAllChecked(true)};
        setCheckedValue((prev) => ({ ...prev, q6: e.target.value }));
        break;
    }
  };

  const countProgress = () => {
    let total = 1;

    for (var q in checkedValue) {
      if (checkedValue[q] !== null) {
        total += 1;
      }
    }
    setProgress(total);
  };

  useEffect(() => {
    countProgress();
  }, [checkedValue]);

  const formSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setJson(
      await fetch(
        `https://scscproject-engname.com/api/v1/category/?gender=${gender}&q1=${checkedValue.q1}&q2=${checkedValue.q2}&q3=${checkedValue.q3}&q4=${checkedValue.q4}&q5=${checkedValue.q5}&q6=${checkedValue.q6}`
      )
        .then((res) => {
          if (res.status === 404) {
            navigate("/404");
          }
          return res.json();
        })
        .catch((error) => console.log(error))
    );

    setIsDetail(true);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <ProgressBar progress={progress} />
      <StyledQuestionForm>
        <form
          onChange={checkRadio}
          onSubmit={formSubmit}
          id="category"
          action="https://scscproject-engname.com/api/v1/category"
          method="get"
        >
          {/* ?????? ?????? */}
          <fieldset className="inactive">
            <label>
              <input type="radio" name="gender" value={gender} checked={true} />
            </label>
          </fieldset>
          {/* 1-2?????? */}
          <fieldset
            className={num === 1 ? "topQuestion" : "topQuestion inactive"}
          >
            <legend>
              <img src={traffic} alt="" />
              <span>{data[0].question}</span>
            </legend>
            <div className="radiowrap">
              <span className="disagree">?????????</span>
              <label className="first">
                <input
                  className="first"
                  type="radio"
                  name={data[0].name}
                  value="-2"
                />
                <span></span>
              </label>
              <label>
                <input
                  className="second"
                  type="radio"
                  name={data[0].name}
                  value="-1"
                />
                <span></span>
              </label>
              <label>
                <input
                  className="third"
                  type="radio"
                  name={data[0].name}
                  value="0"
                />
                <span></span>
              </label>
              <label>
                <input
                  className="fourth"
                  type="radio"
                  name={data[0].name}
                  value="1"
                />
                <span></span>
              </label>
              <label className="fifth">
                <input
                  className="fifth"
                  type="radio"
                  name={data[0].name}
                  value="2"
                />
                <span></span>
              </label>
              <span className="agree">??????</span>
            </div>
          </fieldset>

          <fieldset
            className={num === 1 ? "bottomQuestion" : "bottomQuestion inactive"}
          >
            <legend>
              <img src={traffic} alt="" />
              <span>{data[1].question}</span>
            </legend>
            <div className="radiowrap">
            <span className="disagree">?????????</span>
              <label className="first">
                <input
                  className="first"
                  type="radio"
                  name={data[1].name}
                  value="-2"
                />
                <span></span>
              </label>
              <label>
                <input
                  className="second"
                  type="radio"
                  name={data[1].name}
                  value="-1"
                />
                <span></span>
              </label>
              <label>
                <input
                  className="third"
                  type="radio"
                  name={data[1].name}
                  value="0"
                />
                <span></span>
              </label>
              <label>
                <input
                  className="fourth"
                  type="radio"
                  name={data[1].name}
                  value="1"
                />
                <span></span>
              </label>
              <label className="fifth">
                <input
                  className="fifth"
                  type="radio"
                  name={data[1].name}
                  value="2"
                />
                <span></span>
              </label>
              <span className="agree">??????</span>
            </div>
          </fieldset>

          {/* 3-4?????? */}
          <fieldset
            className={num === 2 ? "topQuestion" : "topQuestion inactive"}
          >
            <legend>
              <img src={traffic} alt="" />
              <span>{data[2].question}</span>
            </legend>
            <div className="radiowrap">
            <span className="disagree">?????????</span>
              <label className="first">
                <input
                  className="first"
                  type="radio"
                  name={data[2].name}
                  value="-2"
                />
                <span></span>
              </label>
              <label>
                <input
                  className="second"
                  type="radio"
                  name={data[2].name}
                  value="-1"
                />
                <span></span>
              </label>
              <label>
                <input
                  className="third"
                  type="radio"
                  name={data[2].name}
                  value="0"
                />
                <span></span>
              </label>
              <label>
                <input
                  className="fourth"
                  type="radio"
                  name={data[2].name}
                  value="1"
                />
                <span></span>
              </label>
              <label className="fifth">
                <input
                  className="fifth"
                  type="radio"
                  name={data[2].name}
                  value="2"
                />
                <span></span>
              </label>
              <span className="agree">??????</span>
            </div>
          </fieldset>

          <fieldset
            className={num === 2 ? "bottomQuestion" : "bottomQuestion inactive"}
          >
            <legend>
              <img src={traffic} alt="" />
              <span>{data[3].question}</span>
            </legend>
            <div className="radiowrap">
            <span className="disagree">?????????</span>
              <label className="first">
                <input
                  className="first"
                  type="radio"
                  name={data[3].name}
                  value="-2"
                />
                <span></span>
              </label>
              <label>
                <input
                  className="second"
                  type="radio"
                  name={data[3].name}
                  value="-1"
                />
                <span></span>
              </label>
              <label>
                <input
                  className="third"
                  type="radio"
                  name={data[3].name}
                  value="0"
                />
                <span></span>
              </label>
              <label>
                <input
                  className="fourth"
                  type="radio"
                  name={data[3].name}
                  value="1"
                />
                <span></span>
              </label>
              <label className="fifth">
                <input
                  className="fifth"
                  type="radio"
                  name={data[3].name}
                  value="2"
                />
                <span></span>
              </label>
              <span className="agree">??????</span>
            </div>
          </fieldset>

          {/* 5-6?????? */}
          <fieldset
            className={num === 3 ? "topQuestion" : "topQuestion inactive"}
          >
            <legend>
              <img src={traffic} alt="" />
              <span>{data[4].question}</span>
            </legend>
            <div className="radiowrap">
              <span className="disagree">?????????</span>
              <label className="first">
                <input
                  className="first"
                  type="radio"
                  name={data[4].name}
                  value="-2"
                />
                <span></span>
              </label>
              <label>
                <input
                  className="second"
                  type="radio"
                  name={data[4].name}
                  value="-1"
                />
                <span></span>
              </label>
              <label>
                <input
                  className="third"
                  type="radio"
                  name={data[4].name}
                  value="0"
                />
                <span></span>
              </label>
              <label>
                <input
                  className="fourth"
                  type="radio"
                  name={data[4].name}
                  value="1"
                />
                <span></span>
              </label>
              <label className="fifth">
                <input
                  className="fifth"
                  type="radio"
                  name={data[4].name}
                  value="2"
                />
                <span></span>
              </label>
              <span className="agree">??????</span>
            </div>
          </fieldset>

          <fieldset
            className={num === 3 ? "bottomQuestion" : "bottomQuestion inactive"}
          >
            <legend>
              <img src={traffic} alt="" />
              <span>{data[5].question}</span>
            </legend>
            <div className="radiowrap">
            <span className="disagree">?????????</span>
              <label className="first">
                <input
                  className="first"
                  type="radio"
                  name={data[5].name}
                  value="-2"
                />
                <span></span>
              </label>
              <label>
                <input
                  className="second"
                  type="radio"
                  name={data[5].name}
                  value="-1"
                />
                <span></span>
              </label>
              <label>
                <input
                  className="third"
                  type="radio"
                  name={data[5].name}
                  value="0"
                />
                <span></span>
              </label>
              <label>
                <input
                  className="fourth"
                  type="radio"
                  name={data[5].name}
                  value="1"
                />
                <span></span>
              </label>
              <label className="fifth">
                <input
                  className="fifth"
                  type="radio"
                  name={data[5].name}
                  value="2"
                />
                <span></span>
              </label>
              <span className="agree">??????</span>
            </div>
          </fieldset>

          <button
            type="button"
            onClick={incrementNum}
            className={!isChecked && "inactive"}
          >
            <span>????????????</span>
            <img src={arrow} alt="" />
          </button>
        </form>
        <button
          form="category"
          type="submit"
          className={!isAllChecked && "inactive"}
        >
          <span>????????????</span>
          <img src={arrow} alt="" />
        </button>
      </StyledQuestionForm>
    </>
  );
}

export default QuestionForm;

const StyledQuestionForm = styled.div`
  & form {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & .inactive {
    display: none;
  }
  & .topQuestion {
    position: absolute;
    top: 10vh;
  }

  & .bottomQuestion {
    position: absolute;
    top: 44vh;
  }
  & legend {
    position: absolute;
    width: 27rem;
    height: 13rem;
    left: 50%;
    transform: translate(-50%, 50%);
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
    top: 20rem;
    transform: translate(-50%, 50%);
    width: 97vw;
    left: 50%;
    max-width: 35rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: "Pretendard-SemiBold";

  }
  & .radiowrap label.first {
    color: ${(props) => props.theme.colors.Engpink};
    font-size: 1.5rem;
    margin-left: -5px;
  }
  & .radiowrap label.fifth {
    color: ${(props) => props.theme.colors.Enggreen};
    font-size: 1.5rem;
  }

  & .radiowrap span.disagree {
    color: ${(props) => props.theme.colors.Engpink};
    font-size: 1.5rem;
  }

  & .radiowrap span.agree {
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

  & button {
    position: absolute;
    width: 16.8rem;
    height: 10rem;
    max-width: 303px;
    max-height: 60px;
    left: 50%;
    top: 93vh;
    transform: translate(-50%, -50%);

    background-color: ${(props) => props.theme.colors.Engblue1};
    box-shadow: 0px 3px 8px 2px rgba(166, 221, 255, 0.63);
    border-radius: 30px;
  }

  & button span {
    color: ${(props) => props.theme.colors.Engwhite};
    font-size: 1.5rem;
    font-family: "Pretendard-SemiBold";
  }

  & button img {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 82%;
  }
`;
