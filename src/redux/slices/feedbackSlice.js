import { createSlice } from '@reduxjs/toolkit';

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState: [],
  reducers: {
    addFeedback(state, action) {
      state.push(action.payload);
    },
    updateFeedback(state, action) {
      const { id, content } = action.payload;
      const feedback = state.find((feedback) => feedback.id === id);
      if (feedback) {
        feedback.content = content;
      }
    },
    deleteFeedback(state, action) {
      return state.filter((feedback) => feedback.id !== action.payload.id);
    },
  },
});

export const { addFeedback, updateFeedback, deleteFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
