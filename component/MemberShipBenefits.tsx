import React from 'react'
import suite from "../images/suite.svg"
import Image from 'next/image'
import memberShip from "../images/test.svg"
import "./MemberShip.css"

export default function MemberShipBenefits() {
    return (
        <div className='memberShip-component'>
            <Image className="suite-image" src={suite} alt='suite'/>
            <Image className="memberShip-image"  src={memberShip} alt='memberShip'/>
        </div>
    )   
}
