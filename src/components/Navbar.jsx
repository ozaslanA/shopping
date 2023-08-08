import React, { useEffect } from "react";
import { useState } from "react";
import { BsLightbulb, BsBasketFill, BsFillMoonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const [color, setColor] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const root = document.getElementById("root");
    if (color) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
  }, [color]);
  return (
    <div className="flex items-center justify-between px-3 h-20">
      <div>LOGO</div>
      <div className="flex items-center space-x-4">
        <input
          className="border p-2 outline-none rounded-lg"
          type="text"
          placeholder="search"
        />
        <div onClick={() => setColor(!color)}>
          {color ? (
            <BsFillMoonFill size={25} className="cursor-pointer" />
          ) : (
            <BsLightbulb size={25} className="cursor-pointer" />
          )}
        </div>

        <div
          onClick={() => dispatch({ type: "DRAWER", payload: true })}
          className="relative"
        >
          <BsBasketFill size={30} className="cursor-pointer" />
          <span className="absolute top-0 right-0 px-1 bg-red-600 text-white rounded-full text-sm">
            3
          </span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
