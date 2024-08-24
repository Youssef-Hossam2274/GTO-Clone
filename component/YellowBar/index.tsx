'use client'
import React from 'react'
import "./styles.css"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { modalToggled } from '@/redux/Slices/ModalSlice';
import { Logout, Login } from '@/redux/Slices/LoginSubmitSlice';
import LoginForm from '../LoginForm';

interface STATE{
    open:boolean
}

export default function YellowBar() {
    const {modalToggle} = useSelector(state =>state.modal);
    const {logged, firstName, lastName} = useSelector(state => state.loginSubmit);
    const dispatch = useDispatch();
    
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
    }
    
    return (
            <div className='yellowBar-component'>
                {
                    (logged ? (
                        <div className="part">
                            <Link href= "Profile">{firstName + " "  + lastName}</Link>
                        </div>
                    ) : (
                        <select className='selectOption'>
                            <option>GBP</option>
                            <option>USD</option>
                            <option>AED</option>
                            <option>EGP</option>
                        </select>
                    ))

                }

                <div className="part">
                    <FontAwesomeIcon icon={faWallet} />
                    <Link href="">
                        My Wallet
                    </Link>
                </div>
                
                {
                    logged ? (
                        <div className="part">
                            <FontAwesomeIcon icon={faUser} />
                            <Link href="Profile">Profile</Link>
                        </div>
                    ) : <></>
                }

                <div className="part"onClick={()=> {
                        logged ? dispatch(Logout()) :
                        dispatch(modalToggled());
                    }}>
                    <FontAwesomeIcon icon={faRightToBracket} />
                    <Link href="" >
                        {logged ? "Logout" : "Login"}
                    </Link>
                </div>

                {
                    logged ? <></> : (
                        <div className="part">
                            <FontAwesomeIcon icon={faUser} />
                            <Link href="">
                                Join Now
                            </Link>
                        </div>
                    )
                }
                
                {
                    (modalToggle && 
                            <LoginForm/>
                    )
                }
            </div>
    )
}