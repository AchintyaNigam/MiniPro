import React from 'react';
import './quiz.css';
import './learn.css'

export default function Questions ({ question, onAnswerSubmit }) {
    return (
        <div className='quiz'>
          <h3>{question.No}/5</h3>
          <h2>{question.text}</h2> 

          <ul className="option-container">
            {question.options.map((option, index) => (
              <li key={index}>
              
                <button 
                  className="option-button"
                  onClick={() => onAnswerSubmit(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
};
