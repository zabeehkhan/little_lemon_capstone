import greekSalad from '../assets/greek_salad.jpg';
import lemonDessert from '../assets/lemon_dessert.jpg';
import bruchetta from '../assets/bruchetta.svg';

function Specials() {
    return (

        <section className='specials-section'>
            <div className='specials-title'>
                <div>
                    <h1>This week's specials!</h1>
                </div>
                <div>
                    <button className='yellow-button'>Order Online</button>
                </div>
            </div>
            <div className='specials-grid'>
                <div className='specials-card'>
                    <img src={greekSalad} alt='Greek Salad'></img>
                    <div style={{ padding: '10px' }}>
                        <div className='card-title'>
                            <h3>Greek Salad</h3>
                            <span>$12.99</span>
                        </div>

                        <p>
                            Greek salad is a classic colorful and healthful ensemble of fresh ingredients, providing a harmonious balance of textures and tastes.
                        </p>

                    </div>
                    <h5 style={{ padding: '10px' }}>Order a delivery</h5>
                </div>

                <div className='specials-card'>
                    <img src={bruchetta} alt='Bruchetta'></img>
                    <div style={{ padding: '10px' }}>
                        <div className='card-title'>
                            <h3>Bruchetta</h3>
                            <span>$15.99</span>
                        </div>

                        <p>
                            Bruschetta is a delectable and appetizing Italian antipasto that consists of toasted bread slices generously topped with a flavorful mixture of diced tomatoes, fresh basil, garlic, and extra virgin olive oil.
                        </p>


                    </div>
                    <h5 style={{ padding: '10px' }}>Order a delivery</h5>
                </div>


                <div className='specials-card'>
                    <img src={lemonDessert} alt='Lemon Dessert'></img>
                    <div style={{ padding: '10px' }}>
                        <div className='card-title'>
                            <h3>Lemon Dessert</h3>
                            <span>$10.99</span>
                        </div>

                        <p>
                            A Lemon Dessert is a delightful and zesty culinary creation that captures the bright and citrusy essence of lemons in a sweet indulgence.
                        </p>

                    </div>
                    <h5 style={{ padding: '10px' }}>Order a delivery</h5>
                </div>

            </div>
        </section>
    );
}


export default Specials;