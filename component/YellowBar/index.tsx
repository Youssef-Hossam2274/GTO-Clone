'use client'
import React, { useState } from 'react'
import "./styles.css"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { Logout, Login } from '@/redux/Slices/LoginSubmitSlice';
import LoginForm from '../LogInForm';

interface STATE {
    open: boolean
}

export default function YellowBar() {
    const { logged, firstName, lastName } = useSelector(state => state.loginSubmit);
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);

    const loginSubmit = () => {
        const logged = true;
        const title = "Mr"
        const firstName = "Youssef"
        const lastName = "Osman"
        const email = "xxx@gmail.com"
        const country = "Egypt"
        const residence = "Egypt"
        const invitationCode = "123456"

        dispatch(Login({
            payload: {
                logged: logged,
                title: title,
                firstName: firstName,
                lastName: lastName,
                email: email,
                country: country,
                residence: residence,
                invitationCode: invitationCode,
            }
        }))
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
                        <Link href="Profile">{firstName + " " + lastName}</Link>
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

            {logged ? (
                <div className="part" onClick={() => {
                    dispatch(Logout())
                }}>
                    <FontAwesomeIcon icon={faRightToBracket} />
                    <Link href="" >Logout</Link>
                </div>
            ) : (
                <div className="part" onClick={() => {
                    setModal(true)
                }}>
                    <FontAwesomeIcon icon={faRightToBracket} />
                    <Link href="">login</Link>
                </div>
            )}

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
                (modal &&
                    <LoginForm modal={modal} setModal={setModal} />
                )
            }
        </div>
    )
}