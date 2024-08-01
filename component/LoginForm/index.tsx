'use client'
import React from 'react'
import "./styles.css"
import Image from 'next/image'
import closeIcon from "@/gto-assets/Images/close-btn-icon.svg"
import { useSelector, useDispatch } from 'react-redux'
import {store} from '@/redux/store'
import { formToggled } from '@/redux/Slices/LoginFormSlice'
import { Login } from '@/redux/Slices/LoginSubmitSlice'
import Link from 'next/link'


export default function LoginForm() {
    const dispatch = useDispatch();

    const closeForm = ()=>{
        const LoginForm = document.querySelector(".LoginForm");
        LoginForm?.classList.add("close");
        setTimeout(() => {
            dispatch(formToggled())
        }, 500);
    }

    const loginSubmit = ()=>{
        const logged = true;
        const title = "Mr"
        const firstName = "Youssef"
        const lastName ="Osman"
        const email = "xxx@gmail.com"
        const country = "Egypt"
        const residence = "Egypt"
        const invitationCode = "123456"

        dispatch(Login({payload:{
            logged:logged,
            title:title,
            firstName:firstName,
            lastName:lastName,
            email:email,
            country:country,
            residence:residence,
            invitationCode: invitationCode,
        }}))
        localStorage.setItem("logged", String(logged))
        localStorage.setItem("title", title)
        localStorage.setItem("firstName", firstName)
        localStorage.setItem("lastName", lastName)
        localStorage.setItem("email", email)
        localStorage.setItem("country", country)
        localStorage.setItem("residence", residence)
        localStorage.setItem("invitationCode", invitationCode)

        console.log(store.getState().loginSubmit);
        closeForm();
    }
    return (
        <div className='LoginForm-component'>
            <div className="LoginForm">
                <div className="upper-form">
                    <div className="close-form" onClick={closeForm}>
                        <Image src = {closeIcon} alt=''/></div>
                    <p className="LoginFormTitle">Log in</p>
                </div>
                <div className='Form'>
                    <input type="email" placeholder='Email'/>
                    <Link href="Profile" className='LoginFormButton' onClick={loginSubmit}>Log in</Link>
                </div>
            </div>
        </div>
    )
}