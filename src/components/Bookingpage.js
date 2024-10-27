import BookingForm from "./sections/BookingForm";
import { useState, useReducer } from 'react';

function BookingPage() {

  const updateTimes = () => {
    return initializeTimes;
  };

  const initializeTimes = () => {
    return [
      "17:00",
      "19:00",
      "20:00",
      "22:00"
    ];
  };

  const [availableTimes, dispatch] = useReducer(updateTimes(), initializeTimes());

  return (
    <>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
    </>
  );
};

export default BookingPage;