import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(parseInt(5));

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds((sec) => parseInt(sec) - 1);
      } else if (parseInt(seconds) === 0) {
        navigate("/");
        clearInterval(countdown);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [seconds]);

  return (
    <main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <div>
        <div className="absolute flex justify-center w-full bottom-30 left-0 mb-10">
          <p
            className={`text-xl font-semibold ${
              seconds <= 2 ? `text-sky-500` : `text-white`
            }`}
          >
            {seconds}초 뒤에 메인 페이지로 이동합니다.
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
