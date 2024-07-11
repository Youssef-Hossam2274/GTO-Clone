import React from 'react'
import "./page.css"
import PRIVACY from '@/data/privacy_policy'
export default function page() {
    return (
        <div className='privacyPolicy-component'>
            <p className="privacyPolicy-title">
                Privacy Policy
            </p>
            <div className="all-Privacy">
                {
                    PRIVACY.map(privacyDetail =>{
                        return(
                            <div className="privacyDetail" key={privacyDetail.id}>

                                <p>{privacyDetail.Privacy}</p>
                                <p>{privacyDetail.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
