import bruchetta from '../../assets/bruchetta.svg';
import salad from '../../assets/greek salad.jpg';
import dessert from '../../assets/lemon dessert.jpg';
import logo from '../../assets/delivery_logo.svg';

function Specials() {
    const specials = [
        {image: salad, name: 'Greek salad', price: 12.99, description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."},
        {image: bruchetta, name: 'Bruchetta', price: 5.99, description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."},
        {image: dessert, name: 'Lemon Dessert', price: 5.99, description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
    ]

    return (
        <div className='specials-section'>
            <section className='specials-heading'>
                <h2>Specials</h2>
                <button aria-label="Online menu">Online Menu</button>
            </section>
            <section className='specials-card'>
                {specials.map((special) => (
                    <article key={special.name}>
                        <img src={special.image} className='dish-image' alt={special.name}/>
                        <span className='dish-details'>
                            <h3>{special.name}</h3>
                            <p>${special.price}</p>
                        </span>
                        <p className='card-description'>{special.description}</p>
                        <span className='order-delivery'>
                            <h3>Order a delivery</h3>
                            <img src={logo} className='delivery-logo' alt="Delivering logo"/>
                        </span>
                    </article>
                ))}
            </section>
        </div>
    );
  };

export default Specials;