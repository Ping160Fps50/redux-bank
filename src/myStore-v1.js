import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { thunk } from "redux-thunk";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customer/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
