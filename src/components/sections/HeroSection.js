import restaurant from '../../assets/restaurant.jpg';


function HeroSection() {
    return (
      <article className="hero-section">
        <section>
            <h1>LITTLE LEMON</h1>
            <h2>Chicago</h2>
            <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.
                The restaurant features a locally-sourced menu with daily specials.
            </p>
            <button>Reserve a Table</button>
        </section>
        <section>
            <img src={restaurant} alt="Restaurant"/>
        </section>
      </article>
    );
  };

export default HeroSection;