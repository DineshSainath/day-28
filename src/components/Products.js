import React, { useState } from "react";
import productData from "../product.json";
import Card from "./Card";

function Products() {
  const data = productData.products;
  console.log(data);

  return (
    <div className="products">
      <ul>
        {data.map((item) => (
          <Card
            key={item.id}
            brand={item.brand}
            desc={item.description}
            title={item.title}
            price={item.price}
            thumbnail={item.thumbnail}
          />
        ))}
      </ul>
    </div>
  );
}

export default Products;
