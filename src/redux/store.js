import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import reservationReducer from './slices/reservationSlice';
import profileReducer from './slices/profileSlice';
import feedbackReducer from './slices/feedbackSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    reservations: reservationReducer,
    profile: profileReducer,
    profiles: profileReducer,
    feedbacks: feedbackReducer,
    feedback: feedbackReducer,
  },
});

export default store;
