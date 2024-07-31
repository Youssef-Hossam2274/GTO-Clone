// src/store/reducer.ts
"use client";

import { CLOSE_LOGIN, OPEN_LOGIN, LOGIN_SUBMIT } from "../actions/action";

interface State {
    open: boolean,
    logged:boolean,
    title:String,
    firstName:String,
    lastName:String,
    email:String,
    country:String,
    residence:String,
    invitationCode:String,
}

interface Action {
    type: string;
    logged:boolean,
    title:String,
    firstName:String,
    lastName:String,
    email:String,
    country:String,
    residence:String,
    invitationCode:String,
}

const initialState = {
    open: false,
    logged:false,
    title:"",
    firstName:"",
    lastName:"",
    email:"",
    country:"",
    residence:"",
    invitationCode:"",

}

const loginFormReducer = (state = initialState, action:Action) => {
    switch(action.type){
        case CLOSE_LOGIN:
            return {...state, open:false};
        case OPEN_LOGIN:
            return {...state, open:true};
        case LOGIN_SUBMIT:
            return {
                ...state,
                logged:action.logged,
                title:action.title,
                firstName:action.firstName,
                lastName:action.lastName,
                email:action.email,
                country:action.country,
                residence:action.residence,
                invitationCode:action.invitationCode
            }
        default:
            return state;
    }
};

export default loginFormReducer;
