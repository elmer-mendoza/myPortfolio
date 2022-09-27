import { createSlice } from "@reduxjs/toolkit";

export const sampleSlice = createSlice({
    name:"sample",
    initialState:{
        efm:"initial value"
    },
    reducers:{
        sample1:(state,action)=>{
            
            state.efm="sample1";
            console.log(state.efm);
            console.log(action.payload)
        },
        sample2:(state)=>{
            state.efm = "sample2";
            console.log(state.efm)
        },
        sample3:(state,action)=>{
            state.efm = "sample3";
            console.log(action)
        }
    }
});

// Action creators are generated for each case reducer function

export const {sample1,sample2,sample3} = sampleSlice.actions;
console.log(sampleSlice.actions)
console.log(sampleSlice)
export default sampleSlice.reducer;

