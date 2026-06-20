import React, { useState } from "react";
import Hero from "../components/Hero";
import ScrollSection from "../components/ScrollSection";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantModal from "../components/RestaurantModal";
import Footer from "../components/Footer";
import { CATEGORIES, RESTAURANTS, DINEOUT, GROCERY } from "../data/restaurants";
import "./HomePage.css";

const HomePage = ({ onAddedToCart }) => {
  const [activeRestaurant, setActiveRestaurant] = useState(null);

  const openRestaurant = (r) => setActiveRestaurant(r);
  const closeRestaurant = () => setActiveRestaurant(null);

  return (
    <div className="homepage">
      <Hero />

      {/* Categories */}
      <ScrollSection title="What's on your mind?">
        {CATEGORIES.map((c) => (
          <div className="cat-item" key={c.id}>
            <div className="cat-circle" style={{ background: c.bg }}>{c.emoji}</div>
            <span className="cat-name">{c.name}</span>
          </div>
        ))}
      </ScrollSection>

      {/* Top Restaurants */}
      <ScrollSection title="Top restaurant chains">
        {RESTAURANTS.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} onClick={() => openRestaurant(r)} />
        ))}
      </ScrollSection>

      {/* Dineout */}
      <ScrollSection title="Discover best restaurants on Dineout">
        {DINEOUT.map((d) => (
          <div className="dineout-card" key={d.id}>
            <div className="dineout-img">
              <img src={d.img} alt={d.name} loading="lazy" />
            </div>
            <div className="dineout-body">
              <div className="dineout-name">{d.name}</div>
              <div className="dineout-info">⭐ {d.rating} · {d.cuisine}</div>
              <div className="dineout-cost">{d.cost}</div>
            </div>
          </div>
        ))}
      </ScrollSection>

      {/* Grocery */}
      <ScrollSection title="🛒 Instamart — Groceries in minutes" divider={false}>
        {GROCERY.map((g) => (
          <div className="grocery-card" key={g.id}>
            <div className="grocery-emoji">{g.emoji}</div>
            <div className="grocery-name">{g.name}</div>
            <div className="grocery-time">in {g.time}</div>
          </div>
        ))}
      </ScrollSection>

      <Footer />

      {/* Restaurant Modal */}
      {activeRestaurant && (
        <RestaurantModal restaurant={activeRestaurant} onClose={closeRestaurant} />
      )}
    </div>
  );
};

export default HomePage;
