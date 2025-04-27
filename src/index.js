import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Footer from "./footer";
import Menu from "./menu";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// function Pizza() {
//   return (
//     <div>
//       <img src="pizzas/funghi.jpg" alt="Pizza Funghi" />
//       <h1>Pizza Funghi</h1>
//       <p>Tomato, mozarella, mushrooms, and onion</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
