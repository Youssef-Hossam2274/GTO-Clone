import React from 'react'
import "./page.css"

export default function page() {
    return (
        <div className='refundPolicy-component'>
            <p className="refundPolicy-title">
                Refund Policy
            </p>
            <div className='refundPolicy-description'>
                All quotations sent state the cancellation policy. If the cancellation policy is non-refundable, there will be no refund made due to cancellation under any circumstances. If the cancellation policy is refundable, the date before cancellation can be made and a refund received will be clearly stated. For example, if the quotation states Cancellation Before Tue, 14 May 2024, a refund will be due for cancellation made up to and including Mon, 13 May 2024.
                Refunds will be made using the same method that was used for payment and may take up to 30 days to reach the bank account/payment card.
            </div>
        </div>
    )
}
