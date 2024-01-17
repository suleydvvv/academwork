import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/userSlice'
import modalSlice from './reducers/modalSlice'


export const store = configureStore({
    reducer:{
        user: userSlice,
        modal: modalSlice
    }
})