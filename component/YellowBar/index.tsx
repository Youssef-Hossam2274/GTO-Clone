'use client'
import React from 'react'
import "./styles.css"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import LogInForm from "@/component/LogInForm"
import { useSelector, useDispatch } from 'react-redux';
import { openLoginForm } from '@/redux/actions/action';
import store from '@/redux/store';

interface STATE{
    open:boolean
}

export default function YellowBar() {
    const LoginFomrFlag = useSelector((state:STATE) => state.open);
    const dispatch = useDispatch();
    return (
            <div className='yellowBar-component'>
                <select className='selectOption'>
                    <option>GBP</option>
                    <option>USD</option>
                    <option>AED</option>
                    <option>EGP</option>
                </select>

                <div className="part">
                    <FontAwesomeIcon icon={faWallet} />
                    <Link href="">
                        My Wallet
                    </Link>
                </div>
                
                <div className="part"onClick={()=> {
                        dispatch(openLoginForm());
                    }}>
                    <FontAwesomeIcon icon={faRightToBracket} />
                    <Link href="" >
                        Login
                    </Link>
                </div>
                <div className="part">
                    <FontAwesomeIcon icon={faUser} />
                    <Link href="">
                        Join Now
                    </Link>
                </div>
                {
                    (store.getState().open && <LogInForm/>)
                }
            </div>
    )
}
