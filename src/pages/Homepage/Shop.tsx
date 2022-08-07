import React from "react";
// import { TiStarburstOutline } from "react-icons/ti";
// import {GiPalmTree} from 'react-icons/gi'
// import {HiOutlineChevronDoubleRight} from 'react-icons/hi'

import sh from "../../images/sh.jpg";
import neww from "../../images/new.jpeg";
import bestseller from "../../images/bestseller.jpeg";
import clearance from "../../images/clearance.jpeg";
import dreamy from "../../images/dreamy.jpeg";

const Shop = () => {
  return (
    <div className="container">
      <div className="category">
        <h4>Shop by Category</h4>
        <div className="image-category-container">
          <div className="first-set">
            <div className="left-first-set">
              <div className="image-one">
                <img src={neww} alt="" />
                <h6 className="category-text">Tops</h6>
              </div>
              <div className="image-two">
                <div className="cont">
                  <img src={sh} alt="" />
                  <h6 className="category-text">Dresses</h6>
                </div>
              </div>
            </div>
            <div className="right-first-set">
              <img src={dreamy} alt="" />
              <h6 className="category-text">Matching Sets</h6>
            </div>
          </div>
          <div className="second-set">
            <img src={sh} alt="" />
            <img src={dreamy} alt="" />
            <img src={clearance} alt="" />
            <img src={bestseller} className="last-img" alt="" />
          </div>
        </div>
      </div>
      {/* <div className="shop">
        <div className="clearance-header">
          <TiStarburstOutline />
          <h4>Summer Clearance</h4>
          <TiStarburstOutline />
        </div>
        <div className="up-to">UP TO</div>
        <h1 className="off">70% OFF</h1>
        <h6>
          Shop Now <HiOutlineChevronDoubleRight />
        </h6>
        <div className="trees">
          <GiPalmTree className="left-tree" />
          <GiPalmTree className="right-tree" />
          <GiPalmTree className="right-right-tree" />
        </div>
        <div className="right-tree"></div>
      </div> */}
    </div>
  );
};

export default Shop;
