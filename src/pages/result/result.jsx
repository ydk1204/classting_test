import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../../components/table/table";
import ScorePieChart from "../../components/chart/pieChart";
import Note from "../../components/note/note";
import Tooltip from "../../components/tooltip/tooltip";
import tw from "tailwind-styled-components";

const tableHead = ["시작 시간", "종료 시간", "소요 시간"];
const scoreHead = ["정답 수", "오답 수"];

const timeTooltip = "결과 정보";
const timeExplan = "소요 시간의 경우 ±1초 차이가 존재할 수 있습니다.";

const questionTooltip = "오답 노트";
const questionExplan = "문항 순서가 기존과 다를 수 있습니다.";

const Result = ({ score, wrongList, startTime, endTime, setRetry }) => {
  const [start, setStart] = useState({});
  const [end, setEnd] = useState({});
  const [startData, setStartData] = useState();
  const [endData, setEndData] = useState();
  const [resultData, setResultData] = useState([]);
  const [scoreData, setScoreData] = useState([]);

  const TimeCheck = (startTime, endTime) => {
    startValue(startTime);
    endValue(endTime);
  };

  // 시작 시간 값 저장
  const startValue = (startTime) => {
    const startT = {
      hours: startTime.getHours(),
      minutes: startTime.getMinutes(),
      seconds: startTime.getSeconds(),
    };
    setStart((start) => startT);

    const startD = `${startT.hours}시 ${startT.minutes}분 ${startT.seconds}초`;
    setStartData((startData) => startD);
  };

  // 종료 시간 값 저장
  const endValue = (endTime) => {
    const endT = {
      hours: endTime.getHours(),
      minutes: endTime.getMinutes(),
      seconds: endTime.getSeconds(),
    };
    setEnd((end) => endT);

    const endD = `${endT.hours}시 ${endT.minutes}분 ${endT.seconds}초`;
    setEndData((endData) => endD);
  };

  const Reset = () => {
    setRetry(1);
  };

  // 사용자의 문제 풀이 결과
  useEffect(() => {
    // 문제 정답 수와 오답 수를 더한 값을 통해 10문제 모두 문제를 풀었는지 여부 확인
    const NumberOfResult = wrongList.length + score;
    if (NumberOfResult !== 10) {
      // 잘 못된 참조입니다 문구가 있는 에러 페이지로 이동 후 잠시 후 자동으로 메인 페이지로 이동시키기
      window.location.href = "/error";
    }
    // 정상적인 문제 풀이를 했을 경우 시간 값 추출
    TimeCheck(startTime, endTime);
    // 정답 수와 오답 수 배열에 저장
    const scoreValue = [score, wrongList.length];
    setScoreData(scoreValue);
  }, [wrongList]);

  // 소요된 시간 구하기 -> 종료 시간이 제대로 넘어왔으 경우 실행
  useEffect(() => {
    if (Object.keys(start).length === 0) {
      return;
    }
    const milliSeconds = endTime - startTime;

    console.log(Math.round((milliSeconds / (1000 * 60)) % 60));
    console.log((milliSeconds / (1000 * 60)) % 60);

    console.log(Math.round((milliSeconds / 1000) % 60));

    const hours = Math.floor((milliSeconds / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((milliSeconds / (1000 * 60)) % 60);
    const seconds = Math.floor((milliSeconds / 1000) % 60);

    let resultTime = "";

    if (hours !== 0) {
      resultTime = `${hours}시 ${minutes}분 ${seconds}초`;
    } else {
      if (minutes !== 0) {
        resultTime = `${minutes}분 ${seconds}초`;
      } else {
        resultTime = `${seconds}초`;
      }
    }
    const resultList = [startData, endData, resultTime];
    setResultData(resultList);

    return;
  }, [end]);

  return (
    <div className="flex flex-col items-center bg-slate-800">
      <h1 className="text-7xl font-bold mt-10 text-white">Result</h1>

      <Div>
        <Tooltip title={timeTooltip} detail={timeExplan} />
        <div className="w-full px-4 mt-10 md:px-0 md:w-3/4">
          <Table tableHead={tableHead} resultData={resultData} />
        </div>
        <div className="w-full px-4 my-10 md:px-0 md:w-3/4">
          <Table tableHead={scoreHead} resultData={scoreData} />
        </div>
      </Div>
      <Div>
        <H3>정답/오답 비율</H3>
        <ScorePieChart answer={score} wrong={wrongList.length} />
        <div className="flex mb-10">
          <div className="w-12 h-6 mr-5 bg-blue-500 text-white text-center items-center">
            정답
          </div>
          <div className="w-12 h-6 bg-red-500 text-white text-center items-center">
            오답
          </div>
        </div>
      </Div>
      <Div>
        <Tooltip title={questionTooltip} detail={questionExplan} />
        {wrongList &&
          wrongList.map((list, index) => (
            <Note
              key={index}
              difficulty={list[0].difficulty}
              question={list[0].question}
              incorrect={list[0].incorrect_answers}
              correct={list[0].correct_answer}
            />
          ))}
      </Div>
      <div className="flex flex-col items-center mt-20">
        <p className="text-3xl mb-10 text-white border-b-2 pb-2">
          수고하셨습니다.
        </p>
        <Link to="/">
          <Button onClick={() => Reset()}>메인 화면으로</Button>
        </Link>
      </div>
    </div>
  );
};

export default Result;

const Div = tw.div`
  flex 
  flex-col 
  mt-10 
  w-full 
  items-center 
  border-2 
  rounded-lg 
  md:w-3/4 
  xl:w-2/4
`;

const H3 = tw.h3`
  text-4xl 
  font-semibold 
  text-white 
  my-10 
  border-b-2 
  pb-2 
  w-3/4 
  text-center
`;

const Button = tw.button`
  mb-20 
  border-2 
  rounded-md 
  border-black 
  w-32 
  h-10 
  text-md 
  bg-slate-300 
  hover:bg-slate-100 
  transition-all 
  ease-in-out 
  duration-150
`;
