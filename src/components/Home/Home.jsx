import React from "react";
import Products from "../Products/Products";


const Home = () => {

  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="/assets/hero-bg.jpg"
          className="card-img"
          alt="Hero-Backgroud"
          height="660px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bold">NEW SEASON ARRIVALS</h5>
            <p className="card-text display-5 ">CHECK OUT ALL THE TREND</p>
          </div>
          <p className="card-text"></p>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
