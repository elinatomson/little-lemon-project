import { Link, useLocation } from 'react-router-dom';

function SuccessfulBooking() {
  const location = useLocation();
  const { name, date, selectedTime, guests, occasion } = location.state || {};

  return (
    <span className='bookingConfirmation'>
        <h1>Hi {name}! You have booked a table for {guests} on {date} at {selectedTime} for a {occasion} party.</h1>
        <button aria-label="Back to homepage"><Link to="/">Back to homepage</Link></button>
    </span>
  );
};

export default SuccessfulBooking;