import React, { useState, useCallback } from "react";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartDrawer from "./components/CartDrawer";
import FloatingCartBar from "./components/FloatingCartBar";
import useToast from "./components/useToast";
import "./index.css";
import "./App.css";

function AppInner() {
  const [cartOpen, setCartOpen] = useState(false);
  const { msg, visible, showToast } = useToast();

  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);

  const handleOrder = useCallback(() => {
    setCartOpen(false);
    showToast("🎉 Order placed successfully!");
  }, [showToast]);

  return (
    <div className="app">
      <Navbar onCartClick={openCart} />
      <main>
        <HomePage showToast={showToast} />
      </main>
      <CartDrawer isOpen={cartOpen} onClose={closeCart} onOrder={handleOrder} />
      <FloatingCartBar onClick={openCart} />
      <div className={`toast${visible ? " show" : ""}`}>{msg}</div>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppInner />
    </CartProvider>
  );
}

export default App;
