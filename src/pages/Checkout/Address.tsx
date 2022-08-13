import React from "react";
import { useSelector } from "react-redux";

const Address = ({ address_check }:any) => {
//   const theme = useSelector((state) => state.theme.switch.value);

  return (
    <div>
      <form action="" className="addressForm">
        <div className="name">
          <label htmlFor="">First Name</label>
          <input className="" type="text" />
          <label htmlFor="">Last Name</label>
          <input className="" type="text" />
        </div>
        <div className="phoneContainer">
          <label htmlFor="">Mobile Number</label>
          <input className="" type="text" />
        </div>
        <label htmlFor="">Address</label>
        <textarea
          onChange={address_check}
          className="address"
          name=""
          id=""
        ></textarea>
        <div className="phoneContainer">
          <label htmlFor="">City</label>
          <input className="" type="text" />
        </div>
        <div className="phoneContainer">
          <label htmlFor="">State</label>
          <input className="" type="text" />
        </div>
      </form>
    </div>
  );
};

export default Address;
