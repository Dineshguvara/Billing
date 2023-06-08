
import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from '../features/rootReducer';
import { newSliceApi } from '../service/newSliceApi';
import partyReducer  from "../features/parties";
import itemReducer from "../features/items";
import saleReducer from "../features/sales";
import posteReducer from "../features/navSlice";


export const store = configureStore({
  reducer: {
    party:partyReducer,
    item:itemReducer,
    sale:saleReducer,
    poste:posteReducer,
    
    [newSliceApi.reducerPath]: newSliceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newSliceApi.middleware),
});

