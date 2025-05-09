import React from "react";
import Pizza from "./pizza";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Menu = () => {
  // const pizza = pizzaData?.map((x) => x?.name);
  const pizza = pizzaData;
  const numPizza = pizza?.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div>
        {numPizza > 0 ? (
          <ul className="pizzas">
            {pizzaData?.map((item) => (
              <Pizza
                image={item?.photoName}
                name={item?.name}
                ingredient={item?.ingredients}
                price={item?.price}
                soldOut={item?.soldOut}
              />
            ))}
          </ul>
        ) : null}
      </div>
    </main>
  );
};

export default Menu;
