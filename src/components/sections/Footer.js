import logo from  '../../assets/footer_logo.png'
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer>
        <img src={logo} alt="Footer logo"/>
        <section>
          <h2>NAVIGATION</h2>
          <nav aria-label="Main navigation">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/booking">Reserve a table</Link></li>
              <li><Link to="/orderonline">Order online</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
        </section>
        <section>
          <h2>CONTACTS</h2>
          <nav aria-label="Contact information">
            <ul>
              <li>Adress</li>
              <li>Phone number</li>
              <li>Email</li>
            </ul>
          </nav>
        </section>
        <section>
          <h2>SOCIAL MEDIA LINKS</h2>
          <nav aria-label="Social media links">
            <ul>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
            </ul>
          </nav>
        </section>
      </footer>
    );
  };

export default Footer;