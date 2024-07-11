import React from 'react';
import "./styles.css";
import Link from "next/link";
import Image from "next/image"
import gto_logo from "@/images/gto-logo.png"
import inHouse from "@/images/InHouse.png"
import visa from "@/images/visa.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <div className='footer-component'>
            <div className="upper-box">
                <Image className='gto-logo' src = {gto_logo} alt = "gto-logo"/>
                <div className="main-menu">
                    <p className="title">
                        Main Menu
                    </p>
                    <div className='main-menu-links'>
                        <Link href="Discounted_Products">Discounted Products</Link>
                        <Link href="Luxury_Products">Luxury Products</Link>
                        <Link href="Membership_Types">Membership Types</Link>
                        <Link href="How_to_Book">How to Book</Link>
                        <Link href="How_to_join">How to join</Link>
                    </div>
                </div>

                <div className="top-menu">
                    <p className='title'>Top menu</p>
                    <div className="top-menu-links">
                        <Link href=""><FontAwesomeIcon icon={faWallet} />My Wallet</Link>
                        <Link href = ""><FontAwesomeIcon icon={faRightToBracket}  /> Login</Link> 
                        <Link href = ""><FontAwesomeIcon icon={faUser} /> Join Now</Link>
                    </div>
                </div>

                <div className="about">
                    <Image className='inHouseImage' src={inHouse}  alt='inHouse' style={{width:"200px"}}/>
                    <p>GTO Members is a brand of InHouse World Ltd.</p>
                    <p>Registered in England,Company No. 9511392</p>
                    <p>Headquarters (UK): 120 Regent Street opposite Burberry, London, W1B 5FE</p>
                    <p>Phone: +442078460889</p>
                    <p>Email: info@gtomembers.com</p>
                    <Image className='visaImage' src={visa}  alt='visa' style={{width: "90px"}}/>
                </div>

            </div>

            <div className="down-box">
                <div className="footer-left-box">
                    Copyright 2024 - InHouse World
                </div>
                
                <div className="footer-right-box">
                    <Link href="Terms_Conditions">Terms & Conditions|</Link>
                    <Link href="Privacy_Policy">Privacy Policy|</Link>
                    <Link href="Delivery_Policy">Delivery Policy|</Link>
                    <Link href="Refund_Policy">Refund Policy|</Link>
                    <Link href="FAQs">FAQs</Link>
                </div>
            </div>
        </div>
    )
}
