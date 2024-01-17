import Header from './Header';
import Footer from './Footer';

import Hero from './Hero';
import Specials from './Specials';
import About from './About';


function HomePage() {
    return (
        <>
            <Header></Header>
            <main>
                <Hero></Hero>
                <Specials></Specials>
                <About></About>
            </main>
            <Footer></Footer>
        </>
    );
}

export default HomePage;