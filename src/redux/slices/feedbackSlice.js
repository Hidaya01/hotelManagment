import { createSlice } from '@reduxjs/toolkit';

const feedbackSlice = createSlice({
  name: 'feedbacks',
  initialState: [],
  reducers: {
    addFeedback(state, action) {
      state.push(action.payload);
    },
    deleteFeedback(state, action) {
      return state.filter(feedback => feedback.id !== action.payload);
    },
  },
});

export const { addFeedback, deleteFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
