import BookingForm from "./sections/BookingForm";
import { useReducer } from 'react';
import { fetchAPI } from "../bookingAPI"

function BookingPage() {

  // Initialize the available times to the current date's available times
  const initializeTimes = () => {
    return fetchAPI(new Date());
  };

  // Function to handle date change and dispatch the action
  const fetchAvailableTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', date });
  };

  // Reducer to manage available times on another date
  function updateTimes(state, action) {
    // Check if the action type is to update times
    if (action.type === 'UPDATE_TIMES') {
      return fetchAPI(action.date);  // Fetch new times based on the provided date
    }
    return state;  // Return the current state if action type is not recognized
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <BookingForm availableTimes={availableTimes} updateTimes={fetchAvailableTimes}/>
    </>
  );
};

export default BookingPage;