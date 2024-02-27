import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import globalReducer from "./reducers/GlobalReducer";
import userReducer from "./reducers/UserReducer";
import productReducer from "./reducers/ProductReducer";
import shoppingCartReducer from "./reducers/ShoppingCartReducer";
import storeReducer from "./reducers/StoreReducer";

const rootReducer = combineReducers({
  global: globalReducer,
  user: userReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  store: storeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
