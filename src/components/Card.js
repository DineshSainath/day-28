import React, { useContext, useState } from "react";
import { CartContext } from "../context/Context";

function Card({ id, title, brand, desc, price, thumbnail }) {
  const { updateCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    updateCart({ id, title, price }, newQuantity);
  };

  return (
    <div className="container">
      <div className="section1">
        <div className="img-section">
          <img className="thumbnail" src={thumbnail} alt={title} />
        </div>
        <div className="desc-section">
          <h2>{title}</h2>
          <h4>{brand}</h4>
          <p>{desc}</p>
        </div>
      </div>
      <div className="section2">
        <p>Price: {price}</p>
        <label>
          Quantity:
          <input
            type="number"
            min="0"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </label>
        <p>Subtotal: {price * quantity}</p>
      </div>
    </div>
  );
}

export default Card;
