import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCatItems] = useState(getDefaultCart());

  // console.log (">>>ckeck:" ,cartItems)
  const addItemToCart = (itemId) => {
    setCatItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };
  const removeItemToCart = (itemId) => {
    setCatItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    // console.log(cartItems)
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((e) => e.id === Number(item));
        totalAmount = totalAmount + itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    getTotalCartAmount,
    all_product,
    cartItems,
    addItemToCart,
    removeItemToCart,
  };
  return (
    <>
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    </>
  );
};

export default ShopContextProvider;
