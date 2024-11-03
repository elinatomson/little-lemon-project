import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import BookingPage from '../src/components/Bookingpage';
import { fetchAPI } from '../src/bookingAPI';

jest.mock('../src/bookingAPI');

describe('BookingPage Component', () => {

  test('initializeTimes should fetch times for the current date', () => {
    // Mock fetchAPI to return specific times
    const mockTimes = ["18:00", "19:00", "20:00"];
    // Telling Jest to return these specific times whenever fetchAPI is called within this test to verify the function's behavior without any dependence on real data.
    fetchAPI.mockReturnValue(mockTimes);

    // Render the BookingPage component to trigger initializeTimes
    // Since BookingPage relies on routing (using useNavigate), it needs to be within a Router context to work properly.
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    // Checks that fetchAPI was called and it received a Date object as its argument.
    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));

    // mockTimes.forEach((time) => {...})iterates over each time string in mockTimes.
    //.toBeInTheDocument() asserts that each time is actually present in the DOM.
    mockTimes.forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });
});