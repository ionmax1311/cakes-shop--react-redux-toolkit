import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { deleteItemFromWish } from "../../redux/wish/reducer";
import { setCurrentCake } from "../../redux/cakes/reducer";
import { CakeCover } from "../cake-cover";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./wish-item.css";

export const WishItem = ({ cake }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentCake(cake));
    history.push(`/app/${cake.title}`);
  };

  const handleClickDelete = () => {
    dispatch(deleteItemFromWish(cake.id));
  };
  return (
    <div className="wish-item">
      <div className="order-item__cover" onClick={handleClick}>
        <CakeCover image={cake.image} />
      </div>
      <div className="wish-item__title">
        <span>{cake.title}</span>
      </div>
      <div className="wish-item__price">
        <span>{cake.price} $</span>
        <AiOutlineCloseCircle
          size={25}
          className="cart-item__delete-icon"
          onClick={handleClickDelete}
        />
      </div>
    </div>
  );
};
