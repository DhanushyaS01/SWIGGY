import React from "react";
import { useCart } from "../context/CartContext";
import "./CartDrawer.css";

const DELIVERY = 30;
const PLATFORM = 5;

const CartDrawer = ({ isOpen, onClose, onOrder }) => {
  const { cartItems, subtotal, addItem, decItem } = useCart();
  const grandTotal = cartItems.length > 0 ? subtotal + DELIVERY + PLATFORM : 0;

  return (
    <>
      {isOpen && <div className="cart-backdrop" onClick={onClose} />}
      <div className={`cart-drawer${isOpen ? " cart-drawer--open" : ""}`}>
        <div className="cart-drawer__header">
          <div className="cart-drawer__title">Your Cart</div>
          <button className="cart-drawer__close" onClick={onClose}>×</button>
        </div>

        <div className="cart-drawer__body">
          {cartItems.length === 0 ? (
            <div className="cart-drawer__empty">
              <div className="cart-drawer__empty-icon">🛒</div>
              <div className="cart-drawer__empty-text">Your cart is empty</div>
              <div className="cart-drawer__empty-sub">
                Add items from a restaurant to get started
              </div>
            </div>
          ) : (
            <>
              <div className="cart-drawer__items">
                {cartItems.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <div className="cart-item__left">
                      <span className={`veg-badge ${item.veg ? "veg" : "nonveg"}`} />
                      <span className="cart-item__name">{item.name}</span>
                    </div>
                    <div className="cart-item__right">
                      <div className="cart-item__qty-ctrl">
                        <button onClick={() => decItem(item.id)}>−</button>
                        <span>{item.qty}</span>
                        <button onClick={() => addItem(item)}>+</button>
                      </div>
                      <span className="cart-item__price">₹{item.price * item.qty}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-drawer__totals">
                <div className="cart-drawer__row">
                  <span>Subtotal</span><span>₹{subtotal}</span>
                </div>
                <div className="cart-drawer__row">
                  <span>Delivery fee</span><span>₹{DELIVERY}</span>
                </div>
                <div className="cart-drawer__row">
                  <span>Platform fee</span><span>₹{PLATFORM}</span>
                </div>
                <div className="cart-drawer__row cart-drawer__row--total">
                  <span>Total</span><span>₹{grandTotal}</span>
                </div>
              </div>

              <button className="cart-drawer__order-btn" onClick={onOrder}>
                Place Order →
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
