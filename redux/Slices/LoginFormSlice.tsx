import { createSlice } from '@reduxjs/toolkit'

const loginFromSlice = createSlice({
    name: 'loginForm',
    initialState: {
        formOpen:false,
    },
    reducers: {
        formToggled(state) {
            return {...state, formOpen: !state.formOpen}
        },
    },
})

export const { formToggled } = loginFromSlice.actions
export default loginFromSlice.reducer