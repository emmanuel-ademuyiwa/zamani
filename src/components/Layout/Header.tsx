import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { CgSearch } from "react-icons/cg";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";

import { HiPlusSm } from "react-icons/hi";
import { MdArrowForwardIos } from "react-icons/md";
import Search from "./Search";
import { useSelector, useDispatch } from "react-redux";
import { getSearch } from "../../redux/shopping/actions";

const Header = () => {
  const ref = useRef<any>();
  const dispatch = useDispatch();
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

  const [sidenav, setSidenav] = useState(false);
  const [clothing, setClothing] = useState(false);
  const [sale, setSale] = useState<boolean>(false);
  const [help, setHelp] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);

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
    setSearch(!search);
  };

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
          <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
            <AiOutlineShopping className="cart-icon" />
          </Link>
          <div className="cart-count">
            <p>{totalItems}</p>
          </div>
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
            <h6 onClick={handleSidenav} className="side-nav-login-button">
              Log in <MdArrowForwardIos />
            </h6>
          </div>
          <div className="side-nav-body">
            <ul>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                {" "}
                <li>
                  <h6>Homepage</h6>
                </li>
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <li>
                  <h6>New New</h6>
                </li>
              </Link>

              <li>
                <>
                  <div className="flex-nav">
                    <h6 className="first" onClick={handleClothing}>
                      Clothing
                    </h6>
                    <HiPlusSm className="icon" onClick={handleClothing} />
                  </div>
                  <div className={clothing ? "single-list" : "no-width"}>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/products"
                    >
                      <h6
                        onClick={() => {
                          dispatch(getSearch("dresses"));
                          setSidenav(!sidenav);
                        }}
                      >
                        Dresses
                      </h6>
                    </Link>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/products"
                    >
                      <h6
                        onClick={() => {
                          dispatch(getSearch("Kimonos"));
                          setSidenav(!sidenav);
                        }}
                      >
                        Kimonos
                      </h6>
                    </Link>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/products"
                    >
                      <h6
                        onClick={() => {
                          dispatch(getSearch("Palazos"));
                          setSidenav(!sidenav);
                        }}
                      >
                        Palazos
                      </h6>
                    </Link>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/products"
                    >
                      <h6
                        onClick={() => {
                          dispatch(getSearch("Shorts"));
                          setSidenav(!sidenav);
                        }}
                      >
                        Shorts
                      </h6>
                    </Link>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/products"
                    >
                      <h6
                        onClick={() => {
                          dispatch(getSearch("Tops"));
                          setSidenav(!sidenav);
                        }}
                      >
                        Tops
                      </h6>
                    </Link>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/products"
                    >
                      <h6
                        onClick={() => {
                          dispatch(getSearch("Jumpsuits"));
                          setSidenav(!sidenav);
                        }}
                      >
                        Jumpsuits
                      </h6>
                    </Link>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/products"
                    >
                      <h6
                        onClick={() => {
                          dispatch(getSearch("Jackets"));
                          setSidenav(!sidenav);
                        }}
                      >
                        Jackets
                      </h6>
                    </Link>
                  </div>
                </>
              </li>

              <li>
                <>
                  <div className="flex-nav">
                    <h6 onClick={handleSale}>Sales</h6>
                    <HiPlusSm className="icon" onClick={handleSale} />
                  </div>
                  <div className={sale ? "single-list" : "no-width"}>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/sales"
                    >
                      <h6
                        onClick={() => {
                          dispatch(getSearch(""));
                          setSidenav(!sidenav);
                        }}
                      >
                        All
                      </h6>
                    </Link>
                    <h6>Suumer Clearance</h6>
                  </div>
                </>
              </li>
              <li>
                <h6 style={{ marginTop: "10px", marginBottom: "15px" }}>
                  Wishlist
                </h6>
              </li>
              <li>
                <>
                  <div className="flex-nav">
                    <h6>Help & Support</h6>
                    <HiPlusSm className="icon" onClick={handleHelp} />
                  </div>
                  <div className={help ? "single-list" : "no-width"}>
                    <h6>About Us</h6>
                    <h6>FAQ & Contact Us</h6>
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
      {search && <Search handlesearch={handleSearch} />}
    </header>
  );
};

export default Header;
