import React from 'react'
import "./styles.css"
import Link from 'next/link'
import Image from 'next/image'
import prfileImage from "@/gto-assets/Images/profileIcon.svg"
import quotationsImage from "@/gto-assets/Images/quotationsIcon.svg"
import confirmationImage from "@/gto-assets/Images/confirmation.svg"
import myWalletImage from "@/gto-assets/Images/walletIcon.svg"


export default function ProfileSidebar() {
    return (
        <div className='sidebar-component'>
            <div className="sidebar-col">
                <Link className="profile" href="Profile">
                    <Image src={prfileImage} alt='profileImage'/>
                    <p>Profile</p>
                </Link>
                
                <Link className="quotations" href="Profile/quotations">
                    <Image src={quotationsImage} alt='quotationsImage'/>
                    <p>Quotations</p>
                </Link>
                
                <Link className="confirmations" href="Profile/confirmations">
                    <Image src={confirmationImage} alt='confirmationImage'/>
                    <p>Confirmations</p>
                </Link>

                <Link className="wallet" href="/">
                    <Image src={myWalletImage} alt='myWalletImage'/>
                    <p>My Wallet</p>
                </Link>
                
                <Link className="chat" href="/">
                    <Image src={prfileImage} alt='profileImage'/>
                    <p>Chat</p>
                </Link>
            </div>
        </div>
    )
}