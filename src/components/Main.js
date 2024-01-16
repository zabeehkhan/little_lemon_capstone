import foodImage from '../assets/restauranfood.jpg';

function Main() {
    return (
        <main>
            <section className="info-section">
                <div>
                    <h1 className='text-yellow'>Little Lemon</h1>
                    <h2 className='text-white'>Chicago</h2>
                    <p className='text-white lead-text'>
                        Little Lemon is a culinary oasis nestled in the heart of Chicago, offering a delightful escape into the flavors of the Mediterranean.
                        Here you are greeted by a warm and inviting atmosphere that reflects the rich cultural tapestry of the region.
                    </p>
                    <button className='yellow-button'>Reserve a Table</button>
                </div>
                <div className='info-image-div'>
                    <img src={foodImage} alt="Restaurant Food"></img>
                </div>
            </section>
        </main>
    );
}

export default Main;