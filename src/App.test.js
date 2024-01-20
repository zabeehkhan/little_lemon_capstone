import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import BookingPage from './pages/BookingPage';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={['17:00', '18:00', '20:00']} />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})

describe("Booking Form", () => {
    test("Booking form submission is disabled if form not valid", () => {
        const handleSubmit = jest.fn();

        render(<BookingForm />)

        const numberOfGuests = screen.getByLabelText("Number of Guests");
        expect(numberOfGuests).toHaveAttribute("min");

    });

});