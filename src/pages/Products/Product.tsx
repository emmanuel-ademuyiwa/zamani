import React, { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import DisplayItem from "./DisplayItem";
import { loadCurrentItem } from "../../redux/shopping/actions";
import { useDispatch, useSelector } from "react-redux";

interface EachProduct {
  key: number;
  id: number;
  title: string;
  image: string;
  price: number;
  item: {
    id: number;
    title: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    price: number;
  };
  handleCartitem: () => void;
}

const Product = ({ title, image, price, item }: EachProduct) => {
  const modal = useSelector((state: any) => state.shop.modal);
  const [cartitem, setCartitem] = useState(modal);
  const dispatch = useDispatch();

  function handleCartitem() {
    setCartitem(!cartitem);
    dispatch(loadCurrentItem(item));
  }

  function closeModal() {
    setCartitem(false);
  }

  return (
    <>
      <div className="product-container">
        <div className="product">
          <img src={image} alt="" />
          <div className="icon-container">
            <AiOutlineShopping
              className="add-to-cart-icon"
              onClick={handleCartitem}
            />
          </div>
        </div>
        <Link className="no-decoration" to={`/detail/${title}`}>
          <p className="title" onClick={() => dispatch(loadCurrentItem(item))}>
            {title.slice(0, 23)}..
          </p>
        </Link>
        <p className="price">NGN ₦{price}</p>
      </div>
      <DisplayItem closeModal={closeModal} cartitem={cartitem} item={item} />
    </>
  );
};

export default Product;
