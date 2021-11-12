import React from "react";
import { Button } from "../button/Button";
import { CartItem } from "../cart-item/CartItem";

import { calcTotalprice } from "../utils";
import "./cart-menu.css";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className={items.length > 0 ? "cart-menu" : "cart-menu-empty"}>
      <div className="cart-menu__cakes-list">
        {items.length > 0
          ? items.map((cake) => (
              <CartItem
                key={cake.title}
                price={cake.price}
                title={cake.title}
                id={cake.id}
              />
            ))
          : "Basket is empty"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Total:</span>
            <span>{calcTotalprice(items)} $</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Checkout
          </Button>
        </div>
      ) : null}
    </div>
  );
};
