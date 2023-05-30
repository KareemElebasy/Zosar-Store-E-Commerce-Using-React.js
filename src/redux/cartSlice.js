import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProduct: [],
    numOfProduct: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const exist = state.cartProduct.find((p) => p.id === action.payload.id);
      console.log(exist);

      if (exist) {
        exist.quantity++;
      } else {
        state.cartProduct.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const removeItem = state.cartProduct.filter((item) => item.id !== action.payload);
      state.cartProduct = removeItem;
    },

    incrementQuantity: (state, action) => {
      const item = state.cartProduct.find((item) => item.id === action.payload);
      item.quantity++;
    },

    decrementQuantity: (state, action) => {
      const item = state.cartProduct.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart ,incrementQuantity,decrementQuantity } = cartSlice.actions;
