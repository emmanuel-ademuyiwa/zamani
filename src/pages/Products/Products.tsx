import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Product from "./Product";
import ProductHeader from "./ProductHeader";
import axios from "axios";
import { useSelector } from "react-redux";
// import DisplayItem from "./DisplayItem";


interface EachProduct {
  key: number;
  id: number;
  title: string;
  image: string;
  price: number;
  
  item: {
    id: number;
    title: string;
    image: string;
    price: number;
  };
}

const Products = () => {
  const [cartitem, setCartitem] = useState(false)
  const products = useSelector((state:any) => state.shop.products)
  const [data, setData] = useState<EachProduct[]>(products)

  function handleCartitem() {
    setCartitem(!cartitem)
  }

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setData(res.data)
      })
  }, [])

  return (
    <Layout>
      <div className="container">
        <ProductHeader />
        <div className="products">
          {data.map((item) => (
            <Product
              item={item}
              id={item.id}
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              handleCartitem={handleCartitem}
            />
          ))}
        </div>
      </div>
      {/* <DisplayItem handleCartitem={handleCartitem} cartitem={cartitem} /> */}
    </Layout>
  );
};

export default Products;
