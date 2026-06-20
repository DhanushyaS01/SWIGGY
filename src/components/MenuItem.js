import React from "react";
import { useCart } from "../context/CartContext";
import "./MenuItem.css";

const MenuItem = ({ item }) => {
  const { addItem, decItem, getQty } = useCart();
  const qty = getQty(item.id);

  return (
    <div className="menu-item">
      <div className="menu-item__info">
        <span className={`veg-badge ${item.veg ? "veg" : "nonveg"}`} />
        <div className="menu-item__name">{item.name}</div>
        <div className="menu-item__price">₹{item.price}</div>
        <div className="menu-item__desc">{item.desc}</div>
      </div>

      <div className="menu-item__right">
        <img src={item.img} alt={item.name} loading="lazy" className="menu-item__img" />
        {qty === 0 ? (
          <button className="menu-item__add" onClick={() => addItem(item)}>
            ADD <span>+</span>
          </button>
        ) : (
          <div className="menu-item__qty">
            <button className="menu-item__qty-btn" onClick={() => decItem(item.id)}>−</button>
            <span className="menu-item__qty-num">{qty}</span>
            <button className="menu-item__qty-btn" onClick={() => addItem(item)}>+</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
