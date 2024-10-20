import logo from  '../assets/footer_logo.png'

function Footer() {
    return (
      <footer>
        <img src={logo} alt="Footer logo"/>
        <div>
          Doormat Navigation
          <nav>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/orderonline">Order Online</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </nav>
        </div>
        <div>
          Contact
          <nav>
            <ul>
              <li>Adress</li>
              <li>Phone number</li>
              <li>Email</li>
            </ul>
          </nav>
        </div>
        <div>
          Social Media links
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