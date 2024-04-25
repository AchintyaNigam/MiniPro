import React from 'react';
import './learn.css';
import './quiz.css';


export default function Result ({ score, totalQuestions }) {
  return (
    <div className='quiz'>
      <h2>Quiz Result</h2>
      <p>Your score: {score} out of {totalQuestions}</p>
      <a href="/learn"><div className='button'>Back</div></a>
      <br />
      <br />
      <a href="/assessment"><div className='button'>Redo</div></a>

    </div>

  );
};

