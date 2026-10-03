import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="header">

      {/* Company Logo and Name */}
      <div className="company">

        <div className="company-logo">
          AC
        </div>

        <div className="company-name">
          <h2>EazyStore</h2>
          <span>quality • trust • service</span>
        </div>

      </div>


      {/* Navigation */}
      <nav className="navigation">

        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#services">Services</a>

        <a href="#contact">Contact</a>

      </nav>


      {/* Right Side */}
      <div className="header-actions">

        {/* Cart */}
        <button className="cart-button" title="Shopping Cart">

          <FontAwesomeIcon icon={faCartShopping} />

          <span className="cart-count">
            0
          </span>

        </button>


        {/* Login */}
        <button className="login-button">
          Login
        </button>

      </div>

    </header>
  );
}

export default Header;