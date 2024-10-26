function Testimonials() {
    const testimonials = [
        {rating: 5, name: 'Martin', review: "The best greek salad in town!"},
        {rating: 4, name: 'Christine', review: "The food was great, but waiting time too long."},
        {rating: 5, name: 'Richard', review: "The delivery was fast and food was good."},
        {rating: 5, name: 'Maria', review: "Really nice atmosphere and friendly stuff. Loved every dish!"}
    ]

    return (
      <div className='testimonials-section'>
        <h2>Customers reviews</h2>
        <section>
            {testimonials.map((testimonial) => (
                <article key={testimonial.name}>
                    <span className="rating">
                        {Array(5).fill().map((_, index) => (
                        <span key={index} className={index < testimonial.rating ? 'filled-star' : 'empty-star'}>
                            ★
                        </span>
                        ))}
                        <h3>{testimonial.name}</h3>
                    </span>
                    <p>{testimonial.review}</p>
                </article>
            ))}
        </section>
      </div>
    );
  };

export default Testimonials;