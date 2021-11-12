import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { BiCartAlt } from "react-icons/bi";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart";
import "./cart-block.css";
import { calcTotalprice } from "../utils";
import { useHistory } from "react-router";

export const CartBlock = ({ visible, setVisible }) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalprice(items);
  const history = useHistory();

  const handleClick = useCallback(() => {
    setVisible(false);
    history.push("/order");
  }, [history, setVisible]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={25}
        className="cart-block__icon"
        onClick={() => setVisible(!visible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice} $</span>
      ) : null}

      {visible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};
