import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import ReservationForm from './components/Reservation/ReservationForm';
import ReservationList from './components/Reservation/ReservationList';
import Profile from './components/Profile/Profile';
import FeedbackForm from './components/Feedback/FeedbackForm';
import FeedbackList from './components/Feedback/FeedbackList';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reservations" element={<ReservationList />} />
        <Route path="/reservation/new" element={<ReservationForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feedbacks" element={<FeedbackList />} />
        <Route path="/feedback/new" element={<FeedbackForm />} />
      </Routes>
    </div>
  );
}

export default App;
