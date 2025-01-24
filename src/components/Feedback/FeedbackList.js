import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFeedback } from '../../redux/slices/feedbackSlice';
import './FeedbackList.css';

function FeedbackList() {
  const feedbacks = useSelector((state) => state.feedbacks);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Customer Feedback</h2>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>
            {feedback.message}
            <button onClick={() => dispatch(deleteFeedback(feedback.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackList;
