import React from 'react'
import Image from "next/image";
import googlePlay from "@/images/download-google-play.svg"
import appStore from "@/images/download-app-store.svg"
import gtoMobile from "@/images/gto-mobile.svg"
import "./styles.css"

export default function DownloadMobile() {
    return (
        <div className='download-component'>
            <div className="download-description">
                <p>
                    Please download the GTO mobile app to enjoy ONE OF 
                    THE MOST PRESTIGIOUS AND GENEROUS TRAVEL AND LIFESTYLE 
                    MEMBERSHIPS IN THE WORLD. This will help you easily 
                    keep track of your quotations, booking confirmations, 
                    offers, promotions and much more.
                </p>
            </div>
            <div className="download-imgs">
                <Image className='gto-mobile' src={gtoMobile} alt="gto mobile" />
                <div className="download-app">
                    <Image src={appStore} alt="gto mobile" />
                    <Image src={googlePlay} alt="gto mobile" />
                </div>
            </div>
        </div>
    )
}
