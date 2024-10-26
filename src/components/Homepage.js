import HeroSection from "./sections/HeroSection";
import Specials from "./sections/Specials";
import Testimonials from "./sections/Testimonials";
import About from "./sections/About";

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