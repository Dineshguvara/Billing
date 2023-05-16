import { combineReducers } from "@reduxjs/toolkit";
import partyReducer from "./parties";
import itemReducer from "./items";
import saleReducer from "./sales";
const rootReducer = combineReducers({
    party:partyReducer,
    item:itemReducer,
    sale:saleReducer
});
 
export default rootReducer;