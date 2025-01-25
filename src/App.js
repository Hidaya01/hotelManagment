import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Home from './components/Home/Home';
import ReservationForm from './components/Reservation/ReservationForm';
import ReservationList from './components/Reservation/ReservationList';
import FeedbackForm from './components/Feedback/FeedbackForm';
import Profile from './components/Profile/Profile';
import ProfileList from './components/Profile/ProfileList';
import FeedbackList from './components/Feedback/FeedbackList';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import DataComponent from './components/Data/DataComponent'; // Import DataComponent
import PostDataComponent from './components/Data/PostDataComponent';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
       
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reservations" element={<PrivateRoute><ReservationList /></PrivateRoute>} />
        <Route path="/reservation/new" element={<PrivateRoute><ReservationForm /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/profiles" element={<PrivateRoute><ProfileList /></PrivateRoute>} />
        <Route path="/feedbacks" element={<PrivateRoute><FeedbackList /></PrivateRoute>} />
        <Route path="/feedback/new" element={<PrivateRoute><FeedbackForm /></PrivateRoute>} />
        <Route path="/data" element={<PrivateRoute><DataComponent /></PrivateRoute>} /> 
        <Route path="/post-data" element={<PrivateRoute><PostDataComponent /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
