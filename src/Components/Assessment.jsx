import React, { useState } from 'react';
import Questions from './Questions';
import Result from './Result';
import { questions } from './data';

export default function Asessment (){
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleAnswerSubmit = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentQuestion].correctAnswer;
    setUserAnswers({ ...userAnswers, [currentQuestion]: isCorrect });
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <Questions
          question={questions[currentQuestion]}
          onAnswerSubmit={handleAnswerSubmit}
        />
      ) : (
        <Result score={score} totalQuestions={questions.length} />
      )}
    </div>
  );
};

