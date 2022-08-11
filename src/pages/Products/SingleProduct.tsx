import React from "react";
import Layout from "../../components/Layout/Layout";
import AddToCart from "./AddToCart";
import Size from "./Size";
import { useSelector } from "react-redux";

const SingleProduct = () => {
  const currentItem = useSelector((state: any) => state.shop.currentItem);
  const { title, price, image, description } = currentItem;

  return (
    <Layout>
      <div className="single-product">
        <div className="container">
          <div className="image-container">
            <img src={image} alt="" />
          </div>
          <div className="">
            <h6 className="title">{title}</h6>
            <h6 className="desc">{description}</h6>
            <h6 className="price">NGN ₦{price}</h6>
          </div>
          <Size />
        </div>

        <AddToCart item={currentItem} />
      </div>
    </Layout>
  );
};

export default SingleProduct;
