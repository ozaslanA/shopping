import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Card = () => {
  const dispatch = useDispatch();
  const { cardItems } = useSelector((state) => state.cardItems);

  console.log(cardItems, "cardItems");
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
          className="h-28 flex items-center justify-between py-4 mt-5"
        >
          <img className="h-23 " src={card?.image} alt="" />
          <div className="w-44">
            <div className="font-bold text-sm">
              {" "}
              {card?.title} ({card?.qty}){" "}
            </div>
            <div className="opacity-70 text-xs">{card?.description} </div>
          </div>
          <div className="font-bold text-lg">{card?.price} TL </div>
          <div className="bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer">
            Sil
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;
