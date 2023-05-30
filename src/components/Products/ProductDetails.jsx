import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      if (res.data) {
        setProduct(res.data);
      }
    });
  }, [id]);

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <h3 className="display-6">Price : ${product.price}</h3>
            <h3 className="display-6">
              Rate : {product.rating && product.rating.rate}
            </h3>
            <p className="lead">{product.description}</p>
            <button
              className="btn btn-outline-dark"
              onClick={() => handleAddToCart(product)}
            >
              Add To Cart
            </button>
            <NavLink to="/cart" className="btn btn-dark ms-2">
              Go To Cart
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
