import React, { useContext } from "react";
import { CartContext } from "../context/Context";

function Total() {
  const { cart, calculateTotal } = useContext(CartContext);

  return (
    <div className="total-section">
      <h2>Cart Summary</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - Quantity: {item.quantity} - Subtotal:{" "}
            {item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: {calculateTotal()}</h3>
    </div>
  );
}

export default Total;
