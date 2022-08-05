import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { CgSearch } from "react-icons/cg";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";

import { HiPlusSm } from "react-icons/hi";
import { MdArrowForwardIos } from "react-icons/md";
import Search from "./Search";

const Header = () => {
  const ref = useRef<any>();
  

  const [sidenav, setSidenav] = useState(false);
  const [clothing, setClothing] = useState(false);
  const [sale, setSale] = useState<boolean>(false);
  const [help, setHelp] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false)


  function handleSidenav() {
    setSidenav(!sidenav);
  }

  function handleClothing() {
    setClothing(!clothing);
  }

  function handleSale() {
    setSale(!sale);
  }
  function handleHelp() {
    setHelp(!help);
  }

  const handleSearch = () => {
    setSearch(!search)
  }
  
  
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (sidenav && ref.current && !ref.current.contains(e.target)) {
        setSidenav(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [sidenav]);

  return (
    <header>
      <div className="container mobile">
        <FaBars onClick={handleSidenav} className="bar" />
        <Link
          style={{ textDecoration: "none", color: "black" }}
          className="no-decoration"
          to="/"
        >
          <h4 className="logo">ZAMANI</h4>
        </Link>
        <div className="right-header-content">
          <CgSearch className="search-icon" onClick={handleSearch} />
          <AiOutlineShopping className="cart-icon" />
        </div>
      </div>
      <div
        data-backdrop="static"
        data-keyboard="false"
        className={sidenav ? "side-nav" : "close-side-nav-bar"}
      >
        <div ref={ref} className="side-nav-inner">
          <div className="side-nav-header">
            <h5 className="side-nav-title">My account</h5>
            <h6
              onClick={handleSidenav}
              className="side-nav-login-button"
            >
              Log in <MdArrowForwardIos />
            </h6>
          </div>
          <div className="side-nav-body">
            <ul>
              <li>
                <h6>Homepage</h6>
              </li>
              <li>
                <h6>New New</h6>
              </li>
              <li>
                <h6>Wishlist</h6>
              </li>
              <li>
                <>
                  <div className="flex-nav">
                    <h6 className="first">Clothing</h6>
                    <HiPlusSm className="icon" onClick={handleClothing} />
                  </div>
                  <div className={clothing ? "single-list" : "no-width"}>
                    <h6>List one</h6>
                    <h6>List 2</h6>
                    <h6>List three</h6>
                  </div>
                </>
              </li>

              <li>
                <>
                  <div className="flex-nav">
                    <h6>Sale</h6>
                    <HiPlusSm className="icon" onClick={handleSale} />
                  </div>
                  <div className={sale ? "single-list" : "no-width"}>
                    <h6>List one</h6>
                    <h6>List 2</h6>
                    <h6>List three</h6>
                  </div>
                </>
              </li>

              <li>
                <>
                  <div className="flex-nav">
                    <h6>Help & Support</h6>
                    <HiPlusSm className="icon" onClick={handleHelp} />
                  </div>
                  <div className={help ? "single-list" : "no-width"}>
                    <h6>List one</h6>
                    <h6>List 2</h6>
                    <h6>List three</h6>
                  </div>
                </>
              </li>
              <li className="flex-nav">
                <h6>Country/Region</h6>
                <h6 className="side-nav-grey">
                  Nigeria <MdArrowForwardIos />
                </h6>
              </li>
              <li className="flex-nav">
                <h6>Currency</h6>
                <h6 className="side-nav-grey">
                  NGN ₦ <MdArrowForwardIos />
                </h6>
              </li>
              <li className="flex-nav">
                <h6>Language</h6>
                <h6 className="side-nav-grey">
                  English <MdArrowForwardIos />
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
      { search && <Search handlesearch={handleSearch} />}
    </header>
  );
};

export default Header;
