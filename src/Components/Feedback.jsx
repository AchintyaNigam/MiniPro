import React, { useState } from 'react';
import './FeedbackForm.css';
import './learn.css'

export default function FeedbackForm ({ onSubmit }) {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [learnedShapes, setLearnedShapes] = useState('');
  const [recommendation, setRecommendation] = useState(0);

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'feedback':
        setFeedback(e.target.value);
        break;
      case 'rating':
        setRating(Number(e.target.value));
        break;
      case 'learnedShapes':
        setLearnedShapes(e.target.value);
        break;
      case 'recommendation':
        setRecommendation(Number(e.target.value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackData = {
      feedback,
      rating,
      learnedShapes,
      recommendation,
    };
    onSubmit(feedbackData);
    setFeedback('');
    setRating(0);
    setLearnedShapes('');
    setRecommendation(0);
  };

  return (
    <>
      <div id="nav">
            <a href="/learn" target="_top">
			<div id = "sign_up" class = "nav_sections">
				Back
			</div>
			</a>
            <a href="/" target="_top">
			<div id = "logout" class = "nav_sections">
				Logout
			</div>
			</a>
			<a href="/signin" target = "_top">
			</a>
			<a href="/reg" target = "_top">
			<div id = "register" class="nav_sections">
				Register
			</div>
			</a>
			<a href="/threed" target = "_top">
            <div id = "threed" class="nav_sections">
                3D Shapes!
            </div>
        	</a>
			<a href="/assessment" target = "_top">
            <div id = "assessment" class="nav_sections">
                Assessment
            </div>
        	</a>
			<a href="/feedback" target = "_top">
            <div id = "feedback" class="nav_sections">
                Feedback
            </div>
        	</a>
		</div>
    <div className='form-container'>
          <div className="feedback-form">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>How much do you rate this course on a scale of 1 to 5?</label>
          <br />
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            name="rating"
            onChange={handleChange}
          />
          <br />
          <br />
        </div>
        <div>
          <label>Do you think you learned about shapes? (yes or no)</label>
          <br />
          <input
            type="text"
            value={learnedShapes}
            name="learnedShapes"
            onChange={handleChange}
          />
          <br />
          <br />
        </div>
        <div>
          <label>How much would you recommend this course?</label>
          <br />
          <input
            type="number"
            min="0"
            max="10"
            step="0.5"
            value={recommendation}
            name="recommendation"
            onChange={handleChange}
          />
          <br />
          <br />
        </div>
        <div>
          <label>Additional Feedback:</label>
          <textarea
            placeholder="Enter your feedback here..."
            value={feedback}
            name="feedback"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
    </div>
  </>   
  );
};

