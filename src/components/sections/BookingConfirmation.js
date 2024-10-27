import { Link, useLocation } from 'react-router-dom';

function SuccessfulBooking() {
  const location = useLocation();
  const { name, date, time, guests, occasion } = location.state || {};

  return (
    <span>
        <h2>Hi {name}! You have booked a table for {guests} on {date} at {time} for a {occasion} party.</h2>
        <button><Link to="/">Back to homepage</Link></button>
    </span>
  );
};

export default SuccessfulBooking;