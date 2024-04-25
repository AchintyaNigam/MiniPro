import React from 'react';
import './learn.css'


export default function Result ({ score, totalQuestions }) {
  return (
    <div className='quiz'>
      <h2>Quiz Result</h2>
      <p>Your score: {score} out of {totalQuestions}</p>
      <a href="/learn"><div>Back</div></a>
      <a href="/assessment"><div>Redo</div></a>

    </div>

  );
};

