import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productsActionDetail } from "../Redux/actions/products";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const [count, setCount] = useState(0);

  const increment = (Stock) => {
    if (count <= Stock) {
      setCount(count + 1);
    }
  };

  const decrement = (Stock) => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    dispatch(productsActionDetail(id));
  }, [dispatch]);

  console.log("product", product);

  return (
    <div className="w-full flex items-center justify-center">
      <img className="w-1/3" src={product?.image} alt="" />
      <div className="w-2/3 space-y-3">
        <div className="font-bold text-1xl">{product?.title}</div>
        <div className=" opacity-70">{product?.description}</div>
        <div className=" opacity-70">Category: {product?.category}</div>
        <div className=" opacity-70">
          {" "}
          Rate: {product?.rating?.rate} - Stock: {product?.rating?.count}
          <div className=" font-bold text-xl  h-16 ">
            Price: {product?.price}
          </div>
          <div className="flex items-center space-x-4">
            <CgMathMinus
              onClick={decrement}
              className="cursor-pointer border rounded-full p-1"
              size={30}
            />
            <span className="text-2xl  text-black-50 w-10 text-center ">
              {count}
            </span>
            <CgMathPlus
              onClick={() => increment(product?.rating?.count)}
              className="cursor-pointer border rounded-full p-1  "
              size={30}
            />
          </div>
          <button className="bg-orange-600 w-full p-1 rounded-lg  h-16 my-10 text-white">
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};
export default Detail;
