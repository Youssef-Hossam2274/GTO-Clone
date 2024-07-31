export const CLOSE_LOGIN = "CLOSE_LOGIN"
export const OPEN_LOGIN = "OPEN_LOGIN"
export const LOGIN_SUBMIT = "LOGIN_SUBMIT"

export const openLoginForm = () =>({
    type: OPEN_LOGIN,
})
export const closeLoginForm = () =>({
    type: CLOSE_LOGIN,
})
export const loginSubmitAction = (
    title:String,
    firstName:String,
    lastName:String,
    email:String,
    country:String,
    residence:String,
    invitationCode:String,
    ) =>({
    type: LOGIN_SUBMIT,
    logged:true,
    title:title,
    firstName:firstName,
    lastName:lastName,
    email:email,
    country:country,
    residence:residence,
    invitationCode:invitationCode
})