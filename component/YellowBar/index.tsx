import React, {useState} from 'react'
import "./styles.css"
import Image from 'next/image';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import walletImage from "@/images/wallet-logo.svg"
import loginImage from "@/images/login-gold.svg"
import profileIcon from "@/images/profileIcon.svg"



export default function index() {

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
            
            <div className="part">
                <FontAwesomeIcon icon={faRightToBracket} />
                <Link href="">
                    Login
                </Link>
            </div>
            <div className="part">
                <FontAwesomeIcon icon={faUser} />
                <Link href="">
                    Join Now
                </Link>
            </div>

        </div>
    )
}
