const ADD_TO_CART_REQUEST = "ADD_TO_CART_REQUEST";
const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
const ADD_TO_CART_FAILIRE = "ADD_TO_CART_FAILIRE";

const DECR_PRODUCT_QTY = "DECR_PRODUCT_QTY";
const INCR_PRODUCT_QTY = "INCR_PRODUCT_QTY";
const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";

let decrProductQty = (productId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DECR_PRODUCT_QTY, payload: { productId: productId } });
    } catch (err) {
      console.log(err);
    }
  };
};
let incrProductQty = (productId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: INCR_PRODUCT_QTY, payload: { productId: productId } });
    } catch (err) {
      console.log(err);
    }
  };
};
let deleteProductFromCart = (productId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: DELETE_PRODUCT_FROM_CART,
        payload: { productId: productId },
      });
    } catch (err) {
      console.log(err);
    }
  };
};

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
  decrProductQty,
  incrProductQty,
  deleteProductFromCart,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILIRE,
  DECR_PRODUCT_QTY,
  INCR_PRODUCT_QTY,
  DELETE_PRODUCT_FROM_CART,
};
