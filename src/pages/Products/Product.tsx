import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

interface EachProduct {
  key: number;
  id: number;
  title: string;
  image: string;
  price: number;
}

const Product: React.FC<EachProduct> = ({ title, image, price }) => {
  return (
    <div className="product-container">
      <div className="product">
        <img src={image} alt="" />
        <div className="icon-container">
          <AiOutlineShopping className="add-to-cart-icon" />
        </div>
      </div>
      <p className="title">{title}</p>
      <p className="price">NGN ₦{price}</p>
    </div>
  );
};

export default Product;
