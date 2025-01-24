import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback } from '../../redux/slices/feedbackSlice';
import './FeedbackForm.css';

function FeedbackForm() {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFeedback({ message }));
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Leave Your Feedback</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your feedback"
      />
      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;
