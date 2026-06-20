import React from "react";
import { useCart } from "../context/CartContext";
import "./FloatingCartBar.css";

const FloatingCartBar = ({ onClick }) => {
  const { totalItems, subtotal } = useCart();

  if (totalItems === 0) return null;

  return (
    <div className="float-cart" onClick={onClick}>
      <div className="float-cart__left">
        <span className="float-cart__count">{totalItems} item{totalItems > 1 ? "s" : ""}</span>
        <span className="float-cart__label">View Cart</span>
      </div>
      <div className="float-cart__right">
        <span className="float-cart__total">₹{subtotal}</span>
        <span className="float-cart__arrow">↑</span>
      </div>
    </div>
  );
};

export default FloatingCartBar;
