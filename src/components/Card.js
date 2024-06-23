import React, { useContext, useState } from "react";
import { CartContext } from "../context/Context";
import "bootstrap/dist/css/bootstrap.min.css";

function Card({ id, title, brand, desc, price, thumbnail }) {
  const { updateCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    updateCart({ id, title, price }, newQuantity);
  };

  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0">
        <div className="col-md-2 d-flex align-items-center justify-content-center">
          <img
            src={thumbnail}
            className="thumbnail img-fluid rounded-start"
            alt={title}
          />
        </div>
        <div className="col-md-10">
          <div className="card-body d-flex justify-content-between align-items-start">
            <div className="desc-section">
              <h2 className="card-title">{title}</h2>
              <h4 className="card-subtitle mb-2 text-muted">{brand}</h4>
              <p className="card-text">{desc}</p>
            </div>
            <div className="section2 d-flex flex-column align-items-end">
              <p className="price mb-2">Price: {price}</p>
              <div className="quantity d-flex align-items-center mb-2">
                <label htmlFor={`quantity-${id}`} className="mb-0">
                  Quantity:
                </label>
                <input
                  type="number"
                  id={`quantity-${id}`}
                  min="0"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="form-control quantity-input"
                />
              </div>
              <p className="subtotal mb-0">Subtotal: {price * quantity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
