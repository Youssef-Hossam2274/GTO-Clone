'use client'

import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gto_logo from "@/images/gto-logo.png";
import EMER from "@/images/EMER.svg";
import etisalat from "@/images/etisalat.png";
import "./styles.css";
import navBarIcon from "@/images/navbar-menu.svg";


export default function NavBar() {
    let [mobileLink, setMobileLinks] = useState(false);

    return (
        <div className='nav-bar-component'>
            <div className="nav-fullScreen">
                <div className="left-box">
                    <div className="nav-logo">
                        <Link href="/"> 
                            <Image src={gto_logo} alt="gto-logo" /> 
                        </Link>
                    </div>
                
                    <ul className='urls'>
                        <li>
                            <Link href="Discounted_Products">Discounted Products</Link>
                        </li>
                        <li>
                            <Link href="Luxury_Products">Luxury Products</Link>
                        </li>
                        <li>
                            <Link href="Membership_Types">Membership Types</Link>
                        </li>
                        <li>
                            <Link href="How_to_Book">How to Book</Link>
                        </li>
                        <li>
                            <Link href="How_to_join">How to join</Link>
                        </li>
                        <li>
                            <Link href="Second_home">Home 2</Link>
                        </li>
                    </ul>
                </div>
                <div className="right-box">
                    <Image className='EMER-logo' src={EMER} alt="EMER" style={{width:"150px"}} />
                    <Image className='etisalate-logo'  src={etisalat} alt="etisalat" style={{width:"100px", height:"auto"}} />
                </div>
            </div>
            <div className="mobile-holder">
                <Image src={navBarIcon} className="bar-icon" alt='navBaricon' onClick={() => setMobileLinks(!mobileLink)} />
                {mobileLink && (
                    <div className="mobile-links">
                        <Link href="Discounted_Products">Discounted Products</Link>
                        <Link href="Luxury_Products">Luxury Products</Link>
                        <Link href="Membership_Types">Membership Types</Link>
                        <Link href="How_to_Book">How to Book</Link>
                        <Link href="How_to_join">How to join</Link>
                    </div>
                )}

            </div>
        </div>
    );
}
