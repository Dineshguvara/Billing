import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
  Items:[
    
  ]
};

export const items = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItem: (state, { payload }) => {
      state.Items.push(payload);
      
    },
    setItems: (state, { payload }) => (state = { ...state, Items: addItem(state,payload) }),
  },
});
function addItem(state,data) {
  return state.Items.concat(data)
}
 
export const { setItem, setItems } = items.actions;
export default items.reducer;
