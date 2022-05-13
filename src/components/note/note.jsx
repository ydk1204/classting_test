import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";

const Note = ({ difficulty, question, incorrect, correct }) => {
  const [quest, setQuest] = useState([]);

  const shuffle = () => {
    const quest1 = incorrect;
    const quest2 = [correct];
    const list = [...quest1, ...quest2];
    list.sort(() => Math.random() - 0.5);
    setQuest((val) => list);
    return;
  };

  useEffect(() => {
    const btn = document.querySelectorAll(".radioBox");

    for (let data of btn) {
      data.childNodes[0].disabled = true;
      if (data.innerText === correct) {
        data.classList.remove("bg-slate-700/50");
        data.classList.add("bg-blue-700");
      }
    }
  }, [quest]);

  useEffect(() => {
    shuffle();
  }, [incorrect]);

  return (
    <div className="mb-10 flex justify-center w-full">
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
        </Head>
        <p className="m-4 h-[20%] text-xl">Q. {question && question}</p>
        <QuestionBox>
          <QuestionTitle>
            <p>보기 문항</p>
            <div className="flex">
              <P>정답</P>
            </div>
          </QuestionTitle>
          <div className="h-[65%] grid grid-cols-1 gap-6 md:grid-cols-2">
            <Label>
              <input type="radio" name="animal" value={quest && quest[0]} />
              {quest && quest[0]}
            </Label>
            <Label>
              <input type="radio" name="animal" value={quest && quest[1]} />
              {quest && quest[1]}
            </Label>
            <Label>
              <input type="radio" name="animal" value={quest && quest[2]} />
              {quest && quest[2]}
            </Label>
            <Label>
              <input type="radio" name="animal" value={quest && quest[3]} />
              {quest && quest[3]}
            </Label>
          </div>
        </QuestionBox>
      </Container>
    </div>
  );
};

export default Note;

const Container = tw.div`
  border-[2px] 
  rounded-md 
  w-full 
  mx-4 
  h-full 
  flex-col 
  justify-center 
  items-center 
  bg-slate-50 
  border-black 
  mb-10 
  md:mx-0 
  md:w-3/4
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

const QuestionTitle = tw.div`
  mx-2 
  h-[25%] 
  flex 
  justify-between 
  items-center 
  text-md 
  font-semibold 
  border-b-2 
  border-black
`;

const P = tw.p`
  rounded-md 
  w-16 
  h-5 
  text-sm 
  items-center 
  flex 
  justify-center 
  cursor-default 
  bg-blue-700 
  text-white
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
  cursor-default
  radioBox
`;
