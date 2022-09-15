import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "./reducers/productReducers.js";

const reducer = combineReducers({ productsList: productListReducer }); //combing all reducers
//use it's property name for useSelect

const middleware = [thunk];
const initialState = {};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

//The reducer returns state. Since the store takes reducer as imput, it needs an initial state
//followed by useSelector which selects a part of the store

//dispatch an action to reducer

// a store uses the reducer
