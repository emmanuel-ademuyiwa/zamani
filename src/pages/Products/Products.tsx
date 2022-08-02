import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Product from "./Product";
import ProductHeader from "./ProductHeader";
import axios from "axios";

interface EachProduct {
  key: number;
  id: number;
  title: string;
  image: string;
  price: number;
}

const Products = () => {

  const [data, setData] = useState<EachProduct[]>([])

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
          {data.map((product) => (
            <Product
              id={product.id}
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
