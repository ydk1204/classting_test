import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import tw from "tailwind-styled-components";

const Modal = ({ setIsModal }) => {
  const closeModal = () => {
    document.body.classList.remove("stop-scroll");
    setIsModal(false);
  };

  return (
    <Div>
      <Container>
        <div className="basis-auto h-[40%] md:basis-1/2 md:h-full">
          <img
            className="w-full h-full object-fit"
            src="./img/classting.jpeg"
            alt="퀴즈 페이지"
          />
        </div>

        <div className="basis-auto p-5 w-full h-full overflow-auto md:p-20 md:basis-1/2">
          <Button onClick={() => closeModal()}>
            <FontAwesomeIcon icon={faXmark} />
          </Button>
          <div className="flex flex-col items-start w-full h-full">
            <h1 className="text-4xl">퀴즈 풀이 방식</h1>
            <div className="mt-16 whitespace-pre-line text-lg py-5">
              <ul className="modal-ul">
                <li>
                  1. 퀴즈 풀기 버튼 클릭 시 퀴즈를 풀 수 있는 페이지로
                  이동합니다.
                </li>
                <li>
                  2. 사용자는 문항에 대한 답안을 4개의 보기 중 하나를 선택할 수
                  있습니다.
                </li>
                <li>3. 답안이 맞았는지 틀렸는지 바로 알 수 있습니다.</li>
                <li>4. 답안을 선택하면 다음 문항을 볼 수 있습니다.</li>
                <li>
                  5. 모든 문항을 다 풀면 사용자는 정답/오답 개수를 볼 수
                  있습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Div>
  );
};

export default Modal;

const Div = tw.div`
  w-screen 
  h-full 
  flex 
  justify-center 
  items-center 
  fixed 
  top-0 
  left-0 
  bg-black 
  bg-opacity-70 
  z-30 
  md:h-screen
`;

const Container = tw.div`
  relative 
  flex 
  flex-col 
  w-screen 
  h-screen 
  bg-white 
  top-0 
  rounded-none 
  overflow-hidden 
  md:flex-row 
  md:w-[90vw] 
  md:h-[70vh] 
  md:rounded-lg 
  xl:h-[90vh]
`;

const Button = tw.button`
  absolute 
  top-8 
  right-8 
  text-2xl 
  w-14 
  h-14 
  rounded-lg 
  bg-white 
  hover:bg-black 
  hover:text-white 
  transition 
  duration-200 
  ease-in-out
`;
