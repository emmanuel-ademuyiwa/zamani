import React from "react";
import sh from "../../images/sh.jpg";
import neww from "../../images/new.jpeg";
import bestseller from "../../images/bestseller.jpeg";
import clearance from "../../images/clearance.jpeg";
import dreamy from "../../images/dreamy.jpeg";
import { Link } from "react-router-dom"; 
import { useDispatch } from "react-redux";

import { getSearch } from "../../redux/shopping/actions";


const SectionList = () => {

  const dispatch = useDispatch()

  return (
    <div className="container homepage">
      <div className="section-list">
        <div className="section" onClick={() => dispatch(getSearch(""))}>
          <Link className="no-decoration" to="/products">
            <div className="img">
              <img src={sh} alt="" />
            </div>
            <h6>Everything</h6>
          </Link>
        </div>
        <div className="section">
          <Link className="no-decoration" to="/products">
            <div className="img">
              <img src={neww} alt="" />
            </div>
            <h6>New</h6>
          </Link>
        </div>
        <div className="section">
          <Link className="no-decoration" to="/products">
            <div className="img">
              <img src={bestseller} alt="" />
            </div>
            <h6>Curve</h6>
          </Link>
        </div>
        <div className="section">
          <Link className="no-decoration" to="/products">
            <div className="img">
              <img src={clearance} alt="" />
            </div>
            <h6>Clearance</h6>
          </Link>
        </div>
        <div className="section">
          <Link className="no-decoration" to="/products">
            <div className="img">
              <img src={dreamy} alt="" />
            </div>
            <h6>Dreamy</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionList;
