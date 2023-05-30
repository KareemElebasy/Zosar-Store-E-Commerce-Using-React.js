import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../../redux/cartSlice";
import { NavLink } from "react-router-dom";

const Cart = () => {
  let cartState = useSelector((state) => state.cart);

  console.log("Cart" + cartState);

  const dispatch = useDispatch();

  return (
    <div>
      {cartState.cartProduct.length === 0 ? (
        <div className="text-center py-5">
          <h2>Cart Is Empty</h2>
          <NavLink className="fs-5" to="/products">
            View Zosar's Products
          </NavLink>
        </div>
      ) : (
        cartState.cartProduct.map((product) => {
          return (
            <div className="container py-5 px-5" key={product.id}>
              <div className="row ">
                <div className="col-md-6">
                  <img
                    width="200px"
                    height="300px"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="col-md-6">
                  <h4 className="display-5">{product.title}</h4>
                  <h4 className="display-5">{product.category}</h4>
                  <h4 className="fs-5 fw-bold">
                    Quantity : {product.quantity}
                  </h4>
                  <button
                    className="btn btn-success"
                    onClick={() => dispatch(incrementQuantity(product.id))}
                  >
                    Increace
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => dispatch(decrementQuantity(product.id))}
                  >
                    Decreace
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cart;
