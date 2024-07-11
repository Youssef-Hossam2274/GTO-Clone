import React from 'react'
import "./page.css"
import TERMS from "@/data/terms_conditions";




export default function page() {
    return (
        <div className='termsCondition-component'>
            <div className="termsCondition-title">
                Terms & Conditions
            </div>
            <div className="all-terms">
                {
                    TERMS.map(termsDetail =>{
                        return(
                            <p className="terms-descritpion" key={termsDetail.id}>
                                {termsDetail.terms}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}
