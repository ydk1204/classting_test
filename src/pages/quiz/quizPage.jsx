import React, { useEffect, useState } from "react";
import Card from "../../components/card/card";
import ProgressBar from "../../components/progressBar/progressBar";

const QuizPage = ({
  question,
  setScore,
  setStartTime,
  setEndTime,
  setWrongQuestion,
}) => {
  const [queNumber, setQueNumer] = useState(0);
  const [wrongNumber, setWrongNumber] = useState();
  const [currentQuest, setCurrentQuest] = useState(question[0]);

  useEffect(() => {
    setCurrentQuest(question[queNumber]);
  }, [question, queNumber]);

  useEffect(() => {
    if (wrongNumber !== undefined) {
      setWrongQuestion(question[wrongNumber]);
    }
  }, [wrongNumber]);

  useEffect(() => {
    const startTime = new Date();
    setStartTime(startTime);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-slate-700">
      <ProgressBar questionNumber={queNumber} />
      <div className="w-full h-screen flex justify-center items-center">
        {currentQuest && (
          <Card
            difficulty={currentQuest.difficulty}
            question={currentQuest.question}
            incorrect={currentQuest.incorrect_answers}
            correct={currentQuest.correct_answer}
            setQueNumer={setQueNumer}
            setWrongNumber={setWrongNumber}
            queNumber={queNumber}
            setScore={setScore}
            setEndTime={setEndTime}
          />
        )}
      </div>
    </div>
  );
};

export default QuizPage;
