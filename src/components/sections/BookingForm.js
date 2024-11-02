import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function BookingForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const navigate = useNavigate();

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setDate(selectedDate.toISOString().split('T')[0]);
    props.updateTimes(selectedDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <form onSubmit={handleSubmit}>
      <h1>Book a table</h1>
      <p>Please fill in the form below.</p>

      <label htmlFor="name">Your name</label>
      <input onChange={(e) => setName(e.target.value)} type="text" id="name" placeholder='Insert Your name' value={name} required/>

      <label htmlFor="email">Your email</label>
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
      <input onChange={(e) => setGuests(e.target.value)} type="number" min="1" max="10" id="guests" placeholder='Insert number of guests' value={guests} required/>

      <label htmlFor="occasion">Occasion</label>
      <select onChange={(e) => setOccasion(e.target.value)} id="occasion" value={occasion}>
        <option value="" disabled>
          Choose an occasion
        </option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Other</option>
      </select>
      <button type="submit">Make Your reservation</button>
    </form>
  );
};

export default BookingForm;