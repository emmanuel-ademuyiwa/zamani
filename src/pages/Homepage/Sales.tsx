import React, { useState, useEffect } from "react";
import axios from "axios";
import SalesItem from "./SalesItem";

interface EachProduct {
  key: number;
  id: number;
  title: string;
  image: string;
  price: number;
  
}

const Sales = () => {
  const [data, setData] = useState<EachProduct[]>([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
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
            image={data.image}
            />
          ))}

        </div>
      </div>
    </div>
  );
};

export default Sales;
