import OwnersImage1 from '../assets/owners1.jpg';
import OwnersImage2 from '../assets/owners2.jpg';

function About() {
    return (

        <section className="about-section">
            <div>
                <h1 className=''>Little Lemon</h1>
                <h2 className=''>Chicago</h2>
                <p className='lead-text'>
                    The attentive and friendly staff at Little Lemon add a personal touch to your dining experience, ensuring that you feel like an honored guest throughout your visit. Whether you're enjoying a romantic dinner for two or celebrating a special occasion with friends and family, Little Lemon is the perfect destination for those seeking a culinary escape to the sun-drenched shores of the Mediterranean, right in the heart of Chicago.
                </p>
                <p className='lead-text'>
                    Whether you're a fan of traditional Greek moussaka, aromatic Moroccan tagines, or classic Italian pasta dishes, Little Lemon has something to satisfy every palate. The extensive wine list features carefully curated selections that complement the bold and nuanced flavors of the Mediterranean cuisine.
                </p>
            </div>
            <div className=''>
                <img className='image1' src={OwnersImage1} alt="Restaurant Owners"></img>
                <img className='image2' src={OwnersImage2} alt="Restaurant Owners"></img>
            </div>
        </section>

    );
}

export default About;