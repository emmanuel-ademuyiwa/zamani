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
          <h6>Category</h6>
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

      <div className={size ? "each-section-show" : "short"}>
        <div className="sort-list">
          <h6>Size</h6>
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

      <div className={filter ? "each-section-show" : "short"}>
        <div className="sort-list">
          <h6>Filter</h6>
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
      </div>{" "}
    </>
  );
}

export default ProductSection