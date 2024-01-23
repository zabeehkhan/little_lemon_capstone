import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { useLocation } from 'react-router-dom';

function ConfirmedBookingPage(props) {
    const { state } = useLocation();

    return (
        <>
            <Header></Header>
            <main>
                <Hero></Hero>
                <section className='booking-form-section'>
                    <div>
                        <h1>Reservation Confirmed</h1>
                        <p>Your table reservation booking has been confirmed.</p>
                        <p>Your reservation confirmation number is <b>{state.id}</b> and your reservation for {state.guests} guests is booked for {state.date} at {state.time}.</p>

                        <p>We look forward to seeing you soon!</p>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
}

export default ConfirmedBookingPage;