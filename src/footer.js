import React from "react";

const Footer = () => {
  const hours = new Date().getHours();
  const open = 12;
  const close = 24;
  const isOpen = hours >= open && hours <= close;
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We're open until {close}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
};

export default Footer;
