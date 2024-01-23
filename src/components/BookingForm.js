import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../config/firebase";
import * as firestore from "firebase/firestore";

function BookingForm(props) {
    const navigate = useNavigate();
    const reservationCollectionRef = firestore.collection(db, "reservations");


    const reservationHours = ['4:00', '5:00', '6:00', '7:00', '8:00'];
    const [availableTimes, setAvailableTimes] = useState(reservationHours);

    const stateData = {
        date: new Date().toISOString().slice(0, 10),
        time: availableTimes.length > 0 ? availableTimes[0] : null,
        guests: 1,
        occasion: 'Anniversary',
    }
    const [formData, setFormData] = useState(stateData);

    const [reservationList, setReservationList] = useState([]);


    const getReservationList = async () => {
        try {
            // const data = await firestore.getDocs(reservationCollectionRef);
            const query = firestore.query(reservationCollectionRef, firestore.where("date", "==", formData.date));
            const data = await firestore.getDocs(query);
            const reservations = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));

            setReservationList(reservations);

            const bookedTimes = reservations.map(reservation => {
                return reservation.time;
            })
            const filteredTimes = reservationHours.filter(item => !bookedTimes.includes(item));
            setAvailableTimes(filteredTimes);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getReservationList();
    }, [formData.date]);


    const addReservation = async () => {
        try {
            await firestore.addDoc(reservationCollectionRef, {
                date: formData.date,
                time: formData.time,
                guests: Number(formData.guests),
                occasion: formData.occasion
            });
        } catch (error) {
            console.error(error);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
        addReservation();

        // if (isConfirmed) {
        //     navigate("/confirmed");
        // }
    }

    const handleDate = (e) => {
        setFormData({ ...formData, date: e.target.value })
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
            <div style={{ marginBottom: '20px', marginTop: '-10px' }}>
                <b>{reservationList.length}</b> reservations already made for the selected date.
            </div>
            <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '300px', gap: '20px' }} >
                <label htmlFor="res-date">Choose Date</label>
                <input required type="date" id="res-date" value={formData.date} onChange={handleDate} />
                <label htmlFor="res-time">Choose Time</label>
                <select required id="res-time" value={formData.time} onChange={handleTime}>
                    {availableTimes.map(time => {
                        return <option key={time}>{time}</option>
                    })}
                </select>
                <label htmlFor="guests">Number of Guests</label>
                <input required type="number" placeholder="1" min="1" max="10" name="guests" id="guests" value={formData.guests} onChange={handleGuests} />
                <label htmlFor="occasion">Occasion</label>
                <select required id="occasion" value={formData.occasion} onChange={handleOccasion}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button className="yellow-button" type="submit" aria-label="On Click">Make Your Reservation</button>
            </form >
        </section >
    );
}

export default BookingForm;