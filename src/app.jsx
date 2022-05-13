import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/main";
import QuizPage from "./pages/quiz/quizPage";
import Result from "./pages/result/result";
import NotFound from "./pages/notFound/notFound";
import "./App.css";

function App({ questions }) {
  const [question, setQuestion] = useState([]);
  const [score, setScore] = useState(0);
  const [wrongQuestion, setWrongQuestion] = useState([]);
  const [wrongList, setWrongList] = useState([]);

  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const [retry, setRetry] = useState(0);

  const Reset = () => {
    setScore(0);
    setWrongQuestion([]);
    setWrongList([]);

    setStartTime();
    setEndTime();

    setRetry(0);
  };

  useEffect(() => {
    if (wrongQuestion.length !== 0) {
      const qlist = wrongList;
      qlist.push([wrongQuestion]);
      setWrongList(qlist);
    }
  }, [wrongQuestion]);

  useEffect(() => {
    if (retry !== 0) {
      Reset();
    }
  }, [retry]);

  useEffect(() => {
    questions.loadQuestions().then(setQuestion);
    return;
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/quizpage"
          element={
            <QuizPage
              question={question}
              setScore={setScore}
              setStartTime={setStartTime}
              setEndTime={setEndTime}
              setWrongQuestion={setWrongQuestion}
            />
          }
        />
        <Route
          path="/result"
          element={
            <Result
              score={score}
              wrongList={wrongList}
              startTime={startTime}
              endTime={endTime}
              setRetry={setRetry}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
