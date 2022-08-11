import React from "react";
import { addToCart } from "../../redux/shopping/actions";
import { useDispatch } from "react-redux";

interface Props {
  item: {
    id: number;
    title: string;
    image: string;
    price: number;
  };
}

const AddToCart = ({item}: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="add-to-cart" onClick={() => dispatch(addToCart(item))}>
      <h6>add to cart</h6>
    </div>
  );
};

export default AddToCart;
