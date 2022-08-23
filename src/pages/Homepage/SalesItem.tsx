import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadCurrentItem } from "../../redux/shopping/actions";
// import dreamy from "../../images/dreamy.jpeg";


interface EachProduct {
  title: string;
  image1: string;
  price: number;
  saleDiscount: number;
  item: {
    id: number;
    title: string;
    image1: string;
    price: number;
    saleDiscount: number;
  };
}

const SalesItem = ({
  title,
  image1,
  price,
  saleDiscount,
  item,
}: EachProduct) => {
  const dispatch = useDispatch();

  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/detail/${title}`}
    >
      <div
        className="sales-item"
        onClick={() => dispatch(loadCurrentItem(item))}
      >
        <div className="img-container">
          <img src={image1} alt="" />
          <h6>{saleDiscount}%</h6>
        </div>
        <div className="description-container">
          <p className="title">{title}</p>
          <p className="price">NGN ₦{(price - (saleDiscount / 100) * price).toLocaleString()}</p>
          <p className="former-price">NGN ₦{price.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
};

export default SalesItem;
