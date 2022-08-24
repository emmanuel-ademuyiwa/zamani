import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import ProductHeader from "../Products/ProductHeader";
import axios from "axios";
import { useSelector } from "react-redux";
import SalesItem from "../Homepage/SalesItem";

import { EachProduct } from "../Homepage/Sales";

const Sales = () => {
  const [cartitem, setCartitem] = useState(false);
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
 ]);  const search = useSelector((state: any) => state.shop.search);

  function handleCartitem() {
    setCartitem(!cartitem);
  }

  useEffect(() => {
    axios
      .get(`https://thenelson.pythonanywhere.com/api/sales/?search=${search}`)
      .then((res) => {
        setData(res.data);
      });
  }, [search]);
  return (
    <Layout>
      <div className="container">
        <ProductHeader />

        {data.length > 0 ? (
          <div className="sales">
            <div className="container">
              <div className="sales-header">
                <h4>Discount Sales</h4>
                <p>Discount sales chance! Up to 70% Off!</p>
              </div>
              <div className="item-list ">
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
        ) : (
          <div className="products" style={{ marginTop: "70px" }}>
            <h4 style={{ fontSize: "16px" }}>Product not available</h4>
          </div>
        )}
      </div>
      {/* <DisplayItem handleCartitem={handleCartitem} cartitem={cartitem} /> */}
    </Layout>
  );
};

export default Sales;
