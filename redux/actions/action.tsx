// src/store/actions.ts
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INC_BY_VAL = "INC_BY_VAL";
export const CLOSE_LOGIN = "CLOSE_LOGIN"
export const OPEN_LOGIN = "OPEN_LOGIN"

export const openLoginForm = () =>({
    type: OPEN_LOGIN,
})
export const closeLoginForm = () =>({
    type: CLOSE_LOGIN,
})