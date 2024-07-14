import React from 'react'
import "./styles.css"
import blackCredit from  "@/images/black-1.png";
import goldCredit from  "@/images/gold-1.png";
import silverCredit from  "@/images/silver-1.png";
import platinumCredit from  "@/images/platinum-6.png";
import Image from 'next/image';



export default function MemberShipCredit() {
    return (
        <div className='memberShipCredit-component'>
            <p className="memberShipCredit-title">
                DISCOUNT AND CREDIT ON THE LOWEST PRICES YOU CAN FIND ONLINE
            </p>
            <div className="credits">
                <div className="single-credit">
                    <Image src={silverCredit} alt = "sliver credit"/>
                    <p className="credit-title">SILVER</p>
                </div>
                <div className="single-credit">
                    <Image src={goldCredit} alt = "gold credit"/>
                    <p className="credit-title">GOLD</p>
                </div>
                <div className="single-credit">
                    <Image src={platinumCredit} alt = "platinum credit"/>
                    <p className="credit-title">PLATINUM</p>
                </div>
                <div className="single-credit">
                    <Image src={blackCredit} alt = "black credit"/>
                    <p className="credit-title">BLACK</p>
                </div>
            </div>
        </div>
    )
}
