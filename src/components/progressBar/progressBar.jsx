import React, { useState, useEffect } from "react";

const ProgressBar = ({ questionNumber }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue((questionNumber / 10) * 100);
  }, [questionNumber]);

  return (
    <>
      <div
        className={`relative top-0 left-0 bg-slate-800 border-[1px] rounded-md w-full`}
      >
        <p className="w-full top-[-0.2em] absolute text-center text-white cursor-default">
          {Math.ceil(value)}
        </p>
        <div
          className={`bg-green-500 h-4 rounded-md transition-all duration-300 ease-in`}
          style={{ width: `${value / 1.014}%` }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
