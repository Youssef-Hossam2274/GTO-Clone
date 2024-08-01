import { configureStore } from '@reduxjs/toolkit'
import LoginFormSlice from './Slices/LoginFormSlice'
import LoginSubmitSlice from './Slices/LoginSubmitSlice'


export const store = configureStore({
    reducer: {
        loginForm: LoginFormSlice,
        loginSubmit: LoginSubmitSlice,
    },
})