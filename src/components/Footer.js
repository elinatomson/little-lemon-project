import logo from  '../assets/footer_logo.png'

function Footer() {
    return (
      <footer>
        <img src={logo} alt="Footer logo"/>
        <div>
          <h2>NAVIGATION</h2>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/booking">Reservations</a></li>
              <li><a href="/orderonline">Order Online</a></li>
              <li><a href="/login">Login</a></li>
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