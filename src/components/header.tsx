import React, { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { FaAtlassian } from "react-icons/fa6";

function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <nav>
      <header>
        <a className="mainLink" href="/">
          <FaAtlassian />
          <div className="logoTxt">ACME STORE</div>
        </a>
        <ul className="categories">
          <a className="all" href="#">
            All
          </a>
          <a href="#" className="shirt">
            Shirt
          </a>
          <a href="#" className="other">
            Other
          </a>
        </ul>
        <div>
          <FaBasketShopping
            onClick={() => setCartOpen(!cartOpen)}
            className={`shop-cart-button ${cartOpen && "active"}`}
          />
          {cartOpen && <div className="cart-content">Your cart items...</div>}
        </div>
      </header>
    </nav>
  );
}

export default Header;
