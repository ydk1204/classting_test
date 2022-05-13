import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/modal/modal";
import tw from "tailwind-styled-components";

const Main = () => {
  const [isModal, setIsModal] = useState(false);

  const showModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    document.body.classList.add("stop-scroll");
    setIsModal(true);
  };

  return (
    <>
      {isModal && <Modal setIsModal={setIsModal} />}
      <Div>
        <H1>Classting Test</H1>
        <Link to="/quizpage">
          <QuizButton>퀴즈 풀기</QuizButton>
        </Link>
        <HelpButton onClick={(e) => showModal(e)}>도움말</HelpButton>
      </Div>
    </>
  );
};

export default Main;

const Div = tw.div`
  flex 
  flex-col 
  w-full 
  h-screen 
  justify-center 
  items-center 
  bg-slate-800
`;

const H1 = tw.h1`
  text-4xl 
  font-bold 
  text-white 
  mb-20 
  md:text-6xl 
  md:font-bold 
  lg:text-7xl 
  lg:font-extrabold
`;

const QuizButton = tw.button`
  w-36 
  h-12 
  rounded-full 
  bg-lime-400 
  text-lg 
  font-semibold
`;

const HelpButton = tw.button`
  mt-10 
  underline 
  underline-offset-4 
  cursor-help 
  text-white
`;
