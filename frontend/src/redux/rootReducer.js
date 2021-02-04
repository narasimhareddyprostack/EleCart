import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import productReducer from "./product/product.reducer";
import orderReducer from "./order/order.reducer";
let rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  order: orderReducer,
});
export { rootReducer };
