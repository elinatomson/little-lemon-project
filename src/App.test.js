import { render, screen } from '@testing-library/react';
import BookingForm from '../src/components/sections/BookingForm';
import { initializeTimes, updateTimes } from '../src/components/Bookingpage';
import { MemoryRouter } from 'react-router-dom';

test('renders the BookingForm heading', () => {
  const mockAvailableTimes = ["18:00", "19:00", "20:00"];
  //The MemoryRouter simulates a router environment
  render(
    <MemoryRouter>
      <BookingForm availableTimes={mockAvailableTimes} />
    </MemoryRouter>
  );
  const headingElement = screen.getByText("Book a table");
  expect(headingElement).toBeInTheDocument();
});

test('testing initializeTimes function', () => {
  const expectedTimes = ["17:00", "19:00", "20:00", "22:00"];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});
