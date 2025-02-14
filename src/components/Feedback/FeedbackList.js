import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFeedback, deleteFeedback } from '../../redux/slices/feedbackSlice';
import './FeedbackList.css';

function FeedbackList() {
  const feedbacks = useSelector((state) => state.feedback);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editContent, setEditContent] = useState('');

  const handleEdit = (feedback) => {
    setEditId(feedback.id);
    setEditContent(feedback.content);
  };

  const handleUpdate = (id) => {
    dispatch(updateFeedback({ id, content: editContent }));
    setEditId(null);
    setEditContent('');
  };

  const handleDelete = (id) => {
    dispatch(deleteFeedback({ id }));
  };

  return (
    <div id="feedback-list">
      <h2>Feedback List</h2>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>
            {editId === feedback.id ? (
              <input
                type="text"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
            ) : (
              feedback.content
            )}
            <div className="buttons">
              {editId === feedback.id ? (
                <button className="update-button" onClick={() => handleUpdate(feedback.id)}>Update</button>
              ) : (
                <button className="edit-button" onClick={() => handleEdit(feedback)}>Edit</button>
              )}
              <button className="delete-button" onClick={() => handleDelete(feedback.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackList;
  