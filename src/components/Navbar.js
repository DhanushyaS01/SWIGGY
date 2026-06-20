import React, { useState, useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

const Navbar = ({ onCartClick }) => {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const prevTotal = useRef(0);
  const [pop, setPop] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (totalItems > prevTotal.current) {
      setPop(true);
      setTimeout(() => setPop(false), 350);
    }
    prevTotal.current = totalItems;
  }, [totalItems]);

  return (
    <nav className={`navbar${scrolled ? " navbar--shadow" : ""}`}>
      <div className="navbar__inner">
        <div className="navbar__logo">Swiggy</div>

        <div className="navbar__location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--orange)">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" fill="white" />
          </svg>
          <span className="navbar__city">Bangalore</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="var(--orange)">
            <path d="M7 10l5 5 5-5z" />
          </svg>
          <span className="navbar__addr">Koramangala, Bengaluru</span>
        </div>

        <div className="navbar__search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="var(--text-muted)" strokeWidth="2" />
            <path d="M21 21l-4.35-4.35" stroke="var(--text-muted)" strokeWidth="2" />
          </svg>
          <input placeholder="Search for restaurants and food" />
        </div>

        <div className="navbar__actions">
          <button className="navbar__signin">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
            </svg>
            Sign In
          </button>

          <button className="navbar__cart" onClick={onCartClick}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="2" />
              <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" />
              <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="2" />
            </svg>
            Cart
            {totalItems > 0 && (
              <span className={`navbar__badge${pop ? " pop" : ""}`}>{totalItems}</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
