import React from 'react'
import "./page.css"
import ImageCart1 from "@/images/how-to-join/cart-1.jpg";
import ImageCart2 from "@/images/how-to-join/cart-2.jpg";
import ImageCart3 from "@/images/how-to-join/cart-3.jpg";
import ImageCart4 from "@/images/how-to-join/cart-4.jpg";
import ImageCart5 from "@/images/how-to-join/cart-5.jpg";
import ImageCart6 from "@/images/how-to-join/cart-6.jpg";
import MemberCart from '@/component/MemberCart';

const CARTS = [
  {
    id : 1,
    image: ImageCart1,
    description: "Click on 'Become a Member' and choose your preferred membership"
  },
  {
    id : 2,
    image: ImageCart2,
    description: "Complete the online form and make payment"
  },
  {
    id : 3,
    image: ImageCart3,
    description: "You will receive your GTO digital membership by email within 2 working days"
  },
  {
    id : 4,
    image: ImageCart4,
    description: "You will also receive your GTO Personal Travel Assistant Team contact details"
  },
  {
    id : 5,
    image: ImageCart5,
    description: "Your complimentary BrandVouchers.com login details will also be emailed to you"
  },
  {
    id : 6,
    image: ImageCart6,
    description: "Welcome to GTO membership, you can now start to enjoy your benefits and discounts"
  },
]


export default function page() {
  return (
    <div className='how-to-join-page'>
      <div className="howToJoinPage-description">
        <p className="howToJoin-title">
          HOW TO BECOME A MEMBER
        </p>
        <ul>
          <li>
            If you are interested in becoming a member, please contact with your mobile network operator, your bank or your insurance company to check if they have a partnership agreement with GTO. 
            If they do, your membership will be processed through them.
          </li>
          <li>
            You can also become GTO member via an invitation code sent to you from an existing VIP GTO member. 
            You need to enter the code in the invitation code box, 
            then follow the below steps.
          </li>
        </ul>
      </div>
      <div className="howToJionAllCart">
        {
          CARTS.map(cartDetail =>{
            return(
              <MemberCart
                id={cartDetail.id}
                image={cartDetail.image}
                description={cartDetail.description}
                key={cartDetail.id}
              />
            )
          })
        }
      </div>
    </div>
  )
}
