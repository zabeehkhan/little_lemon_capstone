import Header from '../components/Header';
import Footer from '../components/Footer';

import Hero from '../components/Hero';
import Specials from '../components/Specials';
import About from '../components/About';


function HomePage() {
    return (
        <>
            <Header></Header>
            <main>
                <Hero showButton={true}></Hero>
                <Specials></Specials>
                <About></About>
            </main>
            <Footer></Footer>
        </>
    );
}

export default HomePage;