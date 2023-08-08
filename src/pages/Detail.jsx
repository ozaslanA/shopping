import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productsActionDetail } from "../Redux/actions/products";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(productsActionDetail(id));
  }, [dispatch]);

  console.log("product", product);

  return (
    <div className="w-full flex justify-center">
      <img className="w-1/3" src={product?.image} alt="" />
      <div className="w-2/3">
        <div>{product?.title}</div>
      </div>
    </div>
  );
};
export default Detail;
