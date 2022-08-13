import React from "react";
import { addToCart, dropSize } from "../../redux/shopping/actions";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  item: {
    id: number;
    title: string;
    image: string;
    price: number;
  };
}

const AddToCart = ({ item }: Props) => {
  const dispatch = useDispatch();
  const size = useSelector((state: any) => state.shop.size);

  return (
    <>
      {size === "null" ? (
        <div className="add-to-cart">
          <h6>add to cart</h6>
          <div className="picksize">pick a size</div>
        </div>
      ) : (
        <div
          className="add-to-cart"
          onClick={() => {
            dispatch(addToCart(item));
          }}
        >
          <h6>add to cart</h6>
        </div>
      )}
    </>
  );
};

export default AddToCart;
