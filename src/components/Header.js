import logo from '../assets/logo.png';

import Nav from '../components/Nav';

function Header() {
    return (
        <header>
            <div><img src={logo}></img></div>
            <Nav></Nav>
        </header>
    );
}

export default Header;