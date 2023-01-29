import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { numberReducer, posts } from "./reducer";

const reducer = combineReducers({ number: numberReducer, posts });
const middleWare = [thunk];
const data = JSON.parse(localStorage.getItem("posts"))
  ? JSON.parse(localStorage.getItem("posts"))
  : [];
const initialState = { posts: { data: [...data], loading: false, error: "" } };
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleWare)
);
export default store;
