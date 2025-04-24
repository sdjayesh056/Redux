import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    dispatch(remove(itemId));
  };
  return (
    <div className="cartWrapper">
      <h1>This is our cart page</h1>

      {items.map((item) => {
        return (
          <div className="cartCard">
            <img src={item.image} />
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button className="removeBtn" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
