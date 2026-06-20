import React from "react";
import "./Footer.css";

const COLS = [
  { title: "COMPANY", links: ["About", "Careers", "Team", "Swiggy One", "Swiggy Instamart"] },
  { title: "CONTACT US", links: ["Help & Support", "Partner with us", "Ride with us", "Swiggy Corporate"] },
  { title: "LEGAL", links: ["Terms & Conditions", "Cookie Policy", "Privacy Policy", "Investor Relations"] },
  { title: "AVAILABLE IN", links: ["Bangalore", "Mumbai", "Delhi NCR", "Hyderabad", "Chennai", "Pune", "Kolkata"] },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      <div className="footer__logo">Swiggy</div>
      <p className="footer__tagline">© 2024 Bundl Technologies Pvt. Ltd</p>
      <div className="footer__grid">
        {COLS.map((col) => (
          <div className="footer__col" key={col.title}>
            <h4>{col.title}</h4>
            {col.links.map((l) => <span key={l}>{l}</span>)}
          </div>
        ))}
      </div>
      <div className="footer__bottom">
        <p>For the best experience, download the Swiggy app</p>
        <div className="footer__stores">
          <div className="footer__store-btn">📱 App Store</div>
          <div className="footer__store-btn">🤖 Play Store</div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
