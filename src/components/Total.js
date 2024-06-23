import React, { useContext } from "react";
import { CartContext } from "../context/Context";
import "bootstrap/dist/css/bootstrap.min.css";

function Total() {
  const { cart, calculateTotal } = useContext(CartContext);

  return (
    <div className="total-section card p-3 shadow-sm">
      <h2>Cart Summary</h2>
      <ul className="list-group list-group-flush">
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              {item.title} - Quantity: {item.quantity} - Subtotal:{" "}
              {item.price * item.quantity}
            </div>
            <div className="remove">REMOVE</div>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-between mt-3">
        <span>SUBTOTAL:</span>
        <span>{calculateTotal()}</span>
      </div>
      <div className="d-flex justify-content-between">
        <span>SHIPPING:</span>
        <span>FREE</span>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <h3>TOTAL:</h3>
        <h3>{calculateTotal()}</h3>
      </div>
    </div>
  );
}

export default Total;
