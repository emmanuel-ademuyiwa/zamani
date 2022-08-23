import React, { useState, useEffect } from "react";
import axios from "axios";
import SalesItem from "./SalesItem";

interface EachProduct {
  key: number;
  id: number;
  title: string;
  image1: string;
  price: number;
  saleDiscount: number;
}

const Sales = () => {
  const [data, setData] = useState<EachProduct[]>([
    {
      key: 1,
      id: 1,
      title: "",
      image1: " ",
      price: 0,
      saleDiscount: 0,
    },
    {
      key: 2,
      id: 2,
      title: "",
      image1: " ",
      price: 0,
      saleDiscount: 0,
    },
    {
      key: 3,
      id: 3,
      title: "",
      image1: " ",
      price: 0,
      saleDiscount: 0,
    },
    {
      key: 4,
      id: 4,
      title: "",
      image1: " ",
      price: 0,
      saleDiscount: 0,
    },
    {
      key: 5,
      id: 5,
      title: "",
      image1: " ",
      price: 0,
      saleDiscount: 0,
    },
    {
      key: 6,
      id: 6,
      title: "",
      image1: " ",
      price: 0,
      saleDiscount: 0,
    },
  ]);

  useEffect(() => {
    axios
      .get("https://thenelson.pythonanywhere.com/api/sales/")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div className="sales">
      <div className="container">
        <div className="sales-header">
          <h4>Discount Sales</h4>
          <p>Discount sales chance! Up to 70% Off!</p>
        </div>
        <div className="item-list">
          {data.map((data) => (
            <SalesItem
              key={data.id}
              item={data}
              title={data.title}
              price={data.price}
              saleDiscount={data.saleDiscount}
              image1={data.image1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;
