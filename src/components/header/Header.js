import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartBlock } from "../cart-block";
import { WishBlock } from "../wish-block/WishBlock";

import "./header.css";

export const Header = () => {
  const [isCartVisible, setIsCartIsVisible] = useState(false);

  console.log("window.location.hostname--", window.location.hostname);
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="header__store-title">
          CAKE STORE
        </Link>
      </div>
      <div className="wrapper header__wish-btn-wrapper">
        <WishBlock visible={isCartVisible} setVisible={setIsCartIsVisible} />
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock visible={isCartVisible} setVisible={setIsCartIsVisible} />
      </div>
    </div>
  );
};
