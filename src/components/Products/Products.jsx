import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          setProducts(res.data);
        }
      })
      .catch((err) => {
        console.log("Error" + err );
      });
  }, []);

  return (
    <div>
      <div className="container my-4 py-4">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center display-3 fw-bold">
              Latest Products with Zosar Store Are Awesome ..
            </h1>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center pb-2">
          <div className="buttons text-center">
            <button className="btn btn-outline-dark">All</button>
            <button className="btn btn-outline-dark ms-2">Men's</button>
            <button className="btn btn-outline-dark ms-2">Woman</button>
          </div>
        </div>
        <div className="container py-3">
          <div className="row">
            {products.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
