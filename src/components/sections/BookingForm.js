import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

function BookingForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [errors, setErrors] =useState([])

  const today = new Date().toISOString().split("T")[0];

  const navigate = useNavigate();

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setDate(selectedDate.toISOString().split('T')[0]);
    props.updateTimes(selectedDate);
  };

  const submitForm = (e) => {
    e.preventDefault();

    setErrors([]);

    const newErrors = [];

    if (name.length < 2) {
      newErrors.push("name");
    } else if (name.length > 20) {
      newErrors.push("name_length");
    }

    if (email.length < 5) {
      newErrors.push("email");
    } else if (email.length > 30) {
      newErrors.push("email_length");
    }

    if ( guests < 1) {
      newErrors.push("min_guests");
    } else if (guests > 10) {
      newErrors.push("max_guests");
    }

    setErrors(newErrors);
    if (newErrors.length > 0) {
      return;
    }

    navigate('/bookingConfirmed', {
      state: {
        name,
        email,
        date,
        selectedTime,
        guests,
        occasion
      }
    });

    setName("");
    setEmail("");
    setDate("");
    setSelectedTime("");
    setGuests("");
    setOccasion("");
  }

  return (
    <form onSubmit={submitForm}>
      <h1>Book a table</h1>
      <p>Please fill in the form below.</p>

      <label htmlFor="name">Your name</label>
        {errors.includes("name") && (
          <p className="alert">Too short (min 2 characters).</p>
        )}
        {errors.includes("name_length") && (
          <p className="alert">Too long (max 20 characters).</p>
        )}
      <input onChange={(e) => setName(e.target.value)} type="text" id="name" placeholder='Insert Your name' value={name} required/>

      <label htmlFor="email">Your email</label>
        {errors.includes("email") && (
          <p className="alert">Too short (min 5 characters).</p>
        )}
        {errors.includes("email_length") && (
          <p className="alert">Too long (max 30 characters).</p>
        )}
      <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder='Insert Your email' value={email} required/>

      <label htmlFor="res-date">Choose date</label>
      <input onChange={handleDateChange} type="date" id="res-date" min={today} value={date} required/>

      <label htmlFor="res-time">Choose time</label>
      <select onChange={(e) => setSelectedTime(e.target.value)} id="res-time" value={selectedTime} required>
        <option value="" disabled>
          Choose a time
        </option>
        {props.availableTimes.map((availableTime) => (
          <option key={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
        {errors.includes("min_guests") && (
          <p className="alert">There has to be at least 1 guest.</p>
        )}
        {errors.includes("max_guests") && (
          <p className="alert">The maximum number of guests is 10.</p>
        )}
      <input onChange={(e) => setGuests(e.target.value)} type="number" id="guests" placeholder='Insert number of guests' value={guests} required/>

      <label htmlFor="occasion">Occasion</label>
      <select onChange={(e) => setOccasion(e.target.value)} id="occasion" value={occasion} required>
        <option value="" disabled>
          Choose an occasion
        </option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Other</option>
      </select>
      <button type="submit" aria-label="Make your reservation" disabled={!name || !email || !date || !selectedTime || !guests || !occasion}>Make Your reservation</button>
      <Link to="/" aria-label="Cancel">
        <button className='cancel-button'>Cancel</button>
      </Link>
    </form>
  );
};

export default BookingForm;