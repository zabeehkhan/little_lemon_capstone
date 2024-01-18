import { useState } from "react";
import { submitAPI } from '../utils/fakeAPI.js';
import { useNavigate } from "react-router-dom";

function BookingForm(props) {
    const navigate = useNavigate();

    const stateData = {
        date: new Date().toISOString().slice(0, 10),
        // time: props.availableTimes[0],
        guests: 1,
        occasion: 'Anniversary',
    }
    const [formData, setFormData] = useState(stateData);



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        const isConfirmed = submitAPI(formData);
        if (isConfirmed) {
            navigate("/confirmed");
        }
    }

    const handleDate = (e) => {
        setFormData({ ...formData, date: e.target.value })

        // get available times for selected date
        props.updateTimes({ date: e.target.value });
    }

    const handleTime = (e) => {
        setFormData({ ...formData, time: e.target.value })
    }

    const handleGuests = (e) => {
        setFormData({ ...formData, guests: e.target.value })
    }

    const handleOccasion = (e) => {
        setFormData({ ...formData, occasion: e.target.value })
    }

    return (
        <section className='booking-form-section'>
            <div>
                <h1>Reserve a Table</h1>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '300px', gap: '20px' }} >
                <label htmlFor="res-date">Choose Date</label>
                <input type="date" id="res-date" value={formData.date} onChange={handleDate} />
                <label htmlFor="res-time">Choose Time</label>
                <select id="res-time" value={formData.time} onChange={handleTime}>
                    {props.availableTimes.map(time => {
                        return <option key={time}>{time}</option>
                    })}
                </select>
                <label htmlFor="guests">Number of Guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={formData.guests} onChange={handleGuests} />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={formData.occasion} onChange={handleOccasion}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button className="yellow-button" type="submit">Make Your Reservation</button>
            </form >
        </section>
    );
}

export default BookingForm;