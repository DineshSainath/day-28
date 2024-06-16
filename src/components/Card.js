import React from "react";

function Card({ title, brand, desc, price, thumbnail }) {
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
      <div className="section2">{price}</div>
    </div>
  );
}

export default Card;
