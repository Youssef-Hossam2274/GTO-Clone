// src/store/reducer.ts
"use client";

import { CLOSE_LOGIN, OPEN_LOGIN } from "../actions/action";

interface State {
    open: boolean;
}

interface Action {
    type: string;
}


const loginFormReducer = (state = {open:false}, action:Action) => {
    switch(action.type){
        case CLOSE_LOGIN:
            return {...state, open:false};
        case OPEN_LOGIN:
            return {...state, open:true};
        
        default:
            return state;
    }
};

export default loginFormReducer;
