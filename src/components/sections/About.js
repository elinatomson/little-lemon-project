import A from '../../assets/Mario and Adrian A.jpg';
import B from '../../assets/Mario and Adrian b.jpg';

function About() {
    return (
      <article className="about-section">
        <section>
            <h1>LITTLE LEMON</h1>
            <h2>Chicago</h2>
            <p>Little Lemon has been open since 2000, founded by Adrian and Mario.</p>
        </section>
        <section className='image-section'>
            <img src={B} alt="Restaurant" className="image image-a"/>
            <img src={A} alt="Restaurant" className="image image-b"/>
        </section>
      </article>
    );
  };

export default About;