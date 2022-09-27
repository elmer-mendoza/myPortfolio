import { createSlice } from "@reduxjs/toolkit";

const tryFunc =()=>console.log("function daw")

export const secondSampleSlice = createSlice({
    name:"secondSample",
    initialState:{
        value:"initial value",
        func:tryFunc
    },
    reducers:{
        secondSample1:(state,action)=>{
            state.value="secondSample1";
            console.log(state.efm);
            console.log(action.payload)
        },
        secondSample2:(state)=>{
            state.value = "secondSample2";
            console.log(state.efm)
        },
        secondSample3:(state,action)=>{
            state.value = "secondSample3";
            console.log(action)
        }
    }
});

// Action creators are generated for each cas reducer function

export const {secondSample1,secondSample2,secondSample3} = secondSampleSlice.actions;
console.log(secondSampleSlice.actions)
console.log(secondSampleSlice)
export default secondSampleSlice.reducer;

