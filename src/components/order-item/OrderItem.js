import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../redux/cart/reducer";
import { CakeCover } from "../cake-cover";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./order-item.css";

export const OrderItem = ({ cake }) => {
  const dispatch = useDispatch();

  const handleClickDelete = () => {
    dispatch(deleteItemFromCart(cake.id));
  };
  return (
    <div className="order-item">
      <div className="order-item__cover">
        <CakeCover image={cake.image} />
      </div>
      <div className="order-item__title">
        <span>{cake.title}</span>
      </div>
      <div className="order-item__price">
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
