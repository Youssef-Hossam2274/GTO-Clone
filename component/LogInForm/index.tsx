'use client'
import React from 'react'
import "./styles.css"
import Image from 'next/image'
import closeIcon from "@/gto-assets/Images/close-btn-icon.svg"
import { useSelector, useDispatch } from 'react-redux'
import { closeLoginForm } from '@/redux/actions/action'

interface STATE{
    open:boolean
}

export default function LoginForm() {
    const LoginFomrFlag = useSelector((state:STATE) => state.open);
    const dispatch = useDispatch();
    const closeForm = ()=>{
        const LoginForm = document.querySelector(".LoginForm");
        LoginForm?.classList.add("close");
        setTimeout(() => {
            dispatch(closeLoginForm())
        }, 500);
    }
    return (
        <div className='LoginForm-component'>
            <div className="LoginForm">
                <div className="upper-form">
                    <div className="close-form" onClick={closeForm}>
                        <Image src = {closeIcon} alt=''/></div>
                    <p className="LoginFormTitle">Log in</p>
                </div>
                <form action="">
                    <input type="email" placeholder='Email'/>
                    <button className='LoginFormButton' type='submit'>Log in</button>
                </form>
            </div>
        </div>
    )
}
