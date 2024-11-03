import HeroSection from "./sections/HeroSection.js";
import Specials from "./sections/Specials.js";
import Testimonials from "./sections/Testimonials.js";
import About from "./sections/About.js";

function HomePage() {
    return (
      <>
        <HeroSection/>
        <Specials/>
        <Testimonials/>
        <About/>
      </>
    );
  };

export default HomePage;