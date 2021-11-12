import React from "react";
import "./items-in-wish.css";

export const ItemsInWish = ({ quantity = 0 }) => {
  return quantity > 0 ? <div className="items-in-wish">{quantity}</div> : null;
};
