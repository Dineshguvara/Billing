import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
  Items:[
    {
      index:1,
      item_name:"Pencil",
      item_code: 201,
      category:{
        label:"categories 1",
        value:"categories 1",
      },
      pur_price:1000,
      sale_price:2000
    },
    {
      index:2,
      item_name:"Boxes",
      item_code: 45,
      category:{
        label:"categories 2",
        value:"categories 2",
      },
      pur_price:100,
      sale_price:1000
    }
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
