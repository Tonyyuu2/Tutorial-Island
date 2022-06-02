import React from "react";
import "./Home.css";
import backdrop from "../icons/backdrop.png";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={backdrop} className="home__image" alt="backdrop" />
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
