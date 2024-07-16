import React from 'react'
import "./page.css"
import FAQs from "@/data/faqs"

export default function page() {
    return (
        <div className='faqs-component'>
            <p className="faqs-title">
                FAQs
            </p>
            <div className="all-questions">
                {
                    FAQs.map(faqsDetail =>{
                        return(
                            <div className="faqs-detail" key={faqsDetail.id}>
                                <div className="quest-answer">
                                    <p>{faqsDetail.quest}</p>
                                    <p>{faqsDetail.ans}</p>
                                </div>
                                <div className="faqs-steps">
                                    {
                                        faqsDetail.steps.map(stepDetail =>{
                                            return (
                                                <p key={faqsDetail.id} className='step-detail'>{stepDetail}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
