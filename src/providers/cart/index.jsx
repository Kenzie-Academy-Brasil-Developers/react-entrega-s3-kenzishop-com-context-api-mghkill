import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@Cart:products")) || []
  );

  const addCart = (itemObj, count) => {
    itemObj.amout = count;
    itemObj.price = itemObj.price * count;
    const updateObj = [...cart, itemObj];
    localStorage.setItem("@Cart:products", JSON.stringify(updateObj));
    setCart(updateObj);
  };

  const removeCart = (itemObj) => {
    const updateObj = cart.filter((item) => item.id !== itemObj.id);
    localStorage.setItem("@Cart:products", JSON.stringify(updateObj));
    setCart(updateObj);
  };

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};
