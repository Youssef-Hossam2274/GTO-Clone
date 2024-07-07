import React from 'react'
import Image from "next/image"
import gray_eagle from "../images/gray-eagle.svg"
import "./OrganisationMembership.css"

export default function OrganisationMembership() {
    return (
        <div className='OrganisationMembership-component'>
            <div className="organisation-text-box">
                <p className="organisation-title">
                    The Global Travel Organisation Membership
                </p>
                <p className="organisation-description">
                    The Global Travel Organisation membership is the most generous and prestigious travel membership in the world. <br />
                    GTO offers its members very generous savings on the lowest prices they can find on major online websites and GTO covers all aspects of travel and lifestyle. <br />
                    Each GTO member enjoys a dedicated Personal Travel Assistant team that assists with all enquiries and make bookings seven days a week. <br />
                </p>
            </div>
            <Image src = {gray_eagle} alt = "img" />
        </div>
    )
}
