import logo from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo"/>
      </Link>
      <nav>
        <ul className="header-nav">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/menu">MENU</Link></li>
          <li><Link to="/booking">RESERVE A TABLE</Link></li>
          <li><Link to="/orderonline">ORDER ONLINE</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;