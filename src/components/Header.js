import logo from '../assets/Logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo"/>
      <nav>
        <ul className="header-nav">
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/menu">MENU</a></li>
          <li><a href="/booking">RESERVATIONS</a></li>
          <li><a href="/orderonline">ORDER ONLINE</a></li>
          <li><a href="/login">LOGIN</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;