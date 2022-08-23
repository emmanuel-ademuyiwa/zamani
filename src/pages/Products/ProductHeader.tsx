import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { BiFilter } from "react-icons/bi";
import ProductSection from "./ProductSection";
import ProductHeaderSection from "./ProductHeaderSection";

const ProductHeader = () => {
  const [sort, setSort] = useState(false);
  const [category, setCategory] = useState(false);
  const [size, setSize] = useState(false);
  const [filter, setFilter] = useState(false);

  function handleSort() {
    setSort(!sort);
    setCategory(false);
    setSize(false);
    setFilter(false);
  }

  function handleCategory() {
    setSort(false);
    setCategory(!category);
    setSize(false);
    setFilter(false);
  }
  function handleSize() {
    setSort(false);
    setCategory(false);
    setSize(!size);
    setFilter(false);
  }
  function handleFilter() {
    setSort(false);
    setCategory(false);
    setSize(false);
    setFilter(!filter);
  }

  return (
    <div className="">
      <div className="products-header">
        <div className="each-section">
          <div onClick={handleSort} className="each">
            <h6>Sort</h6>
            {sort ? (
              <MdKeyboardArrowUp className="icon" />
            ) : (
              <MdKeyboardArrowDown className="icon" />
            )}
          </div>
          <ProductSection
            sort={sort}
            category={category}
            size={size}
            filter={filter}
          />
        </div>
        <div className="each-section">
          <div onClick={handleCategory} className="each">
            <h6>Category</h6>
            {category ? (
              <MdKeyboardArrowUp className="icon" />
            ) : (
              <MdKeyboardArrowDown className="icon" />
            )}{" "}
          </div>
        </div>
        <div className="each-section">
          <div onClick={handleSize} className="each">
            <h6>Size</h6>
            {size ? (
              <MdKeyboardArrowUp className="icon" />
            ) : (
              <MdKeyboardArrowDown className="icon" />
            )}{" "}
          </div>
        </div>
        <h6>|</h6>
        <div className="each-section last-child">
          <div onClick={handleFilter} className="each">
            <h6 className="bold">Filter</h6>
            <BiFilter className="bold iconn" />
          </div>
        </div>
      </div>
      <div className="header-segments">
        <ProductHeaderSection search="" text="All" />
        <ProductHeaderSection search="Dresses" text="Dresses" />
        <ProductHeaderSection search="Kimonos" text="Kimonos" />
        <ProductHeaderSection search="Palazos" text="Palazos" />
        <ProductHeaderSection search="Shorts" text="Shorts" />
        <ProductHeaderSection search="Tops" text="Tops" />
        <ProductHeaderSection search="Jumpsuits" text="Jumpsuits" />
        <ProductHeaderSection search="Jackets" text="Jackets" />
      </div>
    </div>
  );
};

export default ProductHeader;
