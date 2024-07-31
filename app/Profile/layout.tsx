import React from 'react'
import ProfileSidebar from '@/component/ProfileSidebar'
export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <div>
            <ProfileSidebar/>
            {children}
        </div>    
    )
}