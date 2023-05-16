import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
  parties:[
    {
      index:1,
      party_name:"varun",
      mob_num:546437876,
      party_type:{
        label:"party1",
        value:"party1",
      },
      open_bal:1000
    },
    {
      index:2,
      party_name:"nayak",
      mob_num:96763578,
      party_type:{
        label:"party2",
        value:"party2",
      },
      open_bal:2000
    }
  ]
};

export const parties = createSlice({
  name: "party",
  initialState,
  reducers: {
    setParty: (state, { payload }) => {
      state.parties.push(payload);
      
    },
    setParties: (state, { payload }) => (state = { ...state, parties: addParty(state,payload) }),
  },
});
function addParty(state,data) {
  return state.parties.concat(data)
}
 
export const { setParty, setParties } = parties.actions;
export default parties.reducer;
