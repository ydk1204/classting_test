import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import tw from "tailwind-styled-components";

const Card = ({
  setQueNumer,
  difficulty,
  question,
  incorrect,
  correct,
  setWrongNumber,
  queNumber,
  setScore,
  setEndTime,
}) => {
  const [currentButton, setCurrentButton] = useState();
  const [answerCheck, setAnswerCheck] = useState(0);
  const [submitAnswer, setSubmitAnswer] = useState();
  const [quest, setQuest] = useState([]);
  const btnRef = useRef();
  const navigate = useNavigate();

  const Inactivate = (elem) => {
    elem.classList.remove("bg-red-500");
    elem.classList.add("bg-slate-700/50");
  };

  const Activate = (elem) => {
    elem.classList.remove("bg-slate-700/50");
    elem.classList.add("bg-red-500");
    setCurrentButton(elem);
  };

  // 점수 매기는 부분 엘리스 첫번째 프로젝트 처럼 객체 만들어서 각 번호마다 점수 추가하는 방식으로 변경하기
  const AnswerCheck = (elem) => {
    btnRef.current.disabled = true;
    const btn = document.querySelectorAll(".selectBox");

    for (let data of btn) {
      data.childNodes[0].disabled = true;
      data.classList.add("bg-slate-700");
    }

    if (elem === correct) {
      setScore((val) => val + 1);
      setAnswerCheck(1);
    } else {
      setWrongNumber(queNumber);
      setAnswerCheck(2);
    }
  };

  const onChangeRadio = (e) => {
    if (currentButton) {
      Inactivate(currentButton);
    }
    Activate(e.target.parentNode);
    setSubmitAnswer(e.target.value);
  };

  const Next = () => {
    if (queNumber === 9) {
      const endTime = new Date();
      setEndTime(endTime);
      navigate("/result");
    }
    setQueNumer((val) => val + 1);
    setAnswerCheck(0);
    setSubmitAnswer();
    btnRef.current.disabled = false;
    const btn = document.querySelectorAll(".selectBox");

    for (let data of btn) {
      data.childNodes[0].checked = false;
      data.childNodes[0].disabled = false;
      data.classList.remove("bg-red-500");
      data.classList.remove("bg-slate-700");
      data.classList.add("bg-slate-700/50");
    }
  };

  const shuffle = () => {
    const quest1 = incorrect;
    const quest2 = [correct];

    const list = [...quest1, ...quest2];

    list.sort(() => Math.random() - 0.5);
    setQuest((val) => list);
    return;
  };

  useEffect(() => {
    shuffle();
  }, [incorrect]);

  return (
    <>
      <Container>
        <Head>
          <div className="flex ml-4">
            <p className="mr-2">난이도 :</p>
            <p
              className={`${
                difficulty === "hard"
                  ? "text-red-500"
                  : difficulty === "medium"
                  ? "text-yellow-300"
                  : "text-sky-500"
              }`}
            >
              {difficulty && difficulty}
            </p>
          </div>
          <div className="mr-4">
            <NextBtn
              className={` ${answerCheck !== 0 ? "block" : "hidden"}`}
              onClick={() => Next()}
            >
              다음 문제
            </NextBtn>
          </div>
        </Head>
        <p className="m-4 h-[20%] text-xl">Q. {question && question}</p>
        <QuestionBox>
          <QuestionHead>
            <p>내 답안</p>
            <div className="flex">
              {answerCheck !== 0 ? (
                <P
                  className={`${
                    answerCheck === 1 ? `bg-sky-400` : `bg-red-400`
                  }`}
                >
                  {answerCheck === 1 ? "정답" : "오답"}
                </P>
              ) : null}
              <SubmitBtn
                className={` ${
                  submitAnswer !== undefined
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-50"
                }`}
                onClick={() => AnswerCheck(submitAnswer)}
                ref={btnRef}
              >
                제출
              </SubmitBtn>
            </div>
          </QuestionHead>
          <div className="h-[75%] grid grid-cols-1 gap-6 md:grid-cols-2">
            <Label>
              <input
                type="radio"
                name="animal"
                value={quest && quest[0]}
                onChange={onChangeRadio}
              />
              {quest && quest[0]}
            </Label>
            <Label>
              <input
                type="radio"
                name="animal"
                value={quest && quest[1]}
                onChange={onChangeRadio}
              />
              {quest && quest[1]}
            </Label>
            <Label>
              <input
                type="radio"
                name="animal"
                value={quest && quest[2]}
                onChange={onChangeRadio}
              />
              {quest && quest[2]}
            </Label>
            <Label>
              <input
                type="radio"
                name="animal"
                value={quest && quest[3]}
                onChange={onChangeRadio}
              />
              {quest && quest[3]}
            </Label>
          </div>
        </QuestionBox>
      </Container>
    </>
  );
};

export default Card;

const Container = tw.div`
  border-[2px] 
  rounded-md 
  w-full 
  h-full 
  flex-col 
  justify-center 
  items-center 
  bg-slate-50 
  border-black 
  md:h-3/4 
  md:w-3/4 
  xl:h-2/4 
  xl:w-2/4
`;

const Head = tw.div`
  border-b-[2px]
  border-black 
  h-[15%] 
  text-lg 
  flex 
  justify-between 
  items-center 
  bg-slate-900/80 
  text-white
`;

const QuestionBox = tw.div`
  m-4 
  h-[55%] 
  border-2 
  border-black 
  rounded-md 
  bg-slate-700/60 
  md:h-[50%]
`;

const QuestionHead = tw.div`
  mx-2 
  h-[20%] 
  flex 
  justify-between 
  items-center 
  text-md 
  font-semibold 
  border-b-2 
  border-black
`;

const NextBtn = tw.button`
  border-2 
  w-24 
  border-white 
  rounded-lg 
  hover:bg-lime-600
`;

const P = tw.p`
  border-[1px] 
  rounded-md 
  w-16 
  text-center 
  cursor-default 
`;

const SubmitBtn = tw.button`
  ml-4 
  w-16 
  border-[1px] 
  rounded-md 
  bg-white 
  font-semibold 
  hover:bg-slate-300 
  transition-all 
  ease-in-out 
  duration-150
`;

const Label = tw.label`
  border-black 
  border-2 
  rounded-md 
  m-2 
  p-2 
  flex 
  items-center 
  bg-slate-700/50 
  cursor-pointer
  selectBox
`;
