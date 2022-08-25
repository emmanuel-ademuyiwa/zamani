import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Product from "./Product";
import ProductHeader from "./ProductHeader";
import axios from "axios";
import { useSelector } from "react-redux";
// import DisplayItem from "./DisplayItem";

// interface EachProduct {
//   key: number;
//   id: number;
//   title: string;
//   image: string;
//   price: number;

//   item: {
//     id: number;
//     title: string;
//     image: string;
//     price: number;
//   };
// }

const Products = () => {
  const [cartitem, setCartitem] = useState(false);
  const [loading, setLoading] = useState(false)
  const products = useSelector((state: any) => state.shop.products);
  const [data, setData] = useState(products);

  const search = useSelector((state: any) => state.shop.search);

  function handleCartitem() {
    setCartitem(!cartitem);
  }

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://thenelson.pythonanywhere.com/api/products/?search=${search}`
  //     )
  //     .then((res) => {
  //       setData(res.data);
  //     });
  // }, [search]);

  useEffect(() => {
    const fetchData = async () => {
      try { 
        setLoading(true)
        const dataURL = `https://thenelson.pythonanywhere.com/api/products/?search=${search}`
        const response = await axios.get(dataURL);
        setData(response.data);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log("Sorry something went wrong")
      }
    }
    fetchData()
  }, [search])

  return (
    <Layout>
      { loading && <div className="loader--container">
        <div className="loader"></div>
      </div>}
      <div className="container">
        <ProductHeader />
        {data.length > 0 ? (
          <div className="products">
            {data.map((item: any) => (
              <Product
                item={item}
                id={item.id}
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image1}
                handleCartitem={handleCartitem}
              />
            ))}
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

export default Products;
