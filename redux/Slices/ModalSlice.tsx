import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modalToggle:false,
    },
    reducers: {
        modalToggled(state) {
            return {...state, modalToggle: !state.modalToggle}
        },
    },
})

export const { modalToggled } = modalSlice.actions
export default modalSlice.reducer