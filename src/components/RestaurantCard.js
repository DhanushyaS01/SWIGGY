import React from "react";
import "./RestaurantCard.css";

const StarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="#48c479">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const RestaurantCard = ({ restaurant, onClick }) => {
  const r = restaurant;
  return (
    <div className="rcard" onClick={onClick}>
      <div className="rcard__img-wrap">
        <img src={r.img} alt={r.name} loading="lazy" className="rcard__img" />
        {r.offer && <div className="rcard__offer">{r.offer}</div>}
        {!r.isOpen && (
          <div className="rcard__closed">
            <span>Currently Closed</span>
          </div>
        )}
      </div>
      <div className="rcard__body">
        <div className="rcard__name">{r.name}</div>
        <div className="rcard__meta">
          <span className="rcard__rating"><StarIcon />{r.rating}</span>
          <span className="rcard__dot">•</span>
          <span>{r.time}</span>
          <span className="rcard__dot">•</span>
          <span>₹{r.price} for two</span>
        </div>
        <div className="rcard__cuisine">{r.cuisine.join(", ")}</div>
        <div className="rcard__loc">{r.loc}, Bangalore</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
