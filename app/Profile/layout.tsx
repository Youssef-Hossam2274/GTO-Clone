import React from 'react'
import ProfileSidebar from '@/component/ProfileSidebar'
import style from "./globals.module.css"

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <div className={style.profilePage}>
            <ProfileSidebar/>
            {children}
        </div>    
    )
}