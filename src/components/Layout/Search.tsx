import React, { useEffect, useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { CgSearch } from "react-icons/cg";
import Trending from "./Trending";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
// import RecentSearch from "./RecentSearch";

interface SearchProps {
  handlesearch: () => void;
}

const Search: React.FC<SearchProps> = ({ handlesearch }) => {
  const cart = useSelector((state: any) => state.shop.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

   useEffect(() => {
     let items = 0;
     let price = 0;
     cart.forEach((item: any) => {
       items += item.qty;
       price += item.qty * item.price;
     });

     setTotalItems(items);
     setTotalPrice(price);
   }, [cart, totalPrice, totalItems, setTotalItems, setTotalPrice]);


  return (
    <div className="search">
      <div className="search-header">
        <MdArrowBackIosNew onClick={handlesearch} />
        <h6>Search</h6>
        <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
          <AiOutlineShopping className="cart-icon" />
        </Link>
        <div className="cart-count">
          <p>{totalItems}</p>
        </div>
      </div>
      <div className="search-body">
        <div className="search-body-input">
          <div className="text">
            <input
              type="text"
              name=""
              id=""
              placeholder="Looking for something?"
            />
          </div>
          <CgSearch className="search-icon" />
        </div>
        {/* <RecentSearch /> */}

        <Trending />
      </div>
    </div>
  );
};

export default Search;
