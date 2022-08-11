import { combineReducers } from "redux";
import shopReducer from "./shopping/reducer";


export const rootReducer = combineReducers({
  shop: shopReducer,
});