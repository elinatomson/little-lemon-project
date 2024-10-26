import logo from  '../../assets/footer_logo.png'
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer>
        <img src={logo} alt="Footer logo"/>
        <div>
          <h2>NAVIGATION</h2>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/booking">Reserve a table</Link></li>
              <li><Link to="/orderonline">Order online</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
        </div>
        <div>
          <h2>CONTACTS</h2>
          <nav>
            <ul>
              <li>Adress</li>
              <li>Phone number</li>
              <li>Email</li>
            </ul>
          </nav>
        </div>
        <div>
          <h2>SOCIAL MEDIA LINKS</h2>
          <nav>
            <ul>
              <li>
                <a href="/home">Facebook</a>
              </li>
              <li>
                <a href="/about">Instagram</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  };

export default Footer;