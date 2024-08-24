'use client'
import React from 'react'
import ProfileSidebar from '@/component/ProfileSidebar'
import style from "./globals.module.css"
import { useSelector, UseSelector } from 'react-redux';

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    const {logged} = useSelector(state => state.loginSubmit);
    if(logged === false)
        location.href = "./";

    return (
        <div className={style.profilePage}>
            <ProfileSidebar/>
            {children}
        </div>    
    )
}