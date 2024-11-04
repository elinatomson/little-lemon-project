import { MemoryRouter } from 'react-router-dom';
import { render, screen , fireEvent} from '@testing-library/react';
import BookingPage from '../src/components/Bookingpage';
import { fetchAPI } from '../src/bookingAPI';
import BookingForm from '../src/components/sections/BookingForm';

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

const fillFormAndSubmit = (name, email, guests) => {
  fireEvent.change(screen.getByLabelText(/Your name/i), { target: { value: name } });
  fireEvent.change(screen.getByLabelText(/Your email/i), { target: { value: email } });
  fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2024-11-03' } });
  fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '18:00' } });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: guests } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });
};

describe('BookingForm Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={['18:00', '19:00', '20:00']} updateTimes={jest.fn()} />
      </MemoryRouter>
    );
  });
  test('submit button disabled without data', () => {
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeDisabled();
  });

  test('enables the submit button when valid input is provided', () => {
    fillFormAndSubmit('John', 'john@example.com', '2');
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeEnabled();
  });

  test('displays error message when name, email or no of guests are too short', () => {
    fillFormAndSubmit('A', 'a@a', '0');
    fireEvent.click(screen.getByRole('button', { name: /Make Your reservation/i }));
    expect(screen.getByText(/too short \(min 2 characters\)/i)).toBeInTheDocument();
    expect(screen.getByText(/too short \(min 5 characters\)/i)).toBeInTheDocument();
    expect(screen.getByText(/there has to be at least 1 guest/i)).toBeInTheDocument();
  });

  test('displays error message when name, email or no of guests are too long', () => {
    fillFormAndSubmit('Aaaaaaaaaaaaaaaaaaaaaa', 'Aaaaaaaaaaaaaaaaaaaaa@aaaaaaaaaa.aaaaaaaaaaa', '16');
    fireEvent.click(screen.getByRole('button', { name: /Make Your reservation/i }));
    expect(screen.getByText(/too long \(max 20 characters\)/i)).toBeInTheDocument();
    expect(screen.getByText(/too long \(max 30 characters\)/i)).toBeInTheDocument();
    expect(screen.getByText(/the maximum number of guests is 10./i)).toBeInTheDocument();
  });
});