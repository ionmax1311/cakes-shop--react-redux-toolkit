import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../redux/cart/reducer";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./cart-item.css";

export const CartItem = ({ price, title, id }) => {
  const dispatch = useDispatch();

  const handleClickDelete = () => {
    dispatch(deleteItemFromCart(id));
  };
  return (
    <div className="cart-item">
      <span>{title}</span>
      <div className="cart-item__price">
        <span>{price} $</span>
        <AiOutlineCloseCircle
          size={15}
          className="cart-item__delete-icon"
          onClick={handleClickDelete}
        />
      </div>
    </div>
  );
};
