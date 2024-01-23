import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { BrowserRouter } from 'react-router-dom';

test('Renders the BookingForm heading', () => {
    render(<BrowserRouter><BookingForm /></BrowserRouter>);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})

describe("Booking Form", () => {
    test("Booking form submission is disabled if form not valid", () => {
        render(<BrowserRouter><BookingForm /></BrowserRouter>)

        const numberOfGuests = screen.getByLabelText("Number of Guests");
        expect(numberOfGuests).toHaveAttribute("min");

    });

});