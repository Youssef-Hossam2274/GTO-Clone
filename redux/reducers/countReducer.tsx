// src/store/reducer.ts
"use client";

import { INCREMENT, DECREMENT, INC_BY_VAL } from "../actions/action";

interface State {
    count: number;
}

interface Action {
    type: string;
    value: number
}

const initialState: State = {
    count: 0,
};

const counterReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case INC_BY_VAL:
                return{...state, count:state.count+action.value}
        default:
            return state;
    }
};

export default counterReducer;
