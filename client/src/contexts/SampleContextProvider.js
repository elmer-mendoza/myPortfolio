import React,{createContext, useContext,useState} from "react";

const SampleContext = createContext();

const initialState = {name:'elmer mendoza'};

// wrap App with this component
export const SampleContextProvider =({children}) => {
    const [sampleValue,setSampleValue] =useState(initialState);
    return (
        <SampleContext.Provider value={{
            sampleValue,
            setSampleValue
        }}>
            {children}
        </SampleContext.Provider>
    )
}

// import useSampleContext hook to access global state 
export const useSampleContext =() => useContext(SampleContext) 

