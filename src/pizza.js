import React from "react";

const Pizza = ({ image, name, ingredient, price, soldOut }) => {
  return (
    <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={image} />
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
        <span>{soldOut ? "SOLD OUT" : price + 5}</span>
      </div>
    </div>
  );
};

export default Pizza;
