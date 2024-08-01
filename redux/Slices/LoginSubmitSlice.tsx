import { createSlice } from '@reduxjs/toolkit'

const LOGGED = localStorage.getItem("logged");
const TITLE = localStorage.getItem("title");
const FIRSTNAME = localStorage.getItem("firstName");
const LASTNAME = localStorage.getItem("lastName");
const EMAIL = localStorage.getItem("email");
const COUNTRY = localStorage.getItem("country");
const RESIDENCE = localStorage.getItem("residence");
const INVITATIONCODE = localStorage.getItem("invitationCode");


const loginSubmit = createSlice({
    name: 'loginSubmit',
    initialState: {
        logged: (LOGGED ? LOGGED : false),
        title: (TITLE ? TITLE : ""),
        firstName: (FIRSTNAME ? FIRSTNAME : ""),
        lastName:(LASTNAME ? LASTNAME : ""),
        email:(EMAIL ? EMAIL : ""),
        country: (COUNTRY ? COUNTRY : ""),
        residence:(RESIDENCE ? RESIDENCE : ""),
        invitationCode:(INVITATIONCODE ? INVITATIONCODE : ""),
    },
    reducers: {
        Login(state, action){
            return{
                logged: true,
                title: action.payload.payload.title,
                firstName: action.payload.payload.firstName,
                lastName: action.payload.payload.lastName,
                email: action.payload.payload.email,
                country: action.payload.payload.country,
                residence: action.payload.payload.residence,
                invitationCode: action.payload.payload.invitationCode,
            }
        },
        Logout(state){
            localStorage.clear();
            return{
                logged:false,
                title:"",
                firstName:"",
                lastName:"",
                email:"",
                country:"",
                residence:"",
                invitationCode:"",
            }
        }
    },
})

export const { Login, Logout } = loginSubmit.actions
export default loginSubmit.reducer