import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
  practices:[
    {
     id:"1",
     party_name:"party1",
     open_bal:1000
    },
    {
        id:"2",
        party_name:"party2",
        open_bal:2000
    },
  ]
};

export const practice = createSlice({
  name: "pract",
  initialState,
  reducers: {
    setItem: (state, { payload }) => {
      state.practices.push(payload);  
    },
    setItems: (state, { payload }) => (state = { ...state, practices: addItem(state,payload) }),
    
  },
 
});
 
function addItem(state,data) {
  return state.practices.concat(data)
}
 
 

export const { setItem, setItems } = practice.actions;
export default practice.reducer;
