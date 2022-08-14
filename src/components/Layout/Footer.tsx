import React from "react";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="mobile-footer">
        <div className="about-zamani">
          <div className="container">
            <h1>About Zamani</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              cupiditate, dignissimos quia illum placeat voluptas rem omnis ut
              facilis soluta? Ratione!
            </p>
          </div>
        </div>
        <div className="main-footer">
          <div className="">
            <h1 className="logo">Zamani</h1>
            <ul>
              <li>About Us</li>
              <li>Track My Order</li>
              <li>Sizing Help</li>
              <li>Shopping & Delivery</li>
              <li>Return & Refunds</li>
              <li>FAQ & Contact Us</li>
              <li>Privacy policy</li>
              <li>Terms of Service</li>
              <li>Paymemt Method</li>
              <li>
                <div className="container">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptates magni aperiam, molestiae velit suscipit sit.
                  </p>
                </div>
              </li>
              <li>Email Us</li>
              <li className="social-section">
                <p>Follow Us</p>
                <div className="social-icons">
                  <FaInstagramSquare className="icon" />
                  <FaWhatsappSquare className="icon" />
                  <FaTwitterSquare className="icon" />
                  <FaFacebookSquare className="icon" />
                </div>
              </li>
              <li>
                Payment Methods
                <div className="payment-icons">
                  <FaCcVisa className="payment" />
                  
                  <FaCcMastercard />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
