import { configureStore } from '@reduxjs/toolkit'
import LoginSubmitSlice from './Slices/LoginSubmitSlice'


export const store = configureStore({
    reducer: {
        loginSubmit: LoginSubmitSlice,
    },
})
