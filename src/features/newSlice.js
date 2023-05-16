import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        
    value:"small",
    
     
}

export const newSlice = createSlice({
    name:"poste",
    initialState,
    reducers:{
        setNavSize: (state) =>{
            const index = state.value;
            if(index === "small"){
                state.value="large"
            }else{
                state.value="small"
            }            
        },      
      
    }
}) 


 
export const { setNavSize} = newSlice.actions;
export   default newSlice.reducer