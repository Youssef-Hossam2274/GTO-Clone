'use client'
import React from 'react'
import "./styles.css"
import { UseDispatch, useSelector } from 'react-redux'
import Image from 'next/image';
import editImage from "@/gto-assets/Images/editIcon.svg"

export default function ProfileTabel() {
    const { firstName, lastName, email, title, country, residence, invitationCode } = useSelector((state:any) => state.loginSubmit);
    return (
        <div className='profileTabel-component'>
            <div className="infoRow">
                <div className="infoRow-leftBox">
                    <div className="infoRow-key">Name</div>
                    <div className="infoRow-value">
                        {title + " " + firstName + " " + lastName}
                    </div>
                </div>
                <div className="infoRow-rightBox">
                    <Image src={editImage} alt='editImage' />
                </div>
            </div>
            <div className="infoRow">
                <div className="infoRow-leftBox">
                    <div className="infoRow-key">Mobile</div>
                    <div className="infoRow-value">
                        {1111111}
                    </div>
                </div>
                <div className="infoRow-rightBox">
                    <Image src={editImage} alt='editImage' />
                </div>
            </div>
            <div className="infoRow">
                <div className="infoRow-leftBox">
                    <div className="infoRow-key">Email</div>
                    <div className="infoRow-value">
                        {email}
                    </div>
                </div>
                <div className="infoRow-rightBox">
                    <Image src={editImage} alt='editImage' />
                </div>
            </div>
            <div className="infoRow">
                <div className="infoRow-leftBox">
                    <div className="infoRow-key">Country</div>
                    <div className="infoRow-value">
                        {country}
                    </div>
                </div>
                <div className="infoRow-rightBox">
                    <Image src={editImage} alt='editImage' />
                </div>
            </div>
            <div className="infoRow">
                <div className="infoRow-leftBox">
                    <div className="infoRow-key">Residence</div>
                    <div className="infoRow-value">
                        {residence}
                    </div>
                </div>
                <div className="infoRow-rightBox">
                    <Image src={editImage} alt='editImage' />
                </div>
            </div>
            <div className="infoRow invitationCode">
                <div className="infoRow-leftBox">
                    <div className="infoRow-key">Invitation Code</div>
                    <div className="infoRow-value">
                        {invitationCode}
                    </div>
                </div>
                <div className="infoRow-rightBox">
                    <Image src={editImage} alt='editImage' />
                </div>
            </div>
        </div>
    )
}
