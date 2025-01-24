import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../../redux/slices/reservationSlice';
import './ReservationForm.css';

function ReservationForm() {
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [roomType, setRoomType] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReservation({ city, date, roomType }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        value={roomType}
        onChange={(e) => setRoomType(e.target.value)}
        placeholder="Room Type"
      />
      <button type="submit">Add Reservation</button>
    </form>
  );
}

export default ReservationForm;
