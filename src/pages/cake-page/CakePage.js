import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CakeBuy } from "../../components/cake-buy";
import { CakeCover } from "../../components/cake-cover";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./cake-page.css";
import { deleteItemFromWish, setItemInWish } from "../../redux/wish/reducer";

export const CakePage = () => {
  const dispatch = useDispatch();
  const cake = useSelector((state) => state.cakes.currentCake);
  const items = useSelector((state) => state.wish.itemsInWish);
  const isItemInWish = items.some((item) => item.id === cake.id);

  const handleClickWish = (e) => {
    e.stopPropagation();
    if (isItemInWish) {
      dispatch(deleteItemFromWish(cake.id));
    } else {
      dispatch(setItemInWish(cake));
    }
  };

  if (!cake) return null;

  return (
    <div className="cake-page">
      <div className="cake-page__content">
        <div className="cake-page__left">
          <CakeCover image={cake.image} width="90%" height="400px" />
        </div>
        <div className="cake-page__right">
          <h2 className="cake-page__title">{cake.title}</h2>
          <div>
            <p>{cake.description}</p>
            <div className="cake-page__wrap-icon">
              <div className="cake-page__wish-icon">
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
              <div className="cake-page__buy-cake">
                <CakeBuy cake={cake} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
