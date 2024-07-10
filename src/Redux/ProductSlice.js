import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const mystatus = Object.freeze({
  SUCCESS: "Success",
  ERROR: "Error",
  LOADING: "Loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: mystatus.SUCCESS,
  },

  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },

    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

/// using middleWare

const uri = "https://fakestoreapi.com/products";

export function fetchProducts() {
  return async function fetchproductThunk(dispatch) {
    dispatch(setStatus(mystatus.LOADING));
    try {
      const data = await axios.get(uri);

      dispatch(setProducts(data.data));
      dispatch(setStatus(mystatus.SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(mystatus.ERROR);
    }
  };
}
