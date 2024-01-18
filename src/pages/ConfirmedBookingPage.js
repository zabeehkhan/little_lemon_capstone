import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

function ConfirmedBookingPage() {
    return (
        <>
            <Header></Header>
            <main>
                <Hero></Hero>
                <section className='booking-form-section'>
                    <div>
                        <h1>Reservation Confirmed</h1>
                        <p>Your table reservation booking has been confirmed.</p>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
}

export default ConfirmedBookingPage;