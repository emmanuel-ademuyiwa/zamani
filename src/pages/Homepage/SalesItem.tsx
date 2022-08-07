import React from "react";
// import dreamy from "../../images/dreamy.jpeg";

interface EachProduct {
  title: string;
  image: string;
  price: number;
}

const SalesItem = (props: EachProduct) => {
  return (
    <div className="sales-item">
      <div className="img-container">
        <img src={props.image} alt="" />
        <h6>-50%</h6>
      </div>
      <div className="description-container">
        <p className="title">{props.title.slice(0, 11)}...</p>
        <p className="price">NGN ₦{props.price}</p>
        <p className="former-price">NGN ₦{props.price*2}</p>
      </div>
    </div>
  );
};

export default SalesItem;
