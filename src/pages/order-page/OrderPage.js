import React from "react";
import { useSelector } from "react-redux";
import { OrderItem } from "../../components/order-item";
import { calcTotalprice } from "../../components/utils";
import "./order-page.css";

export const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items.length < 1) {
    return <h1>Your basket is empty</h1>;
  }
  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map((cake) => (
          <OrderItem cake={cake} key={cake.title} />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            {items.length} items worth: {calcTotalprice(items)} $
          </span>
        </div>
      </div>
    </div>
  );
};
