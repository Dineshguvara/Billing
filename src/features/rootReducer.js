import { combineReducers } from "@reduxjs/toolkit";
import partyReducer from "./parties";
import itemReducer from "./items";
import saleReducer from "./sales";
import posteReducer from "./navSlice";
import practReducer from "./practice";
import newSliceApi from "../service/newSliceApi";

const rootReducer = combineReducers({
    party:partyReducer,
    item:itemReducer,
    sale:saleReducer,
    poste:posteReducer,
    pract:practReducer,
});
 
export default rootReducer;