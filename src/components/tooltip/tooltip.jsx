import React from "react";
import tw from "tailwind-styled-components";

const Tooltip = ({ title, detail }) => {
  return (
    <div className="w-3/4 my-10 border-b-2 pb-2 flex items-center">
      <h3 className="text-4xl font-semibold text-white  w-full text-center">
        {title && title}
      </h3>
      <Div>
        <Span>{detail && detail}</Span>
        <span>?</span>
      </Div>
    </div>
  );
};

export default Tooltip;

const Div = tw.div`
  relative 
  top-0 
  right-14 
  rounded-full 
  text-white 
  text-md 
  border-2 
  w-8 
  h-7 
  flex 
  itmes-center 
  justify-center 
  cursor-help 
  tooltip 
  md:right-20 
  xl:right-32
`;

const Span = tw.span`
  absolute 
  top-0 
  left-[-200%] 
  -translate-x-1/2 
  bg-indigo-600 
  text-white 
  whitespace-nowrap 
  p-2 
  rounded-lg 
  invisible 
  opacity-0 
  transition-opacity 
  duration-150 
  ease-in-out 
  md:left-1/2 
  tooltipText
`;
