import React from "react";
import ReactDOM from "react-dom/client";
// import Header from "./header";
// import Footer from "./footer";
// import Menu from "./menu";
// import "./index.css";
import Avatar from "./challenge1/avatar";
import Intro from "./challenge1/intro";
import SkillsList from "./challenge1/skillsList";
import "./challenge1/index.css";

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillsList />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
