import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>
          Craving something delicious? Explore our wide selection of
          mouth-watering dishes, made with fresh ingredients and delivered
          straight to your doorstep. Order your favourites and enjoy a tasty
          meal anytime!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}
