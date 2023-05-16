import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
  Sales:[
    
  ]
};

export const sales = createSlice({
  name: "sale",
  initialState,
  reducers: {
    setSale: (state, { payload }) => {
      state.Sales.push(payload);
      
    },
    setSales: (state, { payload }) => (state = { ...state, Sales: addSale(state,payload) }),
  },
});
function addSale(state,data) {
  return state.Sales.concat(data)
}
 
export const { setSale, setSales } = sales.actions;
export default sales.reducer;
