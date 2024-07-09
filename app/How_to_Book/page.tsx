import React from 'react'
import step1Image from "@/images/howToOne.png"
import step2Image from "@/images/howToTwo.png"
import step3Image from "@/images/howToThree.png"
import Step from '@/component/Step'
import "./page.css"

const STEPS = [
  {
    id: 1,
    title:"1. Share the details of what you want to book",
    description:"Share a detailed screenshot or a link of what you want to book with your GTO Personal Travel Assistant Team on your WhatsApp chat group or via email. Once you become a member, your assigned GTO Personal Travel Assistant Team will create a WhatsApp chat group where you can discuss your travel requirements or via email on info@gtomembers.com",
    image:step1Image
  },
  {
    id: 2,
    title:"2. Approve the quotation and make payment",
    description:"Your GTO Personal Travel Assistant Team will send you a discounted quotation based on the details you have provided. The payment link can be found at the bottom of the quotation.",
    image:step2Image
  },
  {
    id: 3,
    title:"3. Receive the confirmation",
    description:"Once the payment is made, your GTO Personal Travel Assistant Team will send the booking confirmation to your WhatsApp chat group or email.",
    image:step3Image
  },
]



export default function page() {
  return (
    <div className='how-to-book-page'>
      <div className="steps-title">
        HOW TO RECEIVE YOUR DISCOUNTS
      </div>
      <div className="all-steps">
        {
          STEPS.map(stepDetail => {
            let direction = (stepDetail.id-1)%2 + 1;
            let classname = "";
            if(direction === 1)
                classname = "direction-1";
            else if(direction === 2)
                classname = "direction-2";
            return(
              <div className={classname} key={stepDetail.id}>
                <Step 
                  id={stepDetail.id}
                  title={stepDetail.title}
                  image={stepDetail.image}
                  description={stepDetail.description}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
