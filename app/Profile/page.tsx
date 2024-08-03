import React from 'react'
import "./page.css"
import ProfileTabel from "@/component/ProfileTabel"
import ProfileCard from '@/component/ProfileCard'

export default function page() {
    return (
        <div className='profile-page'>
            <ProfileCard/>
            <ProfileTabel/>
        </div>
    )
}