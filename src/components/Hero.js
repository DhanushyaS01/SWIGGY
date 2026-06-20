import React from "react";
import "./Hero.css";

const HERO_CARDS = [
  { icon: "🍔", label: "Food Delivery", sub: "Order from 500+ restaurants" },
  { icon: "🛒", label: "Instamart", sub: "Groceries in 10 minutes" },
  { icon: "🍽️", label: "Dineout", sub: "Discover the best restaurants" },
];

const Hero = () => (
  <section className="hero">
    <h1 className="hero__heading">
      Order food & groceries.<br />
      <span>Discover best restaurants.</span><br />
      Swiggy it!
    </h1>

    <div className="hero__bar">
      <div className="hero__bar-loc">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#fc8019">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        </svg>
        <span>Bangalore</span>
      </div>
      <input placeholder="Search for area, street name..." />
    </div>

    <div className="hero__cards">
      {HERO_CARDS.map((c) => (
        <div className="hero__card" key={c.label}>
          <span className="hero__card-icon">{c.icon}</span>
          <span className="hero__card-label">{c.label}</span>
          <span className="hero__card-sub">{c.sub}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Hero;
