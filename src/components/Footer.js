import logo from '../assets/logo.png';

function Footer() {
    return (
        <footer>
            <div>
                <img src={logo}></img>
            </div>
            <div>
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
            </div>

            <div>
                Social Media Links
            </div>
        </footer>
    );
}

export default Footer;