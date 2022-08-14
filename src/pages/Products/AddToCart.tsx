import React from "react";
import { addToCart, handleModal } from "../../redux/shopping/actions";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  closeModal: () => void,
  item: {
    id: number;
    title: string;
    image1: string;
    price: number;
  };
}

const AddToCart = ({ item, closeModal }: Props) => {
  const dispatch = useDispatch();
  const size = useSelector((state: any) => state.shop.size);

  function handleAddToCart() {
    closeModal()
    dispatch(addToCart(item));
  }
  return (
    <>
      {size === "null" ? (
        <div className="add-to-cart">
          <h6>add to cart</h6>
          <div className="picksize">pick a size</div>
        </div>
      ) : (
        <div className="add-to-cart" onClick={handleAddToCart}>
          <h6>add to cart</h6>
        </div>
      )}
    </>
  );
};

export default AddToCart;
