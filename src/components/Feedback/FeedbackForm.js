import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback } from '../../redux/slices/feedbackSlice';
import './FeedbackForm.css';

function FeedbackForm() {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFeedback({ id: Date.now(), content }));
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Feedback</h2>
      <textarea
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Feedback"
      />
      <button type="submit">Add Feedback</button>
    </form>
  );
}

export default FeedbackForm;
