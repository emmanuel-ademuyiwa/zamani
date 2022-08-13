import React from "react";
import { useDispatch } from "react-redux";
import { checkAddress } from "../../redux/shopping/actions";

interface Props { 
    text: string,
    address: string
}

const Button = ({ text, address }:Props) => {
  const dispatch = useDispatch();

  function handleAddress() {
    dispatch(checkAddress());
    alert(`Your address: ${address}`);
  }

  return (
    <button
      onClick={handleAddress}
      className={address.length >= 15 ? "btn" : "disabled"}
      disabled={address.length >= 15 ? false : true}
    >
      {text}
    </button>
  );
};

export default Button;
