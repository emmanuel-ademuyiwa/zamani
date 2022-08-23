import React from "react";
import AddToCart from "./AddToCart";
import { FaTimes } from "react-icons/fa";
import Size from "./Size";
import { useSelector } from "react-redux";

interface DisplayProp {
  closeModal: () => void;
  cartitem: boolean;
  item: {
    id: number;
    title: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    price: number;
  };
}

const DisplayItem = ({
  cartitem,
  item,
  closeModal,
}: DisplayProp) => {
  const currentItem = useSelector((state: any) => state.shop.currentItem);
  // const dispatch = useDispatch()
  const { title, description, price, image1, image2, image3, image4 } =
    currentItem;

  return (
    <div className={cartitem ? "display-item" : "close-display-item"}>
      <div
        className={cartitem ? "display-container" : "close-display-container"}
      >
        <div className="container">
          <FaTimes className="cancel" onClick={closeModal} />
          <AddToCart item={item} closeModal={closeModal} />

          <div className="details">
            <h4>Product detail</h4>
            <div className="image-container">
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              <img src={image4} alt="" />
            </div>
            <div className="more-details">
              <h6 className="title">{title}</h6>
              <h6 className="desc">{description}</h6>
              <h6 className="price">NGN ₦{price.toLocaleString()}</h6>
            </div>
            <Size />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayItem;
