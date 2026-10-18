import Navbar from "../components/Navbar";
import About from "./About";
import Prices from "./Prices";
import Contact from "./Contact";

const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({behavior: "smooth"});
    }
}

function Home() {
    return (
        <>
            <Navbar scrollToSection={scrollToSection} />

            <About />

            <Prices />

            <Contact />
        </>
    )
}

export default Home