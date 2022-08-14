import React, { useState, useEffect } from "react";
import axios from "axios";
import SalesItem from "./SalesItem";

interface EachProduct {
  key: number;
  id: number;
  title: string;
  image1: string;
  formerPrice: number;
  price: number;
  saleDiscount: string;
}

const Sales = () => {
  const [data, setData] = useState<EachProduct[]>([]);

  useEffect(() => {
    axios.get("https://thenelson.pythonanywhere.com/api/sales/").then((res) => {
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
              formerPrice={data.formerPrice}
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
