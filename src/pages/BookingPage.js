import '../booking.css';
import { fetchAPI } from '../utils/fakeAPI.js';

import React, { useReducer } from "react";

import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';

import Hero from '../components/Hero';

const initializeTimes = (date) => {
    return fetchAPI();
}

const reducer = (state, action) => {
    return initializeTimes(action.date);
}


function BookingPage() {
    const [availableTimes, updateTimes] = useReducer(reducer, initializeTimes());

    return (
        <>
            <Header></Header>
            <main>
                <Hero></Hero>
                <BookingForm availableTimes={availableTimes} updateTimes={updateTimes}></BookingForm>
            </main>
            <Footer></Footer>
        </>
    );
}

export default BookingPage;