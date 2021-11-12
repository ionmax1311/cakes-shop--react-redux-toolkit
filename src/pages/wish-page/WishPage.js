import React from "react";
import { useSelector } from "react-redux";
import { WishItem } from "../../components/wish-item";

import "./wish-page.css";

export const WishPage = () => {
  const items = useSelector((state) => state.wish.itemsInWish);

  if (items.length < 1) {
    return <h1>Ваш список желаний пуст</h1>;
  }
  return (
    <div className="wish-page">
      <div className="wish-page__left">
        {items.map((cake) => (
          <WishItem cake={cake} key={cake.title} />
        ))}
      </div>
    </div>
  );
};
