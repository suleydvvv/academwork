import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: 
            {
                id: 1,
                name: "Anton",
                balance: 500
            },
        isAuth: true,
        role: "student",
        selected_theme: "dark",
    },
    reducers: {
        setUser: (state, action)=>{
            state.user = action.payload
        },
        setAuth: (state, action)=>{
            state.isAuth = action.payload
        },
        setTheme: (state) =>{
            state.selected_theme = (state.selected_theme === "light") ? "dark" : "light"
        }
    },
});

export const {setUser, setAuth, setTheme} = userSlice.actions;

export default userSlice.reducer;