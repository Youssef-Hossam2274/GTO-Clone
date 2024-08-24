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
    let mobileLink = false;
    const toggle = ()=>{
        mobileLink = !mobileLink;
        const navBar = document.querySelector(".nav-bar-component");
        const mobile_links =document.querySelector(".mobile-links");
        if(mobileLink === true){
            navBar?.classList.add("mobile");
            mobile_links?.classList.add("active");
        }
        else{
            mobile_links?.classList.remove("active");
            navBar?.classList.remove("mobile");
        }
    }
    return (
        <div className='nav-bar-component'>
            <div className="nav-fullScreen">
                <div className="left-box">
                    <div className="nav-logo">
                        <Link href="/"> 
                            <Image src={gto_logo} alt="gto-logo" /> 
                        </Link>
                    </div>
                
                    <div className='urls'>
                        <Link href="Discounted_Products">Discounted Products</Link>
                        <Link href="Luxury_Products">Luxury Products</Link>
                        <Link href="Membership_Types">Membership Types</Link>
                        <Link href="How_to_Book">How to Book</Link>
                        <Link href="How_to_join">How to join</Link>
                    </div>
                </div>
                
                <div className="mobile-holder">
                    <Image src={navBarIcon} className="bar-icon" alt='navBaricon' onClick={toggle}/>
                </div>
                
                <div className="right-box">
                    <Image className='EMER-logo' src={EMER} alt="EMER" style={{width:"150px"}} />
                    <Image className='etisalate-logo'  src={etisalat} alt="etisalat" style={{width:"100px", height:"auto"}} />
                </div>
            </div>
            <div className="mobile-links">
                <Link href="Discounted_Products" onClick={toggle}>Discounted Products</Link>
                <Link href="Luxury_Products" onClick={toggle}>Luxury Products</Link>
                <Link href="Membership_Types" onClick={toggle}>Membership Types</Link>
                <Link href="How_to_Book" onClick={toggle} >How to Book</Link>
                <Link href="How_to_join" onClick={toggle} >How to join</Link>
            </div>
        </div>
    );
}
