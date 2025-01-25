import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateReservation, deleteReservation } from '../../redux/slices/reservationSlice';
import './ReservationList.css';

function ReservationList() {
  const reservations = useSelector((state) => state.reservations || []);
  const dispatch = useDispatch();
  const [editingReservation, setEditingReservation] = useState(null);
  const [city, setCity] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomType, setRoomType] = useState('');

  const handleEdit = (reservation) => {
    setEditingReservation(reservation.id);
    setCity(reservation.city);
    setCheckInDate(reservation.checkInDate);
    setCheckOutDate(reservation.checkOutDate);
    setRoomType(reservation.roomType);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (editingReservation) {
      dispatch(updateReservation({ id: editingReservation, city, checkInDate, checkOutDate, roomType }));
      setEditingReservation(null);
      setCity('');
      setCheckInDate('');
      setCheckOutDate('');
      setRoomType('');
    }
  };

  const handleDelete = (id) => {
    if (id) {
      dispatch(deleteReservation(id));
    }
  };

  return (
    <div id="reservation-list-container">
      <h2>Reservation List</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            {editingReservation === reservation.id ? (
              <form onSubmit={handleUpdate}>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                />
                <label>
                  Check-in Date:
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                  />
                </label>
                <label>
                  Check-out Date:
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                  />
                </label>
                <label>
                  Room Type:
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                  >
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                    <option value="suite">Suite</option>
                  </select>
                </label>
                <button className="update-button" type="submit">Update</button>
              </form>
            ) : (
              <>
                <span>{reservation.city} - {reservation.checkInDate} to {reservation.checkOutDate} - {reservation.roomType}</span>
                <div className="buttons">
                  <button className="edit-button" onClick={() => handleEdit(reservation)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(reservation.id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservationList;
