import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (prod) => {
    dispatch(addToCart(prod));
  };

  return (
    <div className="col-md-4 col-lg-3 mb-2">
      <div className="card h-100 text-center p-4" key={product.id}>
        <img
          src={product.image}
          className="card-img-top"
          alt="for-product"
          height="350px"
        />
        <div className="card-body">
          <h5 className="card-title fw-bold mb-0">{product.title}</h5>
          <p className="card-text fs-5">${product.price}</p>
          <NavLink to={`/products/${product.id}`} className="btn btn-dark">
            Details
          </NavLink>
          <button
            onClick={() => handleAddToCart(product)}
            className="btn btn-dark ms-1"
          >
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
