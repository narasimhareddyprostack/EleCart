const ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST";
const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
const ADD_TO_CART_FAILIRE = "ADD_TO_CART_FAILIRE";

let addToCart = (product, qty, history) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ADD_TO_CART_REQUEST });
      let selectedProduct = {
        ...product,
        qty: qty,
      };
      dispatch({ type: ADD_TO_CART_SUCCESS, payload: selectedProduct });
      history.push("/orders/cart");
    } catch (error) {
      dispatch({ type: ADD_TO_CART_FAILIRE, payload: error });
    }
  };
};

export {
  addToCart,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILIRE,
};
