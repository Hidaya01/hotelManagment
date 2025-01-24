import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteReservation } from '../../redux/slices/reservationSlice';
import './ReservationList.css';

function ReservationList() {
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Your Reservations</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            {reservation.city} - {reservation.date} - {reservation.roomType}
            <button onClick={() => dispatch(deleteReservation(reservation.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservationList;
