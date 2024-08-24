'use client'
import React from 'react'
import "./styles.css"
import Image from 'next/image'
import closeIcon from "@/gto-assets/Images/close-btn-icon.svg"
import { useSelector, useDispatch } from 'react-redux'
import { modalToggled } from '@/redux/Slices/ModalSlice'
import { Login } from '@/redux/Slices/LoginSubmitSlice'
import Link from 'next/link'
import Modal from '../Modal'
import EmaiInput from '../EmailInput'


export default function LoginForm() {
    const dispatch = useDispatch();

    const closeForm = ()=>{
        const LoginForm = document.querySelector(".LoginForm");
        LoginForm?.classList.add("close");
        setTimeout(() => {
            dispatch(modalToggled())
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

        closeForm();
    }
    
    return (
        <div className='LoginForm-component'>
            <Modal>
                <p className="LoginFormTitle">Log in</p>
                <EmaiInput/>
                <button className='LoginFormButton' onClick={loginSubmit}>Log in</button>
            </Modal>
        </div>
    )
}