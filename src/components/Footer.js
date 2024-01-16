import logo from '../assets/logo_white.png';

function Footer() {
    return (
        <footer>
            <div className='footer-logo'>
                <img src={logo} alt='Litte Lemon Logo' className='footer-logo'></img>
            </div>
            <div>
                Site Links
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div>
                Contact Us
                <p>
                    41068 Fremont Blvd. Fremont, CA 94538
                </p>
                <p>
                    (341) 201-5673
                </p>
                <p>
                    info@littlelemon.com
                </p>
            </div>

            <div>
                Social Media Links
                <p>
                    facebook.com/littlelemon
                </p>
                <p>
                    twitter.com/littlelemon
                </p>
            </div>
        </footer >
    );
}

export default Footer;