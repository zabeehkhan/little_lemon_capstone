import foodImage from '../assets/restauranfood.jpg';
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="info-section">
            <div>
                <h1 className='text-yellow'>Little Lemon</h1>
                <h2 className='text-white'>Chicago</h2>
                <p className='text-white lead-text'>
                    Little Lemon is a culinary oasis nestled in the heart of Chicago, offering a delightful escape into the flavors of the Mediterranean.
                    Here you are greeted by a warm and inviting atmosphere that reflects the rich cultural tapestry of the region.
                </p>
                <Link to="/booking">
                    <button type='button' className='yellow-button'>Reserve a Table</button>
                </Link>
            </div>
            <div className='info-image-div'>
                <img src={foodImage} alt="Restaurant Food"></img>
            </div>
        </section>

    );
}

export default Hero;