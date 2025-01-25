import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback } from '../../redux/slices/feedbackSlice';
import './FeedbackForm.css';

function FeedbackForm() {
  const [content, setContent] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFeedback({ id: Date.now(), content }));
    setContent('');
    setSuccessMessage('Feedback added successfully!');
    setTimeout(() => setSuccessMessage(''), 3000); // Hide message after 3 seconds
  };

  return (
    <form id="feedback-form" onSubmit={handleSubmit}>
      <h2>New Feedback</h2>
      <textarea
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Feedback"
      />
      <button type="submit">Add Feedback</button>
      {successMessage && <p id="success-message">{successMessage}</p>}
    </form>
  );
}

export default FeedbackForm;
