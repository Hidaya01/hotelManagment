import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateReservation, deleteReservation } from '../../redux/slices/reservationSlice';
import './ReservationList.css';

function ReservationList() {
  const reservations = useSelector((state) => state.reservations || []); // Ajoutez une valeur par défaut vide
  const dispatch = useDispatch();
  const [editingReservation, setEditingReservation] = useState(null);
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [roomType, setRoomType] = useState('');

  const handleEdit = (reservation) => {
    setEditingReservation(reservation.id);
    setCity(reservation.city);
    setDate(reservation.date);
    setRoomType(reservation.roomType);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (editingReservation) {
      dispatch(updateReservation({ id: editingReservation, city, date, roomType }));
      setEditingReservation(null);
      setCity('');
      setDate('');
      setRoomType('');
    }
  };

  const handleDelete = (id) => {
    if (id) {
      dispatch(deleteReservation(id));
    }
  };

  return (
    <div className="reservation-list-container">
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
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Date"
                />
                <input
                  type="text"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  placeholder="Room Type"
                />
                <button type="submit">Update</button>
              </form>
            ) : (
              <>
                <span>{reservation.city} - {reservation.date} - {reservation.roomType}</span>
                <button onClick={() => handleEdit(reservation)}>Edit</button>
                <button onClick={() => handleDelete(reservation.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservationList;
