import { configureStore } from '@reduxjs/toolkit'
import LoginFormSlice from './Slices/ModalSlice'
import LoginSubmitSlice from './Slices/LoginSubmitSlice'


export const store = configureStore({
    reducer: {
        modal: LoginFormSlice,
        loginSubmit: LoginSubmitSlice,
    },
})
