import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILIRE,
  DECR_PRODUCT_QTY,
  INCR_PRODUCT_QTY,
  DELETE_PRODUCT_FROM_CART,
} from "./order.action";

let initialState = {
  loading: false,
  cartItems: [],
  errorMessage: null,
  order: {},
  Orders: [],
};
let orderReducer = (state = initialState, action) => {
  let { type, payload } = action;
  console.log("Hello, inside orderReducer", payload);
  switch (type) {
    case DECR_PRODUCT_QTY:
      let decrCartItems = state.cartItems.map((cartItem) => {
        if (cartItem._id === payload.productId) {
          //incr produc tQty
          return {
            ...cartItem,
            qty: cartItem.qty - 1,
          };
        }
        return cartItem;
      });
      return {
        ...state,
        cartItems: [...decrCartItems],
      };
    case INCR_PRODUCT_QTY:
      let incrCartItems = state.cartItems.map((cartItem) => {
        if (cartItem._id === payload.productId) {
          //incr produc tQty
          return {
            ...cartItem,
            qty: cartItem.qty + 1,
          };
        }
        return cartItem;
      });
      return {
        ...state,
        cartItems: [...incrCartItems],
      };

    case DELETE_PRODUCT_FROM_CART:
      let rCartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== payload.productId
      );
      return {
        ...state,
        cartItems: [...rCartItems],
      };
    case ADD_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_CART_SUCCESS:
      let exists = state.cartItems.find(
        (cartItem) => cartItem._id === payload._id
      );
      console.log("......testing", exists);
      if (!exists) {
        return {
          ...state,
          loading: false,
          cartItems: [...state.cartItems, payload],
        };
      }
      return {
        ...state,
        loading: false,
        cartItems: [...state.cartItems],
      };
    case ADD_TO_CART_FAILIRE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default orderReducer;
