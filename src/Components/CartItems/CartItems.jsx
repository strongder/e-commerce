import React, { useContext } from "react";
import "./CartItems.scss";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

function CartItems() {
  const { all_product, cartItems,getTotalCartAmount, addItemToCart, removeItemToCart } =
    useContext(ShopContext);

  //console.log(">>check:", all_product);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((item, i) => {
        if (cartItems[item.id] > 0) {
          return (
            <>
              <div key={i} className="cartitems-format">
                <img
                  src={item.image}
                  alt=""
                  className="carticon-product-icon"
                />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <div className="add-item">
                  <p>{cartItems[item.id]}</p>{" "}
                  <button onClick={() => addItemToCart(item.id)}>+</button>
                </div>
                <p>{item.new_price * cartItems[item.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => removeItemToCart(item.id)}
                  alt=""
                />
              </div>
              <hr />
            </>
          );
        }
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h2>Cart Total</h2>
          <div className="cartitems-total-item">
            <p>Subtatal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>$${getTotalCartAmount()}</h3>
          </div>
        <button className="checkout">PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo-code" />
            <button onClick={() => getTotalCartAmount()}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
