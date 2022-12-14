import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_ERROR,
} from "../constants/productConstants";
import axios from "axios";
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("/api/products");

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: PRODUCT_LIST_ERROR,
      payload:
        e.response && e.response.data.message
          ? e.response.data.message
          : e.response,
    });
  }
};
