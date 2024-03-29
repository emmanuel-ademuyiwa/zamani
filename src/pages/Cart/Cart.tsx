import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
// import DisplayItem from "../Products/DisplayItem";
// import { displayItem, loadCurrentItem } from "../../redux/shopping/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineDelete,
} from "react-icons/ai";
import {
  removeFromCart,
  increaseItem,
  decreaseItem,
  getRemoveFromCartId,
} from "../../redux/shopping/actions";
import { Link } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import UpdateItem from "../Products/UpdateItem";

const Cart = () => {
  const cart = useSelector((state: any) => state.shop.cart);
  const dispatch = useDispatch();

  //   const display = useSelector((state: any) => state.shop.display);
  const [cartitem, setCartitem] = useState(false);
  const [removeItem, setRemoveItem] = useState(false);
  const removeId = useSelector((state: any) => state.shop.removeItemId);

  // function handleCartitem() {
  //   setCartitem(!cartitem);
  //   dispatch(loadCurrentItem(item));
  // }

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items: number = 0;
    let price = 0;
    cart.forEach((item: any) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalItems, setTotalPrice]);

  function handleRemoveCartItem() {
    setRemoveItem(true);
  }

  return (
    <Layout>
      <div className="cartPage">
        <div className="cartList">
          {cart.map((item: any) => (
            <div className="" key={item.id}>
              <div className="cartItem">
                <UpdateItem
                  handleCartitem={() => {
                    setCartitem(!cartitem);
                  }}
                  cartitem={cartitem}
                  item={item}
                  id={item.id}
                />
                <div className="cartItemImg">
                  <img src={item.image1} alt="" />
                </div>
                <div className="cartItemDetails black">
                  <div className="cartTitle">
                    <div className="title">
                      <h6 className="black">{item.title}</h6>
                      <h6>
                        ₦{(item.qty * item.price.toFixed(2)).toLocaleString()}
                      </h6>
                    </div>

                    <AiOutlineDelete
                      onClick={() => {
                        setRemoveItem(true);
                        dispatch(getRemoveFromCartId(item.id));
                      }}
                      className="icon red"
                    />
                  </div>
                  <div className="size">
                    <h6>Size: {item.size} </h6>
                    <TiArrowSortedDown className="icon" />
                  </div>
                  <div className="cartPriceQty">
                    <div className="qty">
                      <AiFillPlusCircle
                        className="icon first"
                        onClick={() => dispatch(increaseItem(item.id))}
                      />
                      <h6>{item.qty}</h6>
                      <AiFillMinusCircle
                        className="icon"
                        onClick={
                          item.qty === 1
                            ? () => dispatch(decreaseItem(99999999))
                            : () => dispatch(decreaseItem(item.id))
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cartTotalDetails">
          <div className="black">
            <h4>Cart Summary</h4>
            <div className="cartTotal">
              <h5>Subtotal</h5>
              <h5>₦{totalPrice.toLocaleString()}</h5>
            </div>
            {cart.length >= 1 && (
              <div className="checkoutButton black">
                <Link to="/checkout">
                  <button className="button">Proceed to checkout</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {removeItem && (
        <div className="confirm-delete">
          <div className="inner-frame">
            <h6>Are you sure you want to remove this product?</h6>
            <div className="button-container">
              <button className="cancel" onClick={() => setRemoveItem(false)}>
                Cancel
              </button>
              <button
                className="confirm"
                onClick={() => {
                  dispatch(removeFromCart(removeId));
                  setRemoveItem(false);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Cart;
