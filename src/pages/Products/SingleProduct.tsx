import React, {useState} from "react";
import Layout from "../../components/Layout/Layout";
import AddToCart from "./AddToCart";
import Size from "./Size";
import { addToCart } from "../../redux/shopping/actions";
import { useSelector, useDispatch } from "react-redux";

interface Props {
  item: {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
  };
}

const SingleProduct = () => {
  const currentItem = useSelector((state:any) => state.shop.currentItem);
  const { title, description, price, image } = currentItem;
  
  return (
    <Layout>
      <div className="single-product">
        <div className="container">
          <div className="image-container">
            <img src={image} alt="" />
          </div>
          <div className="">
            <h6 className="title">{title}</h6>
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
