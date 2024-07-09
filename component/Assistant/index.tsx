import React from 'react';
import "./styles.css";
import Image from 'next/image';
// import assistantImage from "../images/personal-travel-img-one.svg"
import assistantImage from "@/images/personal-travel-img-one.svg"

export default function Assistant() {
    return (
        <div className='assistant-component'>
            <div className="team-information">
                <p className='team-information-title'>PERSONAL TRAVEL ASSISTANT TEAM</p>
                <p className="team-information-description">
                    Our dedicated Personal Travel Assistant Team is on hand 7 days a week to help our members
                    with their enquiries and bookings. All members need to do is to send us a 
                    detailed screenshot or link of the lowest price they can find online and we will take 
                    care of the rest.
                </p>

                <div className="personal-information">
                    For more information, please contact your Personal Travel Assistant Team via <br />
                    Email on info@GTOmembers.com <br />
                    Phone/SMS/WhatsApp on +44 (0) 7393912090
                </div>
            </div>
            <div className="team-image">
                <Image src={assistantImage} alt='assistantImage'/>
            </div>
        </div>
    )
}
