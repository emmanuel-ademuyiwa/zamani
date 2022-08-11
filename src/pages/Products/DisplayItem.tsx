import React from "react";
import AddToCart from "./AddToCart";
import { FaTimes } from "react-icons/fa";
import Size from "./Size";
import { useSelector } from "react-redux";

interface DisplayProp {
  cartitem: boolean;
  handleCartitem: () => void;
  item: {
    id: number;
    title: string;
    image: string;
    price: number;
  };
}

const DisplayItem = ({ cartitem, handleCartitem, item }: DisplayProp) => {
  const currentItem = useSelector((state: any) => state.shop.currentItem);
  const { title, description, price, image } = currentItem;

  return (
    <div className={cartitem ? "display-item" : "close-display-item"}>
      <div
        className={cartitem ? "display-container" : "close-display-container"}
      >
        <div className="container">
          <FaTimes className="cancel" onClick={handleCartitem} />
          <AddToCart item={item} />

          <div className="details">
            <h4>Product detail</h4>
            <div className="image-container">
              <img src={image} alt="" />
              <img src={image} alt="" />
              <img src={image} alt="" />
              <img src={image} alt="" />
            </div>
            <div className="more-details">
              <h6 className="title">{title}</h6>
              <h6 className="desc">{description}</h6>
              <h6 className="price">NGN ₦{price}</h6>
            </div>
            <Size />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayItem;
