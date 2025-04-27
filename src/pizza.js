import React from "react";

const Pizza = ({ image, name, ingredient, price }) => {
  return (
    <div className="pizza">
      <img src={image} />
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
        <span>{price + 5}</span>
      </div>
    </div>
  );
};

export default Pizza;
