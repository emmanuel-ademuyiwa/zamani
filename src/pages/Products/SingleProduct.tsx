import React, { useState} from "react";
import Layout from "../../components/Layout/Layout";
import AddToCart from "./AddToCart";
import Size from "./Size";
import { useSelector } from "react-redux";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SingleProduct = () => {
  const currentItem = useSelector((state: any) => state.shop.currentItem);
  const { title, description, price, image1, image2, image3, image4 } =
    currentItem;

  const slideImages = [
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
    {
      url: image4,
    },
  ];
  const modal = useSelector((state: any) => state.shop.modal);
  const [cartitem, setCartitem] = useState(modal);

    function closeModal() {
      setCartitem(false);
    }
  return (
    <Layout>
      <div className="single-product">
        <div className="container">
          <div className="image-container">
            <div className=" slidecontainer">
              <Slide>
                {slideImages.map((slideImage, index) => (
                  <div className="each-slide" key={index}>
                    <div
                      style={{ backgroundImage: `url(${slideImage.url})` }}
                    ></div>
                  </div>
                ))}
              </Slide>
            </div>
          </div>
          <div className="">
            <h6 className="title">{title}</h6>
            <h6 className="desc">{description}</h6>
            <h6 className="price">NGN ₦{price.toLocaleString()}</h6>
          </div>
          <Size />
        </div>

        <AddToCart item={currentItem} closeModal={closeModal} />
      </div>
    </Layout>
  );
};

export default SingleProduct;
