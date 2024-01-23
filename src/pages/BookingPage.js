import '../booking.css';
import React from "react";

import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';

import Hero from '../components/Hero';

function BookingPage() {
    return (
        <>
            <Header></Header>
            <main>
                <Hero></Hero>
                <BookingForm></BookingForm>
            </main>
            <Footer></Footer>
        </>
    );
}

export default BookingPage;