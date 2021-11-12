import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import { ItemsInWish } from "../items-in-wish/ItemsInWish";

import "./wish-block.css";

export const WishBlock = ({ visible, setVisible }) => {
  const items = useSelector((state) => state.wish.itemsInWish);

  const history = useHistory();

  const handleClick = () => {
    setVisible(false);
    history.push(`/wish`);
  };
  return items.length > 0 ? (
    <div className="wish-block" onClick={handleClick}>
      <ItemsInWish quantity={items.length} />

      <AiOutlineHeart size={25} className="wish-block__icon" />
    </div>
  ) : null;
};
