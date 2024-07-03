import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItem, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  if (!cartItem || !food_list) {
    return <div>Loading...</div>; // or handle the loading state appropriately
  }

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <>
                <div
                  key={item._id}
                  className="cart-items-title cart-items-item"
                >
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>{item.price * cartItem[item._id]}</p>
                  <button onClick={() => removeFromCart(item._id)}>
                    Remove
                  </button>
                </div>
                <hr />
              </>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{0}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{0}</p>
            </div>
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalCartAmount()}</p>
            </div>
          </div>
          <button>Proceed to checkout</button>
        </div>
        <div className="cart-promocode">
<div>
  <p>If you have a promo code, enter it here</p>
  <div className="promocode-input">
    <input type="text" placeholder="Promo code" />
    <button>Submit</button>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
