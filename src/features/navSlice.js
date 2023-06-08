import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        
    value:"false",
  
  
}

export const navSlice = createSlice({
    name:"poste",
    initialState,
    reducers:{
        setNavSize: (state) =>{
            const index = state.value;
            if(index === "false"){
                state.value="true"
            }else{
                state.value="false"
            }            
        },       
    }
}) 


 
export const { setNavSize} = navSlice.actions;
export   default navSlice.reducer