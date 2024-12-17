import Contact from "../components/Contact.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import HomeCircles from "../components/HomeCircles.jsx";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutUs />
            <HomeCircles />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
