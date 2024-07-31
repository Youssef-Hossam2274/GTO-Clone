'use client'
import React from 'react'
import "./styles.css"
import Image from 'next/image'
import closeIcon from "@/gto-assets/Images/close-btn-icon.svg"
import { useSelector, useDispatch } from 'react-redux'
import { closeLoginForm, loginSubmitAction } from '@/redux/actions/action'
import store from '@/redux/store'
import Link from 'next/link'

interface STATE{
    open:boolean
}

export default function LoginForm() {
    
    console.log("re-render")
    const LoginFomrFlag = useSelector((state:STATE) => state.open);
    const dispatch = useDispatch();
    const closeForm = ()=>{
        const LoginForm = document.querySelector(".LoginForm");
        LoginForm?.classList.add("close");
        setTimeout(() => {
            dispatch(closeLoginForm())
        }, 500);
    }

    const loginSubmit = ()=>{
        dispatch(loginSubmitAction(
            "Mr",
            "Youssef",
            "Osman",
            "xxx@gmail.com",
            "Egypt",
            "Egypt",
            "4706647667"
        ))

        // location.href = "Profile"
        console.log(store.getState());
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
