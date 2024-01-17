import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({
    name: "modal",
    initialState: {
        regActive: false,
        logActive: false,
        asExpert: false,
        asCustomer: false,
    },
    reducers: {
        setRegActive: (state, action)=>{
            state.regActive = action.payload
        },
        setLogActive: (state, action)=>{
            state.logActive = action.payload
        },
        setAsExpert: (state, action)=>{
            state.asExpert = action.payload
        },
        setAsCustomer: (state, action)=>{
            state.asCustomer = action.payload
        },
    },
});

export const {setAsCustomer, setAsExpert, setLogActive, setRegActive} = modalSlice.actions;

export default modalSlice.reducer;