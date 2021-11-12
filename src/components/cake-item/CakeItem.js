import React from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { CakeCover } from "../cake-cover";
import { CakeBuy } from "../cake-buy";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { setCurrentCake } from "../../redux/cakes/reducer";
import "./cake-item.css";
import { deleteItemFromWish, setItemInWish } from "../../redux/wish/reducer";

export const CakeItem = ({ cake }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.wish.itemsInWish);
  const isItemInWish = items.some((item) => item.id === cake.id);

  const handleClick = () => {
    dispatch(setCurrentCake(cake));
    history.push(`/cake/${cake.title}`);
  };

  const handleClickWish = (e) => {
    e.stopPropagation();
    if (isItemInWish) {
      dispatch(deleteItemFromWish(cake.id));
    } else {
      dispatch(setItemInWish(cake));
    }
  };
  return (
    <div className="cake-item" onClick={handleClick}>
      <CakeCover image={cake.image} />
      <div className="cake-item__details">
        <span className="cake-item__title">{cake.title}</span>

        <div className="cake-item__wish-icon">
          {isItemInWish ? (
            <AiFillHeart
              size={25}
              className="wish-block__icon"
              onClick={handleClickWish}
            />
          ) : (
            <AiOutlineHeart
              size={25}
              className="wish-block__icon"
              onClick={handleClickWish}
            />
          )}
        </div>
        <div className="cake-item__buy">
          <CakeBuy cake={cake} />
        </div>
      </div>
    </div>
  );
};
