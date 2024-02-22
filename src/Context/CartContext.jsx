import { createContext, useState } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  function addItem(item, quantity) {
    if (isInCart(item.id)) {
      let pos = cart.findIndex((i) => i.id === item.id);
      cart[pos].quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: quantity }]);
    }
  }
  function removeItem(item) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCart([...cart]);
    } else {
      setCart(cart.filter((i) => i.id !== item.id));
    }
  }
  function clear() {
    setCart([]);
  }
  function isInCart(id) {
    return cart.some((item) => item.id === id);
  }
  function CantTotalProductos() {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }
  function SumaTotalProductos() {
    return cart.reduce((acc, item) => acc + item.Precio * item.quantity, 0);
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        CantTotalProductos,
        SumaTotalProductos,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
