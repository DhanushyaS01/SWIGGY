import React, { createContext, useContext, useReducer, useCallback } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const exists = state.items.find((i) => i.id === action.item.id);
      return {
        ...state,
        items: exists
          ? state.items.map((i) =>
              i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i
            )
          : [...state.items, { ...action.item, qty: 1 }],
      };
    }
    case "DEC": {
      const item = state.items.find((i) => i.id === action.id);
      if (!item) return state;
      const items =
        item.qty === 1
          ? state.items.filter((i) => i.id !== action.id)
          : state.items.map((i) =>
              i.id === action.id ? { ...i, qty: i.qty - 1 } : i
            );
      return { ...state, items };
    }
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = useCallback((item) => dispatch({ type: "ADD", item }), []);
  const decItem = useCallback((id) => dispatch({ type: "DEC", id }), []);
  const clearCart = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const getQty = useCallback(
    (id) => {
      const found = state.items.find((i) => i.id === id);
      return found ? found.qty : 0;
    },
    [state.items]
  );

  const totalItems = state.items.reduce((acc, i) => acc + i.qty, 0);
  const subtotal = state.items.reduce((acc, i) => acc + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{ cartItems: state.items, totalItems, subtotal, addItem, decItem, clearCart, getQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
