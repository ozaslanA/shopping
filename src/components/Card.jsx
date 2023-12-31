import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../Redux/actions/card";

const Card = () => {
  const dispatch = useDispatch();
  const { cardItems } = useSelector((state) => state.cardItems);

  console.log(cardItems, "cardItems");

  const deleteCard = (id) => {
    dispatch(removeCart(id));
  };
  return (
    <div className="w-1/3 h-full border fixed top-0 right-0 z-50 bg-white p-3 ">
      <div className="flex items-center h-20 justify-between">
        <h1 className="text-2xl">Sepetim</h1>
        <AiOutlineCloseCircle
          onClick={() => dispatch({ type: "DRAWER", payload: false })}
          size={20}
          className="cursor-pointer"
        />
      </div>
      {cardItems?.map((card, i) => (
        <div
          key={i}
          className="h-50 flex items-center justify-between py-4 mt-5"
        >
          <img className="h-20" src={card?.image} alt="" />
          <div className="w-60">
            <div className="font-bold text-sm">
              {card?.title} ({card?.qty})
            </div>
            <div className="opacity-70 text-xs">
              {(card?.description).substring(0, 80)}
            </div>
          </div>
          <div className="font-bold text-lg">{card?.price} TL </div>
          <div
            onClick={() => deleteCard(card.id)}
            className="bg-orange-500 w-25 p-2 text-center text-white rounded-lg cursor-pointer"
          >
            Sil
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;
