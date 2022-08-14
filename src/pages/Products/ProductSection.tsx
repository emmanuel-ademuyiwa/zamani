import React from 'react'

const ProductSection = ({sort, category, size, filter}:any) => {
  return (
    <>
      <div className={sort ? "each-section-show" : "short"}>
        <div className="sort-list">
          <h6>Recommendation</h6>
        </div>
        <div className="sort-list">
          <h6>Best-Selling</h6>
        </div>
        <div className="sort-list">
          <h6>New Arrivals</h6>
        </div>
        <div className="sort-list">
          <h6>Price: Low to High</h6>
        </div>
        <div className="sort-list">
          <h6>Price: Low to High</h6>
        </div>
      </div>
      <div className={category ? "each-section-show" : "short"}>
        <div className="sort-list">
          <h6>Top</h6>
        </div>
        <div className="sort-list">
          <h6>Bottom</h6>
        </div>
        <div className="sort-list">
          <h6>Dresses</h6>
        </div>
        <div className="sort-list">
          <h6>Matching sets</h6>
        </div>
        <div className="sort-list">
          <h6>Jumpsuits</h6>
        </div>
      </div>
      <div className={size ? "each-section-show" : "short"}>
        <div className="sort-list">
          <h6>XS: 25.6inch / 65cm</h6>
        </div>
        <div className="sort-list">
          <h6>S: 27.2inch / 69cm</h6>
        </div>
        <div className="sort-list">
          <h6>M: 28.7inch / 73cm</h6>
        </div>
        <div className="sort-list">
          <h6>L: 30.7inch / 78cm</h6>
        </div>
        <div className="sort-list">
          <h6>XL: 32.7inch / 83cm</h6>
        </div>
      </div>
      <div className={filter ? "each-section-show" : "short"}>
        <div className="sort-list">
          <h6>Filter</h6>
        </div>
        
      </div>{" "}
    </>
  );
}

export default ProductSection