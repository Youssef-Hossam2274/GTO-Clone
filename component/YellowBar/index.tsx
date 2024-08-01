'use client'
import React from 'react'
import "./styles.css"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { formToggled } from '@/redux/Slices/LoginFormSlice';
import LoginForm from '../LoginForm';
import { Logout } from '@/redux/Slices/LoginSubmitSlice';
import profileImage from "@/gto-assets/Images/profileIcon.svg"
import Image from 'next/image';


export default function YellowBar() {
    const {formOpen} = useSelector(state =>state.loginForm);
    const {logged, firstName, lastName} = useSelector(state => state.loginSubmit);
    const dispatch = useDispatch();

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
                        dispatch(formToggled());
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
                    (formOpen && <LoginForm/>)
                }
            </div>
    )
}