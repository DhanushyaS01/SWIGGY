import React, { useEffect } from "react";
import MenuItem from "./MenuItem";
import "./RestaurantModal.css";

const StarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="#48c479">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const RestaurantModal = ({ restaurant, onClose }) => {
  const r = restaurant;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="rmodal" onClick={(e) => e.stopPropagation()}>
        {/* Banner */}
        <div className="rmodal__banner">
          <img src={r.img} alt={r.name} />
          <div className="rmodal__banner-grad" />
          <div className="rmodal__banner-info">
            <h2>{r.name}</h2>
            <div className="rmodal__badges">
              <span className="rmodal__badge">
                <StarIcon /> {r.rating}
              </span>
              <span className="rmodal__badge">🕐 {r.time}</span>
              <span className="rmodal__badge">📍 {r.loc}</span>
              <span className={`rmodal__badge ${r.isOpen ? "badge--open" : "badge--closed"}`}>
                {r.isOpen ? "🟢 Open Now" : "🔴 Closed"}
              </span>
            </div>
          </div>
          <button className="rmodal__close" onClick={onClose}>×</button>
        </div>

        {/* Menu body */}
        <div className="rmodal__body">
          {r.menu.map((section) => (
            <div key={section.cat}>
              <div className="rmodal__cat-title">
                {section.cat} <span>({section.items.length})</span>
              </div>
              {section.items.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantModal;
